import React, { useState, useEffect } from "react";
import { get, useForm } from "react-hook-form";
import { useFetcher, useParams } from "react-router-dom";
import axios from "axios";
import { Alert, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

function Actualizar() {
  //Autenticacion en backend
  const AuthStr =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNDE1ZjhhZi0zMDBhLTRkYzQtODk0Zi1hNmQyY2E2ZThkMTAiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2Njk1MDExNDN9.IEsb0DhL-2QFH3C5fnPrlKxcFImJdrn3vqm9RC0J3G0";
  //Token API
  const token =
    "78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b";
  //URL API
  const url = "https://proyecto-tpi-backend-production.up.railway.app/api/v1";

  const { idCliente } = useParams();
  const [cliente, setCliente] = useState({});
  const [gender, setGender] = useState({ gender: "" });
  const [alerta, setAlerta] = useState();

  const urlCliente = url + "/clients/" + idCliente;

  //Parametros de axios, headers requeridos en backend
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
    formState,
    formState: { errors },
    reset,
    watch,
  } = useForm(
    {
      //Junto a reset, establece con los valores del cliente los campos
      defaultValues: cliente,
      alerta: false,
    },
    []
  );

  const onSubmit = (data) => {
    //Si el cliente es hombre
    if (data.gender == "Masculino" || data.gender == "masculino") {
      //Urls para la actualizacion de informacion de las medidas de hombre
      const urlActualizarPSuperiorHombre =
        url + "/medidas-hombre-superior/" + data.medidaParteSuperiorHombre.id;
      const urlActualizarPInferiorHombre =
        url + "/medidas-hombre-inferior/" + data.medidaParteInferiorHombre.id;

      //Informacion personal del cliente
      var postDataCliente = {
        firstName: data.firstName,
        secondName: data.secondName,
        firstLastName: data.firstLastName,
        secondLastName: data.secondLastName,
        phone: data.phone,
        email: data.email,
      };
      //Medidas superior hombre
      var postDataMedidaSuperiorHombre = {
        anchoBrazo: data.medidaParteSuperiorHombre.anchoBrazo,
        anchoCuello: data.medidaParteSuperiorHombre.anchoCuello,
        bocaManga: data.medidaParteSuperiorHombre.bocaManga,
        cadera: data.medidaParteSuperiorHombre.cadera,
        cintura: data.medidaParteSuperiorHombre.cintura,
        espalda: data.medidaParteSuperiorHombre.espalda,
        frentePecho: data.medidaParteSuperiorHombre.frentePecho,
        hombro: data.medidaParteSuperiorHombre.hombro,
        hombroACodo: data.medidaParteSuperiorHombre.hombroACodo,
        largoCamisa: data.medidaParteSuperiorHombre.largoCamisa,
        largoManga: data.medidaParteSuperiorHombre.largoManga,
        primerBoton: data.medidaParteSuperiorHombre.primerBoton,
        sisaCamisa: data.medidaParteSuperiorHombre.sisaCamisa,
        talleEspalda: data.medidaParteSuperiorHombre.talleEspalda,
        talleFrente: data.medidaParteSuperiorHombre.talleFrente,
      };
      //Medidas inferior hombre
      var postDataMedidaInferiorHombre = {
        largoPantalon: data.medidaParteInferiorHombre.largoPantalon,
        anchoRodilla: data.medidaParteInferiorHombre.anchoRodilla,
        anchoTobillo: data.medidaParteInferiorHombre.anchoTobillo,
        cinturaARodilla: data.medidaParteInferiorHombre.cinturaARodilla,
        tiro: data.medidaParteInferiorHombre.tiro,
        cadera: data.medidaParteInferiorHombre.cadera,
      };

      // Pruebas para imprimir datos
      // console.log(postDataCliente);
      // console.log(postDataMedidaSuperiorHombre);
      // console.log(urlActualizarPSuperiorHombre);
      // console.log(postDataMedidaInferiorHombre);
      // console.log(urlActualizarPInferiorHombre);
      // console.log(cliente);
      // console.log(gender);

      //Envio de informacion personal al backend
      axios
        .patch(urlCliente, postDataCliente, getParams)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.error("AXIOS ERROR: ", err);
        });

      //Envio de medidas superiores al backend
      axios
        .patch(
          urlActualizarPSuperiorHombre,
          postDataMedidaSuperiorHombre,
          getParams
        )
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.error("AXIOS ERROR: ", err);
        });
      //Envio de medidas inferiores al backend
      axios
        .patch(
          urlActualizarPInferiorHombre,
          postDataMedidaInferiorHombre,
          getParams
        )
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.error("AXIOS ERROR: ", err);
        });
    }
    //Si el cliente es mujer
    else {
      //Urls para la actualizacion de informacion de las medidas de mujer
      const urlActualizarPSuperiorMujer =
        url + "/medidas-mujer-superior/" + data.medidasParteSuperiorMujer.id;
      const urlActualizarPInferiorMujer =
        url + "/medidas-mujer-inferior/" + data.medidasParteInferiorMujer.id;

      //Informacion personal del cliente
      var postDataCliente = {
        firstName: data.firstName,
        secondName: data.secondName,
        firstLastName: data.firstLastName,
        secondLastName: data.secondLastName,
        phone: data.phone,
        email: data.email,
      };
      //Medidas superior mujer
      var postDataMedidaSuperiorMujer = {
        largoBlusa: data.medidasParteSuperiorMujer.largoBlusa,
        escote: data.medidasParteSuperiorMujer.escote,
        hombro: data.medidasParteSuperiorMujer.hombro,
        talle: data.medidasParteSuperiorMujer.talle,
        busto: data.medidasParteSuperiorMujer.busto,
        sisa: data.medidasParteSuperiorMujer.sisa,
        manga: data.medidasParteSuperiorMujer.manga,
        costado: data.medidasParteSuperiorMujer.costado,
        espalda: data.medidasParteSuperiorMujer.espalda,
        primerBoton: data.medidasParteSuperiorMujer.primerBoton,
        cintura: data.medidasParteSuperiorMujer.cintura,
        cadera: data.medidasParteSuperiorMujer.cadera,
      };
      //Medidas inferior mujer
      var postDataMedidaInferiorMujer = {
        largoPantalon: data.medidasParteInferiorMujer.largoPantalon,
        anchoRodilla: data.medidasParteInferiorMujer.anchoRodilla,
        anchoTobillo: data.medidasParteInferiorMujer.anchoTobillo,
        cinturaARodilla: data.medidasParteInferiorMujer.cinturaARodilla,
        tiro: data.medidasParteInferiorMujer.tiro,
        cadera: data.medidasParteInferiorMujer.cadera,
      };

      // Pruebas para imprimir datos
      // console.log(postDataCliente);
      // console.log(postDataMedidaSuperiorMujer);
      // console.log(urlActualizarPSuperiorMujer);
      // console.log(postDataMedidaInferiorMujer);
      // console.log(urlActualizarPInferiorMujer);
      // console.log(cliente);
      // console.log(gender);

      //Envio de informacion personal al backend
      axios
        .patch(urlCliente, postDataCliente, getParams)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.error("AXIOS ERROR: ", err);
        });

      //Envio de medidas superiores al backend
      axios
        .patch(
          urlActualizarPSuperiorMujer,
          postDataMedidaSuperiorMujer,
          getParams
        )
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.error("AXIOS ERROR: ", err);
        });

      //Envio de medidas inferiores al backend
      axios
        .patch(
          urlActualizarPInferiorMujer,
          postDataMedidaInferiorMujer,
          getParams
        )
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.error("AXIOS ERROR: ", err);
        });
    }
  };

  //Obtencion de informacion del cliente que se desea editar
  useEffect(() => {
    axios
      .get(urlCliente, getParams)
      .then((response) => {
        // Si la peticion es correcta
        // console.log(response.data);
        setCliente(response.data);
        //Se usa reset para resetear los campos con la informacion ya existente
        reset(response.data);
        setGender(response.data.gender);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, [reset]);

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setAlerta(true);
    }
  });

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
              required
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
          <div className="col">
            <input
              required
              type="text"
              {...register("secondName", {
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                  message: "Debe contener unicamente letras",
                },
              })}
              placeholder="Segundo nombre"
            />
            {errors.secondName && (
              <p className="errorMsg">{errors.secondName.message}</p>
            )}
          </div>
        </div>
        <div className="form-group row mb-4">
          <div className="col-3">
            <label style={{ letterSpacing: "1px" }}>Apellidoss:</label>
          </div>
          <div className="col">
            <input
              required
              type="text"
              {...register("firstLastName", {
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                  message: "Debe contener unicamente letras",
                },
              })}
              placeholder="Primer apellido"
            />
            {errors.firstLastName && (
              <p className="errorMsg">{errors.firstLastName.message}</p>
            )}
          </div>
          <div className="col">
            <input
              required
              type="text"
              {...register("secondLastName", {
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                  message: "Debe contener unicamente letras",
                },
              })}
              placeholder="Segundo apellido"
            />
            {errors.secondLastName && (
              <p className="errorMsg">{errors.secondLastName.message}</p>
            )}
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <label>Telefono:</label>
          </div>
          <div className="col">
            <input
              required
              className="ml-3"
              type="number"
              {...register("phone", {
                required: "Debe ingresar su numero de telefono",
                pattern: {
                  value: /^\d{8}$/,
                  message: "Ingrese un numero de telefono valido (8 digitos)",
                },
              })}
            />
            {errors.phone && <p className="errorMsg">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <label>Email:</label>
          </div>
          <div className="col">
            <input
              required
              className="ml-3"
              type="text"
              {...register("email", {
                pattern: {
                  value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  message: "Ingrese un correo valido (example@servidor.com)",
                },
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </div>
        </div>
        {gender == "masculino" || gender == "Masculino" ? (
          <div>
            <hr />
            <h2 className="my-4 text-center">Medidas masculinas</h2>
            <div className="d-flex flex-col" style={{ gap: "20%" }}>
              <div>
                <h3>Parte superior</h3>
                <div className="row my-3">
                  <div className="col-5">
                    <label>Hombro:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.hombro", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Largo camisa:</label>
                  </div>

                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.largoCamisa", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Ancho cuello:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.anchoCuello", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Talle frente:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.talleFrente", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Frente pecho:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.frentePecho", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Talle espalda:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.talleEspalda", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Boca manga:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.bocaManga", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Sisa camisa:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.sisaCamisa", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Primer boton:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.primerBoton", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Largo manga:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.largoManga", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Hombro a codo:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.hombroACodo", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Ancho brazo:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.anchoBrazo", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Cintura:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.cintura", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Cadera:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.cadera", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Espalda:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteSuperiorHombre.espalda", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Parte inferior</h3>
                <div className="row my-3">
                  <div className="col-5">
                    <label>Largo pantalon:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteInferiorHombre.largoPantalon", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Ancho rodilla:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteInferiorHombre.anchoRodilla", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Ancho tobillo:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteInferiorHombre.anchoTobillo", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Cintura a rodilla:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register(
                        "medidaParteInferiorHombre.cinturaARodilla",
                        {
                          required: true,
                          pattern: {
                            value: /^[0-9]+(.[0-9]+)?$/,
                          },
                        }
                      )}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Tiro:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteInferiorHombre.tiro", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5">
                    <label>Cadera:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidaParteInferiorHombre.cadera", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <hr />
            <h2 className="my-4 text-center">Medidas femeninas</h2>
            <div className="d-flex flex-col" style={{ gap: "20%" }}>
              <div>
                <h2>Parte superior</h2>
                <div className="row my-3">
                  <div className="col-5">
                    <label>Largo blusa:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.largoBlusa", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Escote:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.escote", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Hombro:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.hombro", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Talle:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.talle", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Busto:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.busto", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Sisa:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.sisa", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Manga:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.manga", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Costado:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.costado", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Espalda:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.espalda", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Primer boton:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.primerBoton", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Cintura:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.cintura", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Cadera:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteSuperiorMujer.cadera", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2>Parte inferior</h2>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Largo pantalon:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteInferiorMujer.largoPantalon", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Ancho rodilla:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteInferiorMujer.anchoRodilla", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Ancho tobillo:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteInferiorMujer.anchoTobillo", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Cintura a rodilla:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register(
                        "medidasParteInferiorMujer.cinturaARodilla",
                        {
                          required: true,
                          pattern: {
                            value: /^[0-9]+(.[0-9]+)?$/,
                          },
                        }
                      )}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Tiro:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteInferiorMujer.tiro", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-5">
                    <label>Cadera:</label>
                  </div>
                  <div className="col">
                    <input
                      style={{ width: "50%" }}
                      type="text"
                      {...register("medidasParteInferiorMujer.cadera", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+(.[0-9]+)?$/,
                        },
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Button size="large"
          onClick={() => {
            history.back();
          }}
          startIcon={<ArrowBack />}
        >
          Volver
        </Button>
        <input
          type="submit"
          value="Actualizar"
          className="btn btn-primary btn-lg"
          
          style={{
            float: "inherit",
            marginRight: "10%",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        ></input>
        
        <div className="mt-5 d-flex flex-col">
          {alerta && (
            <Alert variant="outlined" severity="success" onClose={() => {setAlerta(false)}}>
              <strong>Se actualizaron los datos correctamente</strong>
            </Alert>
          )}
        </div>        
      </form>
    </div>
  );
}

export default Actualizar;
