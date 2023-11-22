import React from "react";
import { Box, Stack } from "@mui/material";
import { BadgeBox } from "../../utils/muiComponentStyles";
import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
} from "../../assets/AssetExporter";

const stack = [GitHubIcon, LeetCodeIcon, LinkedInIcon, GitHubIcon];

const BadgeStack = () => {
  return (
    <Stack gap={2} direction={"row"}>
      {stack.map((icon, idx) => (
        <BadgeBox key={idx}>
          <Box sx={{ height: 25, width: 25 }} component={icon} />
        </BadgeBox>
      ))}
    </Stack>
  );
};

export default BadgeStack;
