import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Slide,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  MainHeader,
  textfieldStyle,
  globleTypographies,
  mainContainerBoxStyle,
  sidebarInfoStackStyle,
} from "../../../utils/muiComponentStyles";

const Index = ({ currentIndex, activeIndex, isSmall }) => {
  const [form, setForm] = useState({
    user_email: "",
    user_name: "",
    message: "",
  });

  const [openSnack, setOpenSnack] = useState(false);
  const [snackmessage, setSnackMessage] = useState("");

  const handleClose = () => {
    setOpenSnack(false);
  };

  const handleStateChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cx3l409",
        "template_5lzu2hn",
        e.target,
        "3dfSzWhZNrZMRxzQU"
      )
      .then(
        (result) => {
          setSnackMessage("Your message has been sent");
          setOpenSnack(true);
          console.log(result.text);
        },
        (error) => {
          setSnackMessage("Something went wrong");
          setOpenSnack(true);
          console.log(error.text);
        }
      );

    setForm({
      user_email: "",
      user_name: "",
      message: "",
    });
  };

  return (
    <Slide
      mountOnEnter
      timeout={500}
      unmountOnExit
      direction="left"
      in={isSmall || (currentIndex === 4 && activeIndex === 4)}
    >
      <Box sx={mainContainerBoxStyle}>
        <MainHeader leftdir={isSmall ? "185%" : "180%"} variant="custom">
          Contact
        </MainHeader>
        <Stack sx={sidebarInfoStackStyle}>
          <Typography sx={{ ...globleTypographies, mb: 2 }}>
            Looking to <strong>elevate your project?</strong>
            <strong> Hire us today!</strong> Reach out through this form.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              sx={{ ...textfieldStyle, mt: 1 }}
              label="Name"
              type="text"
              required
              value={form.user_name}
              name="user_name"
              onChange={handleStateChange}
              InputLabelProps={{
                style: { color: "#6D7B88" },
              }}
            />
            <TextField
              fullWidth
              sx={{ ...textfieldStyle, mt: 1 }}
              label="Email"
              type="email"
              required
              value={form.user_email}
              name="user_email"
              onChange={handleStateChange}
              InputLabelProps={{
                style: { color: "#6D7B88" },
              }}
            />
            <TextField
              fullWidth
              multiline
              required
              sx={{ ...textfieldStyle, mt: 1 }}
              label="Message"
              rows={6}
              value={form.message}
              name="message"
              onChange={handleStateChange}
              InputLabelProps={{
                style: { color: "#6D7B88" },
              }}
            />
            <Button
              variant="gradientOutlined"
              sx={{ mt: 1 }}
              type="submit"
              value="send"
            >
              Submit
            </Button>
          </form>
          <Snackbar
            open={openSnack}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            autoHideDuration={3000}
            onClose={handleClose}
            message={snackmessage}
          />
        </Stack>
      </Box>
    </Slide>
  );
};

export default Index;
