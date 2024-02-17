import React from "react";
import {
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
  createTheme,
  Typography,
} from "@mui/material";
import GarfieldWestonIcon from "../assets/images/1GarfieldWestonFoundation.png";
import ColyerFergusonIcon from "../assets/images/1ColyerFerguson.png";
import KentCommunityFoundationIcon from "../assets/images/1KentCommunityFoundation .png";
import PartnerLogo from "../assets/images/1PartnerLogo.png";
import FilmHubSoutheastLogo from "../assets/images/1FilmHubSoutheast.png";
import ComicRelief from "../assets/images/2ComicRelief.png";
import ScreenSouth from "../assets/images/2ScreenSouth.png";
import FoyleFoundation from "../assets/images/2FoyleFoundation.png";
import BFFilm from "../assets/images/2BFFilm.png";
import LotteryFunded from "../assets/images/2LotteryFunded.png";
import RamsgateFilm from "../assets/images/3RamsgateInternationalFilm.png";
import AnimationCompany from "../assets/images/3TheAnimationCompany.png";
import FutureYouthProject from "../assets/images/3FutureYouthProject.png";
import POW from "../assets/images/3PowerOfWomen.png";
import MargatePride from "../assets/images/4MargatePride.png";
import Oasis from "../assets/images/4OasisDomessticAbuseService.png";
import DoverYouth from "../assets/images/4DoverYouthTheatre.png";
import LoveQuexPark from "../assets/images/4QuexPark.png";
import CharltonAthletic from "../assets/images/4CharltonAthletic.png";
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
        <Typography textAlign={"center"} variant="h4" marginBottom={3}>
          A HUGE THANKS to our Partners
        </Typography>
      </Grid>
      <Grid item md={12}>
        {isMobile ? (
          <Stack
            direction={"row"}
            spacing={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src={GarfieldWestonIcon}
              style={{ width: "60px", height: "60px" }}
              alt="Garfield Weston Foundation"
            />
            <img
              src={ColyerFergusonIcon}
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src={KentCommunityFoundationIcon}
              style={{ width: "60px", height: "60px" }}
            />
            <img src={PartnerLogo} style={{ width: "60px", height: "60px" }} />
            <img
              src={FilmHubSoutheastLogo}
              style={{ width: "60px", height: "60px" }}
            />
          </Stack>
        ) : (
          <Stack
            direction={"row"}
            spacing={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src={GarfieldWestonIcon}
              alt="Garfield Weston Foundation"
              title="Garfield Weston Foundation"
              loading="lazy"
            />
            <img
              src={ColyerFergusonIcon}
              alt="Colyer Ferguson Charitable Trust"
              title="Colyer Ferguson Charitable Trust"
              loading="lazy"
            />
            <img
              src={KentCommunityFoundationIcon}
              alt="Kent Community Foundation"
              title="Kent Community Foundation"
              loading="lazy"
            />
            <img
              src={PartnerLogo}
              alt="Unknown Partner Logo"
              title="Unknown Partner Logo"
              loading="lazy"
            />
            <img
              src={FilmHubSoutheastLogo}
              alt="Film Hub Southeast"
              title="Film Hub Southeast"
              loading="lazy"
            />
          </Stack>
        )}
      </Grid>
      {/* Row 2 of images */}
      <Grid item xs={12}>
        <Typography variant="h4" textAlign={"center"}>
          Supporters over the past 24 months
        </Typography>
      </Grid>
      <Grid item md={12}>
        {isMobile ? (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}
          >
            <img src={ComicRelief} style={{ width: "60px", height: "60px" }} />
            <img src={ScreenSouth} style={{ width: "60px", height: "60px" }} />
            <img
              src={FoyleFoundation}
              style={{ width: "60px", height: "60px" }}
            />
            <img src={BFFilm} style={{ width: "60px", height: "60px" }} />
            <img
              src={LotteryFunded}
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
            <img
              src={ComicRelief}
              alt="Comic Relief"
              title="Comic Relief"
              loading="lazy"
            />
            <img
              src={ScreenSouth}
              alt="Screen South"
              title="Screen South"
              loading="lazy"
            />
            <img
              src={FoyleFoundation}
              alt="Foyle Foundation"
              title="Foyle Foundation"
              loading="lazy"
            />
            <img
              src={BFFilm}
              alt="British Film Institute"
              title="British Film Institute"
              loading="lazy"
            />
            <img
              src={LotteryFunded}
              alt="Arts Council England"
              title="Arts Council England"
              loading="lazy"
            />
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
            <img src={RamsgateFilm} style={{ width: "60px", height: "60px" }} />
            <img
              src={AnimationCompany}
              style={{ width: "60px", height: "60px" }}
            />
            <img
              src={FutureYouthProject}
              style={{ width: "60px", height: "60px" }}
            />
            <img src={POW} style={{ width: "60px", height: "60px" }} />
          </Stack>
        ) : (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={20}
          >
            <img
              src={RamsgateFilm}
              title="Ramsgate International Film & TV Festival"
              alt="Ramsgate International Film & TV Festival"
              loading="lazy"
            />
            <img
              src={AnimationCompany}
              title="The Animation Company"
              alt="The Animation Company"
              loading="lazy"
            />
            <img
              src={FutureYouthProject}
              title="Future Youth Project"
              alt="Future Youth Project"
              loading="lazy"
            />
            <img
              src={POW}
              title="Power of Women Thanet"
              alt="Power of Women Thanet"
              loading="lazy"
            />
          </Stack>
        )}
      </Grid>
      <Grid item md={12}>
        {isMobile ? (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}
          >
            <img src={MargatePride} style={{ width: "60px", height: "60px" }} />
            <img src={Oasis} style={{ width: "60px", height: "60px" }} />
            <img src={DoverYouth} style={{ width: "60px", height: "60px" }} />
            <img src={LoveQuexPark} style={{ width: "60px", height: "60px" }} />
            <img
              src={CharltonAthletic}
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
            <img
              src={MargatePride}
              title="Margate Pride"
              alt="Margate Pride"
              loading="lazy"
            />
            <img
              src={Oasis}
              title="Oasis Domestic Abuse Service"
              alt="Oasis Domestic Abuse Service"
              loading="lazy"
            />
            <img
              src={DoverYouth}
              title="Dover Youth Theatre"
              alt="Dover Youth Theatre"
              loading="lazy"
            />
            <img
              src={LoveQuexPark}
              title="Quex Park & Powell Cotton Museum"
              alt="Quex Park & Powell Cotton Museum"
              loading="lazy"
            />
            <img
              src={CharltonAthletic}
              title="Charlton Athletic F.C"
              alt="Charlton Athletic F.C"
              loading="lazy"
            />
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};
