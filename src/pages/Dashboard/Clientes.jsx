import React, { Component } from "react";
import dayjs from 'dayjs';
import { CircularProgress, Button, Box, IconButton, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, InputLabel, MenuItem } from "@mui/material";
import { Visibility, Update, Delete, Add, Send } from "@mui/icons-material";
import { FormControl, TextField, Select, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AlertError from '../../components/AlertError';

class Clientes extends Component {

    constructor(props) {
        super(props);
        // PROPS
        this.state = {
            error:false,
            mensajeError:"",
            fecha: dayjs(),
            pedido:"",
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
    
    view() {

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
            pedido:"",
        });
    }

    fechaAgregarPedido(nuevaFecha) {
        this.setState({
            fecha:nuevaFecha,
        })
    }

    tipoAgregarPedido(tipoPedido) {
        this.setState({
            pedido:tipoPedido,
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
                            <Button variant="contained" color="success">
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
                                                        <Tooltip title="Visualizar Cliente">
                                                            <IconButton
                                                                size={"small"}
                                                                color={"primary"}
                                                                onClick={this.view()}
                                                            >
                                                                <Visibility />
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
                    {!this.state.nulo && (
                        <Dialog open={this.state.estadoModalPedido} onClose={() => this.cerrarAgregarPedido()} aria-describedby="Agregar Pedido">
                            <DialogTitle className="text-center text-uppercase">Agregar un Pedido</DialogTitle>
                                <DialogContent>
                                    <Box className="p-1 m-2">
                                        <DialogContentText>
                                            <div className="mb-1 p-1">
                                                <p className="primary"><strong>Datos del Cliente</strong></p>
                                            </div>
                                        </DialogContentText>
                                        <DialogContentText id="" color="black">
                                            <div className="mb-1 p-1">
                                                <p className="primary"><strong>Nombres:</strong> {this.state.clienteSeleccionado.firstName} {this.state.clienteSeleccionado.secondName}</p>
                                                <p className="primary"><strong>Apellidos:</strong> {this.state.clienteSeleccionado.firstLastName} {this.state.clienteSeleccionado.secondLastName}</p>
                                                <p className="primary"><strong>Género:</strong> {this.state.clienteSeleccionado.gender}</p>
                                            </div>
                                        </DialogContentText>
                                        <DialogContentText>
                                            <div className="mb-1 p-1">
                                                <p className="primary"><strong>Opciones del Pedido</strong></p>
                                            </div>
                                        </DialogContentText>
                                        <FormControl fullWidth>
                                            <InputLabel id="type">Tipo de Prenda</InputLabel>
                                            <div className="mb-1 p-1">
                                                {this.state.clienteSeleccionado.gender == "Femenino" ?
                                                    <Select
                                                        className="w-100"
                                                        labelId="type"
                                                        label="Tipo de Prenda"
                                                        value={this.state.pedido === "" ? "Vestido" : this.state.pedido}
                                                        onChange={(newValue) => {this.tipoAgregarPedido(newValue.target.value)}}
                                                    >
                                                        <MenuItem selected value={"Vestido"}>Vestido</MenuItem>
                                                        <MenuItem value={"Blusa"}>Blusa</MenuItem>
                                                        <MenuItem value={"Camisa"}>Camisa</MenuItem>
                                                        <MenuItem value={"Chaqueta: Cuero"}>Chaqueta: Cuero</MenuItem>
                                                    </Select>
                                                    :
                                                    <Select
                                                        className="w-100"
                                                        labelId="type"
                                                        label="Tipo de Prenda"
                                                        value={this.state.pedido === "" ? "Camisa" : this.state.pedido}
                                                        onChange={(newValue) => this.tipoAgregarPedido(newValue.target.value)}
                                                    >
                                                        <MenuItem selected value={"Traje: Dos piezas"}>Traje: Dos piezas</MenuItem>
                                                        <MenuItem value={"Traje: Tres piezas"}>Traje: Tres piezas</MenuItem>
                                                        <MenuItem value={"Camisa"}>Camisa</MenuItem>
                                                        <MenuItem value={"Chaqueta: Cuero"}>Chaqueta: Cuero</MenuItem>
                                                    </Select>
                                                }
                                            </div>
                                            <div className="mb-1 p-1">
                                                <InputLabel id="type">Tipo de Prenda</InputLabel>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DesktopDatePicker
                                                        disablePast={true}
                                                        labelId="fecha_entrega"
                                                        label="Fecha de Entrega"
                                                        openTo="year"
                                                        views={['month', 'day']}
                                                        inputFormat="DD/MM/YYYY"
                                                        value={this.state.fecha}
                                                        onChange={(newValue) => {
                                                            this.fechaAgregarPedido(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                        </FormControl>
                                    </Box>
                                </DialogContent>
                            <DialogActions>
                                <Button variant="contained" color="primary" onClick={() => this.cerrarAgregarPedido()}>Cancelar</Button>
                                <Button variant="contained" endIcon={<Send />} color="success" onClick={() => this.agregarPedido()}>Enviar</Button>
                            </DialogActions>
                        </Dialog>
                    )}
                </React.Fragment>
            )
        }
    }
}

export default Clientes;