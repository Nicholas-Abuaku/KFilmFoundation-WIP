import {
  Card,
  Paper,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Button,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

export const PressCard = (props) => {
  const { newsSource, articleTitle, articleUrl, image } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? (
        <Card
          width={"100%"}
          sx={{
            backgroundColor: "#339465",
            height: "auto",
            width: "90%",
            color: "white",
            marginLeft: "10px",
            marginBottom: "30px",
            borderRadius: "0px",
          }}
        >
          <CardMedia
            component={"img"}
            height={"300px"}
            src={image}
            loading="eager"
            title={props.articleTitle}
            alt={"News coverage from " + props.newsSource}
          />
          <CardContent>
            <Stack spacing={0}>
              <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                variant="subtitle1"
                component={"h3"}
              >
                {newsSource}
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                {articleTitle}
              </Typography>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              marginTop={2}
            >
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to={articleUrl}
              >
                Learn More
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Card
          width={"100%"}
          sx={{
            backgroundColor: "#339465",
            minHeight: "462px",
            width: "369.5px",
            color: "white",
            marginLeft: "10px",
            marginBottom: "30px",
            borderRadius: "0px",
          }}
        >
          <CardMedia
            component={"img"}
            height={"300px"}
            src={image}
            loading="eager"
            title={props.articleTitle}
            alt={"News coverage from " + props.newsSource}
          />
          <CardContent>
            <Stack spacing={0}>
              <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                variant="subtitle1"
                component={"h3"}
              >
                {newsSource}
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                {articleTitle}
              </Typography>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              marginTop={2}
            >
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to={articleUrl}
              >
                Learn More
              </Button>
            </Stack>
          </CardContent>
        </Card>
      )}
    </>
  );
};
