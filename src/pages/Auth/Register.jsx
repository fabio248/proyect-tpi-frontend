import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Register() {
  const urlClientes = "https://proyecto-tpi.onrender.com/api/v1/clients";
  const AuthStr =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNDE1ZjhhZi0zMDBhLTRkYzQtODk0Zi1hNmQyY2E2ZThkMTAiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2Njk1MDExNDN9.IEsb0DhL-2QFH3C5fnPrlKxcFImJdrn3vqm9RC0J3G0";

  let axiosConfig = {
    headers: {
      API: "78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
      Authorization: AuthStr,
    },
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
    setValue,
  } = useForm([]);

  const onSubmit = (data) => {
    const datos = getValues("datos");

    if (medidas == "Masculino") {
      const medidaParteSuperiorHombre = getValues("medidaParteSuperiorHombre");
      medidaParteSuperiorHombre.id = uuidv4();
      const medidaParteInferiorHombre = getValues("medidaParteInferiorHombre");
      medidaParteInferiorHombre.id = uuidv4();


      var postData = {
        firstName:datos.firstName,
        secondName:datos.secondName,
        firstLastName:datos.firstLastName,
        secondLastName:datos.secondLastName,
        phone:datos.phone,
        gender:datos.gender,
        medidaParteSuperiorHombre,
        medidaParteInferiorHombre,
      };

    } else {
      const medidasParteSuperiorMujer = getValues("medidasParteSuperiorMujer");
      medidasParteSuperiorMujer.id = uuidv4();
      const medidasParteInferiorMujer = getValues("medidasParteInferiorMujer");
      medidasParteInferiorMujer.id = uuidv4();

      var postData = {
        firstName:datos.firstName,
        secondName:datos.secondName,
        firstLastName:datos.firstLastName,
        secondLastName:datos.secondLastName,
        phone:datos.phone,
        gender:datos.gender,
        medidasParteSuperiorMujer,
        medidasParteInferiorMujer,
      };
    }

    axios
      .post(urlClientes, postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.error("AXIOS ERROR: ", err);
      });
  };

  const medidas = watch("datos.gender");

  return (
    <div>
      <h1>Registro de cliente</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombres</label>
          <input
            type="text"
            {...register("datos.firstName", {
              required: "El campo es requerido",
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
          <input
            type="text"
            {...register("datos.secondName")}
            placeholder="Segundo nombre"
          />
        </div>
        <div>
          <label>Apellidos:</label>
          <input
            type="text"
            {...register("datos.firstLastName")}
            placeholder="Primer apellido"
          />
          <input
            type="text"
            {...register("datos.secondLastName")}
            placeholder="Segundo apelido"
          />
        </div>
        <div>
          <label>Telefono:</label>
          <input type="number" {...register("datos.phone")} />
        </div>
        <div>
          <label>Genero:</label>
          <input type="radio" value="Masculino" {...register("datos.gender")} />
          Masculino
          <input type="radio" value="Femenino" {...register("datos.gender")} />
          Femenino
        </div>
        {medidas == "Masculino" && (
          <div>
            <h1>Medidas masculinas</h1>
            <h2>Parte superior</h2>

            <div>
              <label>Hombro:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.hombro")}
              />
            </div>
            <div>
              <label>Largo camisa:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.largoCamisa")}
              />
            </div>
            <div>
              <label>Ancho cuello:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.anchoCuello")}
              />
            </div>
            <div>
              <label>Talle frente:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.talleFrente")}
              />
            </div>
            <div>
              <label>Frente pecho:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.frentePecho")}
              />
            </div>
            <div>
              <label>Talle espalda:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.talleEspalda")}
              />
            </div>
            <div>
              <label>Boca manga:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.bocaManga")}
              />
            </div>
            <div>
              <label>Sisa camisa:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.sisaCamisa")}
              />
            </div>
            <div>
              <label>Primer boton:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.primerBoton")}
              />
            </div>
            <div>
              <label>Largo manga:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.largoManga")}
              />
            </div>
            <div>
              <label>Hombro a codo:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.hombroACodo")}
              />
            </div>
            <div>
              <label>Ancho brazo:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.anchoBrazo")}
              />
            </div>
            <div>
              <label>Cintura:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.cintura")}
              />
            </div>
            <div>
              <label>Cadera:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.cadera")}
              />
            </div>
            <div>
              <label>Espalda:</label>
              <input
                type="number"
                {...register("medidaParteSuperiorHombre.espalda")}
              />
            </div>
            <h2>Parte inferior</h2>
            <div>
              <label>Largo pantalon:</label>
              <input
                type="number"
                {...register("medidaParteInferiorHombre.largoPantalon")}
              />
            </div>
            <div>
              <label>Ancho rodilla:</label>
              <input
                type="number"
                {...register("medidaParteInferiorHombre.anchoRodilla")}
              />
            </div>
            <div>
              <label>Ancho tobillo:</label>
              <input
                type="number"
                {...register("medidaParteInferiorHombre.anchoTobillo")}
              />
            </div>
            <div>
              <label>Cintura a rodilla:</label>
              <input
                type="number"
                {...register("medidaParteInferiorHombre.cinturaARodilla")}
              />
            </div>
            <div>
              <label>Tiro:</label>
              <input
                type="number"
                {...register("medidaParteInferiorHombre.tiro")}
              />
            </div>
            <div>
              <label>Cadera:</label>
              <input
                type="number"
                {...register("medidaParteInferiorHombre.cadera")}
              />
            </div>
          </div>
        )}
        {medidas == "Femenino" && (
          <div>
            <h1>Medidas femeninas</h1>
            <h2>Parte superior</h2>
            <div>
              <label>Largo blusa:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.largoBlusa")}
              />
            </div>
            <div>
              <label>Escote:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.escote")}
              />
            </div>
            <div>
              <label>Hombro:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.hombro")}
              />
            </div>
            <div>
              <label>Talle:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.talle")}
              />
            </div>
            <div>
              <label>Busto:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.busto")}
              />
            </div>
            <div>
              <label>Sisa:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.sisa")}
              />
            </div>
            <div>
              <label>Manga:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.manga")}
              />
            </div>
            <div>
              <label>Costado:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.costado")}
              />
            </div>
            <div>
              <label>Espalda:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.espalda")}
              />
            </div>
            <div>
              <label>Primer boton:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.primerBoton")}
              />
            </div>
            <div>
              <label>Cintura:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.cintura")}
              />
            </div>
            <div>
              <label>Cadera:</label>
              <input
                type="number"
                {...register("medidasParteSuperiorMujer.cadera")}
              />
            </div>
            <h2>Parte inferior</h2>
            <div>
              <label>Largo pantalon:</label>
              <input
                type="number"
                {...register("medidasParteInferiorMujer.largoPantalon")}
              />
            </div>
            <div>
              <label>Ancho rodilla:</label>
              <input
                type="number"
                {...register("medidasParteInferiorMujer.anchoRodilla")}
              />
            </div>
            <div>
              <label>Ancho tobillo:</label>
              <input
                type="number"
                {...register("medidasParteInferiorMujer.anchoTobillo")}
              />
            </div>
            <div>
              <label>Cintura a rodilla:</label>
              <input
                type="number"
                {...register("medidasParteInferiorMujer.cinturaARodilla")}
              />
            </div>
            <div>
              <label>Tiro:</label>
              <input
                type="number"
                {...register("medidasParteInferiorMujer.tiro")}
              />
            </div>
            <div>
              <label>Cadera:</label>
              <input
                type="number"
                {...register("medidasParteInferiorMujer.cadera")}
              />
            </div>
          </div>
        )}
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
}

export default Register;
