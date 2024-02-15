import { Box, Card, Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState, useEffect } from "react";
import axios from "axios";
export const DashboardAnalytics = () => {
  const API_KEY = import.meta.env.VITE_Event_API_KEY;
  const [sales, setSales] = useState([]);
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get(
        "  https://www.eventbriteapi.com/v3/organizations/335808768129/events/ ",
        { headers }
      );
      setSales(response.data.events);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{ width: "100%", maxHeight: "50%" }}
      elevation={0}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Capacity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.start.local}</TableCell>
              <TableCell>{event.name.text}</TableCell>
              <TableCell>{event.status}</TableCell>
              <TableCell>{event.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
