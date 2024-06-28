import { Seat } from "../models/Seat.js";

class SeatManager {
  static async checkSeatAvailability(route, time, seatNumber) {
    const seat = await Seat.findOne({
      where: {
        route: route,
        time: time,
        seatNumber: seatNumber,
        available: true,
      },
    });

    return seat !== null;
  }

  static async reserveSeat(route, time, seatNumber) {
    const seat = await Seat.findOne({
      where: {
        route: route,
        time: time,
        seatNumber: seatNumber,
      },
    });

    if (seat) {
      seat.available = false;
      await seat.save();
      return seat;
    }

    throw new Error("Seat not available");
  }
}

export { SeatManager };
