import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Slide,
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
  const [form, setForm] = useState({ email: "", username: "", message: "" });

  const handleStateChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Slide
      mountOnEnter
      timeout={500}
      unmountOnExit
      direction="left"
      in={isSmall || (currentIndex == 4 && activeIndex === 4)}
    >
      <Box sx={mainContainerBoxStyle}>
        <MainHeader leftdir={isSmall ? "185%" : "180%"} variant="custom">
          Contact
        </MainHeader>
        <Stack sx={sidebarInfoStackStyle}>
          <Typography sx={{ globleTypographies, mb: 2 }}>
            Looking to <strong>elevate your project?</strong>
            <strong> Hire us today!</strong> Reach out through this form.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              sx={{ ...textfieldStyle, mt: 1 }}
              label="Name"
              required
              rows={4}
              name="username"
              onChange={handleStateChange}
              InputLabelProps={{
                style: { color: "#6D7B88" },
              }}
            />
            <TextField
              fullWidth
              sx={{ ...textfieldStyle, mt: 1 }}
              label="Email"
              required
              rows={4}
              name="email"
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
              rows={4}
              name="message"
              onChange={handleStateChange}
              InputLabelProps={{
                style: { color: "#6D7B88" },
              }}
            />
            <Button variant="gradientOutlined" sx={{ mt: 1 }} type="submit">
              Submit
            </Button>
          </form>
        </Stack>
      </Box>
    </Slide>
  );
};

export default Index;
