import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Register() {
  const urlClientes = "https://proyecto-tpi-backend-production.up.railway.app/api/v1/clients";
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
    formState,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
  } = useForm([]);

  const onSubmit = (data) => {
    if (medidas == "Masculino") {
      const medidaParteSuperiorHombre = getValues("medidaParteSuperiorHombre");
      medidaParteSuperiorHombre.id = uuidv4();
      const medidaParteInferiorHombre = getValues("medidaParteInferiorHombre");
      medidaParteInferiorHombre.id = uuidv4();

      var postData = {
        firstName: data.firstName,
        secondName: data.secondName,
        firstLastName: data.firstLastName,
        secondLastName: data.secondLastName,
        phone: data.phone,
        gender: data.gender,
        medidaParteSuperiorHombre,
        medidaParteInferiorHombre,
      };
    } else {
      const medidasParteSuperiorMujer = getValues("medidasParteSuperiorMujer");
      medidasParteSuperiorMujer.id = uuidv4();
      const medidasParteInferiorMujer = getValues("medidasParteInferiorMujer");
      medidasParteInferiorMujer.id = uuidv4();

      var postData = {
        firstName: data.firstName,
        secondName: data.secondName,
        firstLastName: data.firstLastName,
        secondLastName: data.secondLastName,
        phone: data.phone,
        gender: data.gender,
        medidasParteSuperiorMujer,
        medidasParteInferiorMujer,
      };
    }
    console.log(postData);

    //Envio a back
    axios
      .post(urlClientes, postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.error("AXIOS ERROR: ", err);
      });
  };

  //Si se envia correctamente, resetea los campos
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  //Mostrar medidas masculinas o femeninas
  const medidas = watch("gender");

  return (
    <div
      className="card p-5 shadow-lg p-3 mb-5 bg-white rounded"
      style={{ width: "70%", margin: "5rem auto" }}
    >
      <h1 className="mb-5 text-center">Registro de cliente</h1>
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
                required: "Su primer nombre es requerido",
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

        <div className="row mb-4">
          <div className="col-3">
            <label>Apellidos:</label>
          </div>
          <div className="col">
            <input
              required
              type="text"
              {...register("firstLastName", {
                required: "Su primer apellido es requerido",
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                  message: "Debe contener unicamente letras",
                },
              })}
              placeholder="Primer apellido"
            />
            {errors.firstLastName && (
              <p className="errorMsg ">{errors.firstLastName.message}</p>
            )}
          </div>

          <div className="col">
            <input
              type="text"
              {...register("secondLastName", {
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                  message: "Debe contener unicamente letras",
                },
              })}
              placeholder="Segundo apelido"
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
            <label style={{ letterSpacing: "1px" }}>Genero:</label>
          </div>
          <div className="col-3">
            <select
              required
              className="form-control"
              {...register("gender", {
                validate: (value) => value !== "",
              })}
            >
              <option defaultValue="Select"></option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
            {errors.gender && <p>Debe seleccionar un genero</p>}
          </div>
        </div>
        {medidas == "Masculino" && (
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
        )}
        {medidas == "Femenino" && (
          <div>
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
        <input
          type="submit"
          value="Registrar"
          className="btn btn-primary btn-lg"
          style={{ float: "right", marginRight: "20%" }}
        />
      </form>
    </div>
  );
}

export default Register;
