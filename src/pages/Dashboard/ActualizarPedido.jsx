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
  }
  console.log(body);

  axios.patch(url, body,params).then((response) => {
    if(response.status == 200){
      alert("El pedido se ha actualizado correctamente")
      location.href = "/dashboard-admin/pedidos";
    } else alert("Ocurrió un error")
  }).catch((er) => console.log(er))

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
        <h3>Datos del cliente</h3>
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
          <strong>Fecha entrega: </strong> {pedido.fechaEntrega}
        </p>
        <p>
          <strong>Género:</strong> {pedido.cliente.gender}
        </p>

        <h3>Opciones del pedido</h3>

        <form>
          <label>Tipo de prenda</label>
          {select}
          <label>Fecha de entrega</label>
          <input
            onChange={(e) => {
              // console.log(e.target.defaultValue);
              newPedido.fechaEntrega = e.target.value;
              console.log(newPedido);
            }}
            type={"datetime-local"}
            defaultValue={pedido.fechaEntrega.substring(0,16)}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              location.href = "/dashboard-admin/pedidos";
            }}
          >
            Cancelar
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              enviarCambios(newPedido);
            }}
          >
            Enviar
          </button>
        </form>
      </>
    );
  } else
    x = (
      <>
        <CircularProgress color={"primary"} />
        <h6 color="primary">Obteniendo Datos...</h6>
      </>
    );

  return (
    <>
      <h1>Actualizar pedido</h1>
      {x}
    </>
  );
}

{
  /* <Route 
          path='/dashboard-admin/clientes/:idCliente'
          element={
            <Dashboard>
              <Actualizar />
            </Dashboard>
          }
        ></Route> */
}

export default ActualizarPedido;
