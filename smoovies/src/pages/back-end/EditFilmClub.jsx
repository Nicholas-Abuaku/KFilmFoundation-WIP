import React, { useEffect, useState } from "react";
import { FilmClubCard } from "../../components/back-end/FilmClubCard";
import {
  Stack,
  TextField,
  Button,
  Grid,
  Typography,
  Alert,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
export const EditFilmClub = () => {
  const params = useParams();
  const userId = params.id;
  const [imageFile, setImageFile] = useState();
  const [fileUrl, setFileUrl] = useState();
  const [clubData, setClubData] = useState([]);
  const [fileName, setFileName] = useState();
  const [heading, setHeading] = useState();
  const [description, setDescription] = useState();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const API_KEY = import.meta.env.VITE_Laravel_API_KEY;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "multipart/form-data",
  };

  function handlePost() {
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("description", description);
    formData.append("img_Url", imageFile, fileName);

    axios
      .post("http://localhost:8000/api/film-clubs/" + userId, formData, {
        headers,
      })
      .then((res) => {
        console.log(res);
        setShowSuccessAlert(true);
      });
  }
  const fetchClubData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/film-clubs/" + userId
      );
      setClubData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  function fileHandler(event) {
    setImageFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setFileUrl(URL.createObjectURL(event.target.files[0]));
    console.log(imageFile);
    console.log(fileName);
  }

  function handleHeadingChange(event) {
    console.log(event.target.value);
    setHeading(event.target.value);
  }
  function handleDescriptionChange(event) {
    console.log(event.target.value);
    setDescription(event.target.value);
  }

  useEffect(() => {
    fetchClubData();
  }, []);
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={12}>
        <h1>Edit {userId}</h1>
      </Grid>
      <Grid item xs={6}>
        <form>
          <Stack
            direction={"column"}
            spacing={4}
            justifyContent={"center"}
            alignItems={"center"}
            marginRight={0}
          >
            <TextField
              name="heading"
              label="heading"
              onChange={handleHeadingChange}
              sx={{ width: "100%" }}
            />
            <TextField
              name="description"
              label="Description"
              onChange={handleDescriptionChange}
              sx={{ width: "100%" }}
              multiline={true}
              rows={9}
            />
          </Stack>
          <Stack direction={"row"} spacing={2} marginTop={4}>
            <Button component="label" variant="contained">
              Upload Image
              <input type="file" hidden onChange={fileHandler} />
            </Button>
            <Button variant="contained" color="success" onClick={handlePost}>
              Submit
            </Button>
          </Stack>
          {showSuccessAlert && (
            <Alert severity="success">Film Club Successfully Updated!</Alert>
          )}
        </form>
      </Grid>
      <Grid item xs={3} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={0}>
          <Typography
            variant="h4"
            textAlign={"center"}
            sx={{ textDecoration: "underline" }}
          >
            Preview
          </Typography>
          <FilmClubCard
            heading={heading ? heading : clubData.heading}
            desc={description ? description : clubData.description}
            img={
              fileUrl
                ? fileUrl
                : "http://localhost:8000/storage/" + clubData.img_Url
            }
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
