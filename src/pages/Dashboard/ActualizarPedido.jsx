import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL_API } from "../../api/config";
import { CircularProgress } from "@mui/material";

const api = "78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmQxZjc3ZS0xODQ2LTRkOWMtOTdjNC05NDljZWRjNTRmMmIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2Njk1OTIzMTh9.VU0MuPfSfqW3yrmiNeLcAntbqRxl0v3s0K8S4WOWZVc";

//Para obtener la información del pedido
function obtenerPedido(idPedido, setPedido, setHayDatos) {
  const urlGet = URL_API + "/tasks/" + idPedido;
  const paramsGet = {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      api: api,
    },
  };

  useEffect(() => {
    axios
      .get(urlGet, paramsGet)
      .then((response) => {
        if (response.data.id === idPedido) {
          setPedido(response.data);
          setHayDatos(true);
          console.log(response);
          return response;
        }
      })
      .catch((er) => console.log(er));
  }, []);
}

function enviarCambios(newPedido) {
  const url = URL_API + "/tasks/" + newPedido.id;
  const params = {
    method: "PATCH",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      api: api,
    },
  };

  const body = {
    type: newPedido.type,
    fechaEntrega: new Date(newPedido.fechaEntrega).toISOString(),
  };
  console.log(body);

  axios
    .patch(url, body, params)
    .then((response) => {
      if (response.status == 200) {
        alert("El pedido se ha actualizado correctamente");
        location.href = "/dashboard-admin/pedidos";
      } else alert("Ocurrió un error");
    })
    .catch((er) => console.log(er));
}

function ActualizarPedido() {
  let newPedido = {};
  let { idPedido } = useParams();
  let [pedido, setPedido] = useState({});
  let [hayDatos, setHayDatos] = useState(false);

  obtenerPedido(idPedido, setPedido, setHayDatos);
  newPedido = pedido;

  let x;
  let select;
  if (hayDatos) {
    if (pedido.cliente.gender === "Femenino") {
      select = (
        <select
          className="form-control custom-select"
          onClick={(e) => (newPedido.type = e.target.value)}
          id="selectTipo"
        >
          <option selected={pedido.type === "Vestido"} value="Vestido">
            Vestido
          </option>
          <option selected={pedido.type === "Blusa"} value="Blusa">
            Blusa
          </option>
          <option selected={pedido.type === "Camisa"} value="Camisa">
            Camisa
          </option>
          <option
            selected={pedido.type === "Chaqueta: Cuero"}
            value="Chaqueta: Cuero"
          >
            Chaqueta: Cuero
          </option>
        </select>
      );
    } else {
      select = (
        <select
          className=" form-control custom-select"
          onClick={(e) => (newPedido.type = e.target.value)}
          id="selectTipo"
        >
          <option
            selected={pedido.type === "Traje: Dos piezas"}
            value="Traje: Dos piezas"
          >
            Traje: Dos piezas
          </option>
          <option
            selected={pedido.type === "Traje: Tres piezas"}
            value="Traje: Tres piezas"
          >
            Traje: Tres piezas
          </option>
          <option selected={pedido.type === "Camisa"} value="Camisa">
            Camisa
          </option>
          <option
            selected={pedido.type === "Chaqueta: Cuero"}
            value="Chaqueta: Cuero"
          >
            Chaqueta: Cuero
          </option>
        </select>
      );
    }

    x = (
      <>
        <h4 className="text-center text-muted">Datos del cliente</h4>
        <div className="p-1">
          <p>
            <strong>ID:</strong> {pedido.cliente.id}
          </p>
          <p>
            <strong>Nombres:</strong> {pedido.cliente.firstName}{" "}
            {pedido.cliente.secondName}
          </p>
          <p>
            <strong>Apellidos:</strong> {pedido.cliente.firstLastName}{" "}
            {pedido.cliente.secondLastName}
          </p>
          <p>
            <strong>Fecha entrega: </strong>{" "}
            {pedido.fechaEntrega.substring(0, 10)}
          </p>
          <p>
            <strong>Género:</strong> {pedido.cliente.gender}
          </p>
        </div>
        <h4 className="text-center text-muted mb-3">Opciones del pedido</h4>

        <div>
          <form>
            <div
              className="d-flex flex-col justify-content-around"
              style={{ gap: "20%", margin: "0 auto" }}
            >
              <div>
                <label className="mb-2 d-block text-center">
                  Tipo de prenda
                </label>
                {select}
              </div>

              <div>
                <label className="mb-2 d-block text-center">
                  Fecha de entrega
                </label>
                <input
                  className="form-control"
                  onChange={(e) => {
                    // console.log(e.target.defaultValue);
                    newPedido.fechaEntrega = e.target.value;
                    console.log(newPedido);
                  }}
                  type={"datetime-local"}
                  defaultValue={pedido.fechaEntrega.substring(0, 16)}
                ></input>
              </div>
            </div>

            <div className="mt-5 d-flex flex-col">
              <div className="" style={{margin: "0 auto"}}>
              <button className="mx-3 btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  location.href = "/dashboard-admin/pedidos";
                }}
              >
                Cancelar
              </button>
              <button className="mx-5 btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  enviarCambios(newPedido);
                }}
              >
                Enviar
              </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  } else
    x = (
      <div
        className="card p-5 p-3 mb-5 rounded"
        style={{ width: "70%", margin: "5rem auto" }}
      >
        <CircularProgress
          className="mb-5"
          style={{ margin: "0 auto" }}
          color={"primary"}
        />
        <h6 style={{ margin: "0 auto" }} color="primary">
          Obteniendo Datos...
        </h6>
      </div>
    );

  return (
    <div
      className="card p-5 shadow-lg p-3 mb-5 bg-white rounded"
      style={{ width: "70%", margin: "5rem auto" }}
    >
      <h1 className="mb-5 text-center">Actualizar pedido</h1>
      {x}
    </div>
  );
}

export default ActualizarPedido;
