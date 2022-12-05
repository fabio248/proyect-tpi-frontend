import { TextField } from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AuthStr = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNDE1ZjhhZi0zMDBhLTRkYzQtODk0Zi1hNmQyY2E2ZThkMTAiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2Njk1MDExNDN9.IEsb0DhL-2QFH3C5fnPrlKxcFImJdrn3vqm9RC0J3G0";
const token= "78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b"
const url = "https://proyecto-tpi-backend-production.up.railway.app/api/v1"


function Actualizar() {
  let {clienteId} = useParams();
  const [datos, setDatos] = useState("");

  const urlGet = url + "/clientes/" + clienteId;
  const getParams = {
    method:"GET",
    headers:{
      Authorization: AuthStr,
      API:token,
    }
  }

  axios
  .get(urlGet, getParams)
  .then((response) => {
    // If request is good...
    console.log(response.data);
  })
  .catch((error) => {
    console.log("error " + error);
  });

  return (
    <h1>Actualizar cliente, ID={clienteId}</h1>
  );
}

export default Actualizar;
