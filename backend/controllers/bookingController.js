import { Booking } from "../models/Booking.js";
import { SeatManager } from "../services/SeatManager.js";
import { sendBookingConfirmationEmail } from "../services/NotifierService.js";
import { sequelize } from "../models/index.js";

export async function confirmBooking(req, res) {
  const { passengerName, route, time, seatNumber } = req.body;

  try {
    const isSeatAvailable = await SeatManager.checkSeatAvailability(
      route,
      time,
      seatNumber
    );
    if (!isSeatAvailable) {
      return res.status(400).json({
        error: "Seat is not available for the selected route and time.",
      });
    }

    const transaction = await sequelize.transaction();
    try {
      await SeatManager.reserveSeat(route, time, seatNumber);

      const newBooking = await Booking.create(
        { passengerName, route, time, seatNumber },
        { transaction }
      );
      await transaction.commit();
      await sendBookingConfirmationEmail(passengerName, newBooking);

      res.status(201).json({
        message: "Booking confirmed successfully!",
        booking: newBooking,
      });
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error("Error confirming booking:", error);
    res.status(500).json({ error: "Failed to confirm booking." });
  }
}
