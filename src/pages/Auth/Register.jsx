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
    // console.log(postData);

    //Envio a back
    axios
      .post(urlClientes, postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.error("AXIOS ERROR: ", err);
      });
      console.log(enviado);
  };

  //Si se envia correctamente, resetea los campos
  React.useEffect(()=>{
    if(formState.isSubmitSuccessful){
      reset();
    }
  }, [formState, reset])

  //Mostrar medidas masculinas o femeninas
  const medidas = watch("gender");

  return (
    <div>
      <h1>Registro de cliente</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombres</label>
          <input
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
        <div>
          <label>Apellidos:</label>
          <input
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
            <p className="errorMsg">{errors.firstLastName.message}</p>
          )}
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
        <div>
          <label>Telefono:</label>
          <input
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
        <div>
          <label>Genero:</label>
          <select
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
        {medidas == "Masculino" && (
          <div>
            <h1>Medidas masculinas</h1>
            <h2>Parte superior</h2>

            <div>
              <label>Hombro:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.hombro", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Largo camisa:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.largoCamisa", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Ancho cuello:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.anchoCuello", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Talle frente:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.talleFrente", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Frente pecho:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.frentePecho", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Talle espalda:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.talleEspalda", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Boca manga:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.bocaManga", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Sisa camisa:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.sisaCamisa", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Primer boton:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.primerBoton", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Largo manga:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.largoManga", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Hombro a codo:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.hombroACodo", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Ancho brazo:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.anchoBrazo", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Cintura:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.cintura", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Cadera:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.cadera", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Espalda:</label>
              <input
                type="text"
                {...register("medidaParteSuperiorHombre.espalda", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <h2>Parte inferior</h2>
            <div>
              <label>Largo pantalon:</label>
              <input
                type="text"
                {...register("medidaParteInferiorHombre.largoPantalon", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Ancho rodilla:</label>
              <input
                type="text"
                {...register("medidaParteInferiorHombre.anchoRodilla", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Ancho tobillo:</label>
              <input
                type="text"
                {...register("medidaParteInferiorHombre.anchoTobillo", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Cintura a rodilla:</label>
              <input
                type="text"
                {...register("medidaParteInferiorHombre.cinturaARodilla", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Tiro:</label>
              <input
                type="text"
                {...register("medidaParteInferiorHombre.tiro", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Cadera:</label>
              <input
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
        )}
        {medidas == "Femenino" && (
          <div>
            <h1>Medidas femeninas</h1>
            <h2>Parte superior</h2>
            <div>
              <label>Largo blusa:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.largoBlusa", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Escote:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.escote", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Hombro:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.hombro", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Talle:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.talle", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Busto:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.busto", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Sisa:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.sisa", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Manga:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.manga", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Costado:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.costado", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Espalda:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.espalda", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Primer boton:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.primerBoton", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Cintura:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.cintura", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Cadera:</label>
              <input
                type="text"
                {...register("medidasParteSuperiorMujer.cadera", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <h2>Parte inferior</h2>
            <div>
              <label>Largo pantalon:</label>
              <input
                type="text"
                {...register("medidasParteInferiorMujer.largoPantalon", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Ancho rodilla:</label>
              <input
                type="text"
                {...register("medidasParteInferiorMujer.anchoRodilla", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Ancho tobillo:</label>
              <input
                type="text"
                {...register("medidasParteInferiorMujer.anchoTobillo", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Cintura a rodilla:</label>
              <input
                type="text"
                {...register("medidasParteInferiorMujer.cinturaARodilla", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Tiro:</label>
              <input
                type="text"
                {...register("medidasParteInferiorMujer.tiro", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(.[0-9]+)?$/,
                  },
                })}
              />
            </div>
            <div>
              <label>Cadera:</label>
              <input
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
        )}
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
}

export default Register;
