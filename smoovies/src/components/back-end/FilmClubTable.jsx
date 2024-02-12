import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { FilmClubActions } from "./FilmClubActions";
import { Link } from "react-router-dom";
export const FilmClubTable = () => {
  const API_KEY = import.meta.env.VITE_Event_API_KEY;
  const [data, setData] = useState([]);

  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  const fetchFilmClubs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/film-clubs", {
        headers,
      });
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFilmClubs();
  }, []);

  return (
    <>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: "5px", marginRight: "5px", float: "right" }}
        component={Link}
        to={"/dashboard/film-clubs/new"}
      >
        Add
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Heading</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((club) => (
              <TableRow key={club.id}>
                <TableCell>{club.id}</TableCell>
                <TableCell>{club.heading}</TableCell>
                <TableCell>{club.description}</TableCell>
                <TableCell>
                  <img
                    src={"http://localhost:8000/storage/" + club.img_Url}
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                </TableCell>
                <TableCell>
                  <FilmClubActions id={club.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
