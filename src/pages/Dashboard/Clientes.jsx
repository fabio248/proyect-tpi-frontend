import React, { Component } from "react";
import { CircularProgress, Button, Box, IconButton, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { Update, Delete, Add } from "@mui/icons-material";
import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions} from "@mui/material";
import AlertError from '../../components/AlertError';

class Clientes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error:false,
            mensajeError:"",
            clientes:{},
            nulo:true,
            estadoModalPedido:false,
            clienteSeleccionado:{},
        };
    }

    // Obtiene los clientes
    async getClientes() {
        fetch("https://proyecto-tpi.onrender.com/api/v1/clients", {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                "API":"78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8",
            }
        }).then(async response => {
            const data = await response.json();
            // Verifica el estado de la respuesta
            if (!response.ok) {
                // Obtiene el error de la respuesta y rechaza la promesa
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.setState({ 
                clientes: data,
                nulo: false,
            })
        })
        .catch(error => {
            this.setState({ 
                errorMessage: error.toString(),
                error: true, 
            });
        });
    }

    add() {

    }
    
    update() {
        
    }

    delete(params) {
        
    }

    updateTable() {
        this.getClientes();
    }

    /* ----------------------------------------------------------- *
        BLOQUE DE CODIGO: AGREGAR PEDIDO.
        NOTA: Incluye controles del formulario modal.
    * ------------------------------------------------------------ */
    async agregarPedido() {
        fetch("https://proyecto-tpi.onrender.com/api/v1/clients", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "API":"78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8",
            }
        }).then(async response => {
            const data = await response.json();
            // Verifica el estado de la respuesta
            if (!response.ok) {
                // Obtiene el error de la respuesta y rechaza la promesa
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.setState({ 
                clientes: data,
                nulo: false,
            })
        })
        .catch(error => {
            this.setState({ 
                errorMessage: error.toString(),
                error: true, 
            });
        });
    }

    abrirAgregarPedido(cliente) {
        this.setState({
            estadoModalPedido:true,
            clienteSeleccionado:cliente,
        });
    }

    cerrarAgregarPedido() {
        this.setState({
            estadoModalPedido:false,
            clienteSeleccionado:undefined,
        });
    }
    /* ----------------------------------------------------------- *
        FIN DEL BLOQUE DE CODIGO
    * ------------------------------------------------------------ */
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
                        style={{ minHeight: "100vh" }}
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
                    {this.state.error && (
                        <AlertError message={"Se ha producido un error! CODE:" + this.state.mensajeError} />
                    )}
                    <div className="container m-2 p-3">
                        <div className="text-center">
                            <h3 className="section-subheading text-muted">
                                Tabla de Clientes Registrados
                            </h3>
                        </div>
                        <div className="container m-1 p-1">
                            <Button variant="outlined" color="success">
                                Agregar Cliente
                            </Button>
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
                                                                onClick={() => this.abrirAgregarPedido(cliente)}
                                                            >
                                                                <Add />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title={"Actualizar Cliente"}>
                                                            <IconButton
                                                                size={"small"}
                                                                color={"warning"}
                                                                onClick={this.update()}
                                                            >
                                                                <Update />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Borrar Cliente">
                                                            <IconButton
                                                                size={"small"}
                                                                color={"error"}
                                                                onClick={this.delete()}
                                                            >
                                                                <Delete />
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

                    <Dialog open={this.state.estadoModalPedido} onClose={() => this.cerrarAgregarPedido()} aria-describedby="">
                        <DialogTitle>Formulario de Pedido</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="" color="black">ZzZz</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => this.cerrarAgregarPedido()}>Cancelar</Button>
                            <Button variant="outlined" color={"error"} onClick={() => this.agregarPedido()}>Eliminar</Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
            )
        }
    }
}

export default Clientes;