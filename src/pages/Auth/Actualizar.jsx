import React, { useState, useEffect } from "react";
import { get, useForm } from "react-hook-form";
import { useFetcher, useParams } from "react-router-dom";
import axios from "axios";

function Actualizar() {
  const AuthStr =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNDE1ZjhhZi0zMDBhLTRkYzQtODk0Zi1hNmQyY2E2ZThkMTAiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2Njk1MDExNDN9.IEsb0DhL-2QFH3C5fnPrlKxcFImJdrn3vqm9RC0J3G0";
  const token =
    "78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b";
  const url = "https://proyecto-tpi-backend-production.up.railway.app/api/v1";

  const { idCliente } = useParams();
  const [cliente, setCliente] = useState({firstName:''});

  const urlCliente = url + "/clients/" + idCliente;

  const getParams = {
    headers: {
      Authorization: AuthStr,
      API: token,
    },
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm(
    {
      defaultValues: cliente
    },
    []
  );

  const onSubmit = (data) => {
    var postData = {
      firstName: data.firstName,
    };
    console.log(postData)
    console.log(cliente);
    axios
      .post(urlCliente, postData, getParams)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.error("AXIOS ERROR: ", err);
      });
  };
  useEffect(() => {
    axios
      .get(urlCliente, getParams)
      .then((response) => {
        // If request is good...
        // console.log(response.data);
        setCliente(response.data);
        reset(response.data);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, [reset]);

  return (
    <div
      className="card p-5 shadow-lg p-3 mb-5 bg-white rounded"
      style={{ width: "70%", margin: "5rem auto" }}
    >
      <h1 className="mb-5 text-center">Actualizar cliente</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row mb-4">
          <div className="col-3">
            <label style={{ letterSpacing: "1px" }}>Nombres:</label>
          </div>
          <div className="col">
            <input
              type="text"
              {...register("firstName", {
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                  message: "Debe contener unicamente letras",
                },
              })}
              placeholder="Primer nombre"
            />
            {errors.firstName && (
              <p className="errorMsg">{errors.firstName.message}</p>
            )}
          </div>
        </div>
        <input
          type="submit"
          value="Actualizar"
          className="btn btn-primary btn-lg"
          style={{ float: "inherit", marginRight: "20%" }}
        ></input>
      </form>
    </div>
  );
}

export default Actualizar;
