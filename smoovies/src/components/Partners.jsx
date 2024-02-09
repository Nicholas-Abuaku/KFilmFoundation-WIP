import React from "react";
import {
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
  createTheme,
} from "@mui/material";
export const Partners = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const textTheme = createTheme();
  return (
    <Grid
      item
      container
      md={12}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={1}
    >
      <Grid item md={12}>
        {isMobile ? (
          <Stack
            direction={"row"}
            spacing={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/rsz_comic-relief.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/sslogo.png/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/foyle-foundation.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/bfi_logo_transp.png/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Lottery-black.jpg/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
          </Stack>
        ) : (
          <Stack
            direction={"row"}
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/rsz_comic-relief.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/sslogo.png/:/rs=h:100,cg:true,m" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/foyle-foundation.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/bfi_logo_transp.png/:/rs=h:100,cg:true,m" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Lottery-black.jpg/:/rs=h:100,cg:true,m" />
          </Stack>
        )}
      </Grid>
      {/* Row 2 of images */}
      <Grid item md={12}>
        {isMobile ? (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}
          >
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/logo_2023.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/animation%20%20company.png/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/future%20youth.png/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/POW.png/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
          </Stack>
        ) : (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={20}
          >
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/logo_2023.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/animation%20%20company.png/:/rs=h:100,cg:true,m" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/future%20youth.png/:/rs=h:100,cg:true,m" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/POW.png/:/rs=h:100,cg:true,m" />
          </Stack>
        )}
      </Grid>
      {/*Row 3 of images */}
      <Grid item md={12}>
        {isMobile ? (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}
          >
            <img
              src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/margate%20pride.jpe/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/oasis%202.png/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/DYT.jpe/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/powell.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/download%20(1).png/:/rs=h:100,cg:true,m"
              style={{ width: "60px", height: "60px" }}
            />
          </Stack>
        ) : (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={20}
          >
            <img src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/margate%20pride.jpe/:/rs=h:100,cg:true,m" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/oasis%202.png/:/rs=h:100,cg:true,m" />
            <img src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/DYT.jpe/:/rs=h:100,cg:true,m" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/powell.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" />
            <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/download%20(1).png/:/rs=h:100,cg:true,m" />
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};
