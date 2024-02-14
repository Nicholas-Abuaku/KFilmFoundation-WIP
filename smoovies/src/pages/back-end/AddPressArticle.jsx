import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
  Alert,
  IconButton,
} from "@mui/material";
import { PressCardPreview } from "../../components/back-end/PressCardPreview";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
const AddPressArticle = () => {
  const [imageFile, setImageFile] = useState(null);
  const [articleData, setArticleData] = useState([]);
  const [fileName, setFileName] = useState();
  const [fileUrl, setFileUrl] = useState();
  const [newsSource, setNewsSource] = useState();
  const [articleTitle, setArticleTitle] = useState();
  const [articleUrl, setArticleUrl] = useState();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const params = useParams();
  const articleId = params.id;
  function fileHandler(event) {
    setImageFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setFileUrl(URL.createObjectURL(event.target.files[0]));
    console.log(imageFile);
    console.log(fileName);
  }

  function handleSourceChange(event) {
    console.log(event.target.value);
    setNewsSource(event.target.value);
  }
  function handleTitleChange(event) {
    console.log(event.target.value);
    setArticleTitle(event.target.value);
  }
  function handleUrlChange(event) {
    console.log(event.target.value);
    setArticleUrl(event.target.value);
  }

  const API_KEY = import.meta.env.VITE_Laravel_API_KEY;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
  };
  const handleNew = async () => {
    try {
      const formData = new FormData();
      formData.append("news_source", newsSource);
      formData.append("article_title", articleTitle);
      formData.append("article_url", articleUrl);
      formData.append("image", imageFile, fileName);
      axios
        .post("http://localhost:8000/api/press", formData, { headers })
        .then((res) => {
          console.log(res);
          setShowSuccessAlert(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append("news_source", newsSource);
      formData.append("article_title", articleTitle);
      formData.append("article_url", articleUrl);
      formData.append("image", imageFile, fileName);
      axios
        .post("http://localhost:8000/api/press/" + articleId, formData, {
          headers,
        })
        .then((res) => {
          console.log(res);
          setShowSuccessAlert(true);
        });
    } catch (err) {
      console.log(err);
    }
  };
  function handleSubmit() {
    if (articleId) {
      console.log("there is id");
      handlePost();
    } else {
      console.log("No id");
      handleNew();
    }
  }

  const fetchPressInfo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/press/" + articleId
      );
      setArticleData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPressInfo();
  }, []);
  return (
    <form>
      <Stack
        spacing={2}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack direction={"row"} spacing={2}>
          <IconButton component={Link} to={"/dashboard/press"}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h3">{articleId ? "Edit" : "New"}</Typography>
        </Stack>
        <PressCardPreview
          img={
            fileUrl
              ? fileUrl
              : "http://localhost:8000/storage/" + articleData.image
          }
          source={newsSource ? newsSource : articleData.news_source}
          title={articleTitle ? articleTitle : articleData.article_title}
        />
        <TextField
          name="news_source"
          label="News Source"
          sx={{ width: "80%" }}
          onChange={handleSourceChange}
        />
        <TextField
          name="article_title"
          label="Article Title"
          rows={8}
          sx={{ width: "80%" }}
          onChange={handleTitleChange}
        />
        <TextField
          name="article_url"
          label="Article Link"
          rows={8}
          sx={{ width: "80%" }}
          onChange={handleUrlChange}
        />
        {showSuccessAlert && (
          <Alert severity="success">
            {articleId
              ? "Article Information Successfully Updated!"
              : "Article Added Successfully"}
          </Alert>
        )}
        <Button component="label" variant="contained">
          Upload Image
          <input type="file" hidden onChange={fileHandler} />
        </Button>
      </Stack>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={5}
      >
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default AddPressArticle;
