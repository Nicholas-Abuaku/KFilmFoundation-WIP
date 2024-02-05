import React from "react";
import { Skeleton, Stack } from "@mui/material";
export const Press = () => {
  return (
    <Stack direction={"row"}>
      <Skeleton
        variant="rectangular"
        width={974}
        height={465}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        width={929}
        height={465}
        animation="wave"
      />
    </Stack>
  );
};
