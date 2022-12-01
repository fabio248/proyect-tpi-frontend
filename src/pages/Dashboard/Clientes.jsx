import React, { Component } from "react";
import { CircularProgress, Box, IconButton, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
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

    add() {

    }
    
    update() {
        
    }

    delete(params) {
        
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
                    <div className="container m-2 p-3">
                        <div className='text-center'>
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
                                                        <Tooltip title={"Añadir Pedido"}>
                                                            <IconButton
                                                                size={"small"}
                                                                color={"success"}
                                                                onClick={this.add()}
                                                            >
                                                                <AddIcon/>
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title={"Actualizar Cliente"}>
                                                            <IconButton
                                                                size={"small"}
                                                                color={"warning"}
                                                                onClick={this.update()}
                                                            >
                                                                <UpdateIcon />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Borrar Cliente">
                                                            <IconButton
                                                                size={"small"}
                                                                color={"error"}
                                                                onClick={this.delete()}
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Tooltip>
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
        }
    }
}

export default Clientes;