import React, { useState } from "react";
import { LatestScreeningCard } from "../LatestScreeningCard";
import { Alert, Button, Stack, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
export const EditLatestScreening = () => {
  const [heading, setHeading] = useState();
  const [date, setDate] = useState();
  const [eventUrl, setEventUrl] = useState();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const API_KEY = import.meta.env.VITE_Laravel_API_KEY;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "multipart/form-data",
  };
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  function fileHander(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    console.log(fileName);
    setFileUrl(URL.createObjectURL(event.target.files[0]));
  }
  function handleDateChange(e) {
    console.log(e.target.value);
    setDate(e.target.value);
    console.log(file);
  }

  function handleHeadingChange(e) {
    console.log(e.target.value);
    setHeading(e.target.value);
  }

  function handleDescriptionChange(e) {
    console.log(e.target.value);
    setDescription(e.target.value);
  }

  function handlePost() {
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("img_Url", file, fileName);
    console.log(file);
    axios
      .post("http://localhost:8000/api/featured-content", formData, { headers })
      .then((res) => {
        console.log(res.data);
        setShowSuccessAlert(true);
      });
  }
  return (
    <>
      <LatestScreeningCard
        title={heading}
        date={date}
        ticketLink={eventUrl}
        img={fileUrl}
        description={description}
        edit={true}
      />
      <form style={{ marginTop: "50px" }}>
        <Stack
          spacing={2}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TextField
            name="title"
            label="Title"
            sx={{ width: "50%" }}
            onChange={handleHeadingChange}
          />
          <TextField
            type="date"
            name="date"
            onChange={handleDateChange}
            sx={{ width: "50%" }}
          />
          <TextField
            label="description"
            name="description"
            onChange={handleDescriptionChange}
            sx={{ width: "50%" }}
          />
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          marginTop={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button component="label" variant="contained">
            Upload Image
            <input type="file" hidden onChange={fileHander} />
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#339465" }}
            onClick={handlePost}
          >
            Submit
          </Button>
        </Stack>
        {showSuccessAlert && (
          <Alert icon={<CheckIcon />} severity="success">
            Screening Successfully Updated!
          </Alert>
        )}
      </form>
    </>
  );
};
