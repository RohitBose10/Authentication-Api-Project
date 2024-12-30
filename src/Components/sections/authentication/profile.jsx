import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authdetailpart } from "../../../axiosInstance/axiosInstance";
import { fetchProfile } from "../../redux/slice/AuthenticationSlice";
import {
  Avatar,
  Box,
  Container,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export const Profile = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProfile());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <Container component="main" maxWidth="xs" sx={{ mt: 8, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading profile...
        </Typography>
      </Container>
    );
  }

  if (status === "failed") {
    return (
      <Container component="main" maxWidth="xs" sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mt: 8 }}>
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 3,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          {user && (
            <>
              <Avatar
                src={user.profile_pic ? authdetailpart(user.profile_pic) : ""}
                alt="Profile Picture"
                sx={{ width: 120, height: 120, margin: "0 auto", mb: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                {user.first_name || "N/A"} {user.last_name || ""}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                {user.email || "N/A"}
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  Edit your profile settings to personalize this page further.
                </Typography>
              </Box>
            </>
          )}

          {!user && (
            <Typography variant="h6" color="textSecondary">
              No profile data available.
            </Typography>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;