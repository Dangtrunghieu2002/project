import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./styles.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/signup",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      // Store the full name in session storage
      const fullName = `${firstName} ${lastName}`;
      sessionStorage.setItem("userName", fullName);

      // Navigate to the signup success page
      navigate("/signup-success");

      setMessage(response.data.message);
      setLoading(false);
    } catch (error) {
      console.error("Sign-up error:", error);
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data.message || "An error occurred");
      } else if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unknown error occurred");
      }
    }
  };

  return (
    <Box
      sx={{
        background: "#F5F5F5",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "1076px",
          height: "761px",
          background: "#ffffff",
          borderRadius: "20px",
        }}
      >
        <Grid container sx={{ flex: 1 }}>
          <Grid item xs={6} sx={{ padding: "32px" }}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "bold",
                textAlign: "center",
                paddingBottom: "70px",
              }}
            >
              Create a new account
            </Typography>
            <form style={{ paddingLeft: "30px" }} onSubmit={handleSubmit}>
              <Grid container rowSpacing={5}>
                <Grid item xs={11}>
                  <label className="form-label" style={{ fontSize: "16px" }}>
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      background: "#F7FBFF",
                      borderRadius: "12px",
                    }}
                  />
                </Grid>
                <Grid item xs={11}>
                  <label className="form-label" style={{ fontSize: "16px" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      background: "#F7FBFF",
                      borderRadius: "12px",
                    }}
                  />
                </Grid>
                <Grid item xs={11}>
                  <label className="form-label" style={{ fontSize: "16px" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      background: "#F7FBFF",
                      borderRadius: "12px",
                    }}
                  />
                </Grid>
                <Grid item xs={11}>
                  <label className="form-label" style={{ fontSize: "16px" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      background: "#F7FBFF",
                      borderRadius: "12px",
                    }}
                  />
                </Grid>
                <Grid item xs={11}>
                  <button
                    type="submit"
                    className="submit-sign-up"
                    disabled={loading}
                  >
                    {loading ? "Signing up..." : "Sign up"}
                  </button>
                </Grid>
              </Grid>
            </form>
            {message && (
              <Typography
                sx={{
                  color: "#ff0000",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                {message}
              </Typography>
            )}
            <Typography
              sx={{
                color: "#959CB6",
                fontSize: "16px",
                textAlign: "center",
                paddingTop: "60px",
              }}
            >
              @ 2023 ALL RIGHT RESERVED
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              padding: "32px 0",
            }}
          >
            <img
              src="./images/Art.jpg"
              style={{
                width: "491px",
                height: "697px",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUp;
