import React from "react";
import { Box, Stack } from "@mui/material";
import { BadgeBox } from "../../utils/muiComponentStyles";
import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  StackOverFlow,
} from "../../assets/AssetExporter";

const stackData = [
  { icon: GitHubIcon, link: "https://github.com/IrfanAlvi01/" },
  { icon: LeetCodeIcon, link: " https://leetcode.com/irfan-alvi/" },
  { icon: LinkedInIcon, link: "https://www.linkedin.com/in/irfan-alvi/" },
  { icon: StackOverFlow, link: "https://stackoverflow.com/users/22035858/irfan-alvi/" },
];

const handleClick = (link) => {
  window.open(link);
};

const BadgeStack = () => {
  return (
    <Stack gap={2} mt={3} direction={"row"}>
      {stackData.map((item, idx) => (
        <BadgeBox
          key={idx}
          onClick={() => handleClick(item.link)}
          sx={{ cursor: "pointer" }}
        >
          <Box sx={{ height: 25, width: 25 }} component={item.icon} />
        </BadgeBox>
      ))}
    </Stack>
  );
};

export default BadgeStack;
