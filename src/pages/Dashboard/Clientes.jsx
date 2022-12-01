import React, { Component } from "react";
import { CircularProgress, Box, IconButton, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

class Clientes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clientes: {},
            nulo:true,
        };
    }

    // Obtiene los clientes
    async getClientes() {
        
        const peticion = await fetch("https://proyecto-tpi.onrender.com/api/v1/clients", {
            method:"GET",
            headers: {
                "API":"78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8",
            }
        });
        
        peticion.json().then(data => {
            this.setState({
                clientes:data,
                nulo:false,
            })
        }).catch(exp => {
            console.log(exp)
        });
    }

    render() {

        if(this.state.nulo) {

            this.getClientes();

            return(
                <React.Fragment>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Box>
                            <CircularProgress color={"primary"} />
                        </Box>
                        <Box>
                            <h6 color="primary">Obtenido Datos</h6>
                        </Box>
                    </Grid>
                </React.Fragment>
            );    
        }
        else {
            return(
                <React.Fragment>
                    <div className="container">
                        <div className='text-center'>
                            <h2 className='section-heading text-uppercase'>Clientes</h2>
                            <h3 className='section-subheading text-muted'>
                                Tabla de Clientes Registrados
                            </h3>
                        </div>
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Nombres
                                    </TableCell>
                                    <TableCell>
                                        Apellidos
                                    </TableCell>
                                    <TableCell>
                                        Género
                                    </TableCell>
                                    <TableCell>
                                        Télefono
                                    </TableCell>
                                    <TableCell>
                                        Correo Elétronico
                                    </TableCell>
                                    <TableCell>
                                        Acciones
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.clientes.map(
                                    (cliente) => {
                                        return <React.Fragment>
                                            <TableRow key={cliente.id}>
                                                <TableCell>
                                                    {cliente.firstName} {cliente.secondName}
                                                </TableCell>
                                                <TableCell>
                                                    {cliente.firstLastName} {cliente.secondLastName}
                                                </TableCell>
                                                <TableCell>
                                                    {cliente.gender}
                                                </TableCell>
                                                <TableCell>
                                                    {cliente.phone}
                                                </TableCell>
                                                <TableCell>
                                                    {cliente.email}
                                                </TableCell>
                                                <TableCell>
                                                    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
                                                        <IconButton
                                                            aria-label="Añadir"
                                                            color={"success"}
                                                        >
                                                            <AddIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            aria-label="Actualizar"
                                                            color={"warning"}
                                                        >
                                                            <UpgradeIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            aria-label="Borrar"
                                                            color={"error"}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        </React.Fragment>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </React.Fragment>
            )
            /*
                "id": "329d7bed-0f75-4960-a631-d3a5b75fde13",
                "email": null,
                "phone": "76686733",
                "firstName": "Cristo",
                "secondName": "Rene",
                "firstLastName": "Romero",
                "secondLastName": "Gamez",
                "thirdLastName": null,
                "gender": "masculino",
                "createdAt": "2022-11-24T09:26:12.148Z"
            */
        }
    }
}

export default Clientes;