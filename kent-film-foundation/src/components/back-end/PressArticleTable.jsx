import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { ManageTableContext } from "../../Contexts/ManageTableContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { PressActionsButton } from "./PressActionsButton";
export const PressArticleTable = () => {
  const [pressData, setPressData] = useState([]);
  const [deleteCounter, setDeleteCounter] = useState(0);
  const { tableUpdate, setTableUpdate } = useContext(ManageTableContext);

  const fetchPressData = async () => {
    try {
      const response = await axios.get(
        "https://kentfilm.up.railway.app/api/press"
      );
      console.log(response.data);
      setPressData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPressData();
  }, [tableUpdate, deleteCounter]);

  const forceTableRefresh = () => {
    fetchPressData();
    // Increment deleteCounter to trigger a refresh
    setDeleteCounter((prevCounter) => prevCounter + 1);
    setTableUpdate(false);
  };
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>News Source</TableCell>
              <TableCell>Article Title</TableCell>
              <TableCell>Article Url</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pressData.map((article) => (
              <TableRow key={article.id}>
                <TableCell>{article.id}</TableCell>
                <TableCell>{article.news_source}</TableCell>
                <TableCell>{article.article_title}</TableCell>
                <TableCell>
                  {
                    <Typography component={Link} to={article.article_url}>
                      Article
                    </Typography>
                  }
                </TableCell>
                <TableCell>
                  {
                    <img
                      src={
                        "https://kentfilm.up.railway.app/storage/" +
                        article.image
                      }
                      style={{ width: "50px", height: "50px" }}
                    />
                  }
                </TableCell>
                <TableCell>
                  <PressActionsButton
                    id={article.id}
                    onDelete={forceTableRefresh}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
