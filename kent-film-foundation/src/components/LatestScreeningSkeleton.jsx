import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

export const LatestScreeningSkeleton = () => {
  return (
    <Box sx={{ display: "inline", width: "100%" }}>
      <Stack direction={"row"}>
        <Skeleton variant="rectangular" width={1903} height={465.52} />
      </Stack>
    </Box>
  );
};
