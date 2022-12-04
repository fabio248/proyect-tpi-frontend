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
        /*
            >>PROPS<<
            Nota: Si necesita agregar más, considere documentar
            y agregarlos al final del bloque.
        */
        this.state = {
            // Variables Clave {Clientes.jsx}
            clientes:{},
            nulo:true,
            // Clientes.jsx {Agregar Pedido}
            error:false,
            mensajeError:"",
            fecha: dayjs(),
            pedido:"",
            estadoModalPedido:false,
            clienteSeleccionado:{},
            // {Agregar Pedido}
        };
    }

    /* ----------------------------------------------------------- *
        BLOQUE DE CODIGO: CLIENTES.
        NOTA: Incluye las operaciones necesarias 
        para procesar los datos de los clientes.
    * ------------------------------------------------------------ */

    // Obtiene los clientes
    async getClientes() {
        fetch("https://proyecto-tpi-backend-production.up.railway.app/api/v1/clients", {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                "API": "78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
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
        }).catch(error => {
            this.setState({ 
                mensajeError: error.toString(),
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

    delete() {
        
    }

    updateTable() {
        this.getClientes();
    }
    /* ----------------------------------------------------------- *
        FIN DEL BLOQUE DE CODIGO
    * ------------------------------------------------------------ */

    /* ----------------------------------------------------------- *
        BLOQUE DE CODIGO: AGREGAR PEDIDO.
        NOTA: Incluye controles del formulario modal.
    * ------------------------------------------------------------ */
    async agregarPedido() {

        if(!(this.state.pedido === "") && dayjs(this.state.fecha).isValid()) {
            
            const cuerpo = {
                clienteId:  this.state.clienteSeleccionado.id,
                fechaEntrega: new Date(this.state.fecha).toISOString(),
                type: this.state.pedido
            }

            fetch("https://proyecto-tpi-backend-production.up.railway.app/api/v1/tasks", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "api":"78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8"
                },
                body: JSON.stringify(cuerpo)
            }).then(async response => {
                const data = await response.json();
                // Verifica el estado de la respuesta
                if (!response.ok) {
                    // Obtiene el error de la respuesta y rechaza la promesa
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                this.cerrarAgregarPedido();
            }).catch(error => {
                this.setState({ 
                    mensajeError:error.toString(),
                    error:true, 
                });
                this.cerrarAgregarPedido();
            });
        }
        else {
            this.setState({
                mensajeError:"Inconsistencia en los datos.\nSeleccione una prenda o ingrese una fecha valida!",
                error:true,
            });
        }
    }

    abrirAgregarPedido(cliente) { 
        this.setState({
            estadoModalPedido:true,
            clienteSeleccionado:cliente,
            fecha: dayjs(),
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

    /* ----------------------------------------------------------- *
        BLOQUE DE CODIGO: RENDER.
        NOTA: Devuelve el componente contruido.
    * ------------------------------------------------------------ */
    render() {

        if(this.state.nulo) {

            this.getClientes();

            return(
                <React.Fragment>
                    {this.state.error && (
                        <AlertError message={this.state.mensajeError} />
                    )}
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
                        <AlertError message={this.state.mensajeError} />
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
                            <DialogTitle className="text-center">Agregar un Pedido</DialogTitle>
                                <DialogContent>
                                    <Box className="p-1 m-1">
                                        <div className="mb-1 p-1">
                                            <DialogContentText className="text-center">
                                                <strong>Datos del Cliente</strong>
                                            </DialogContentText>
                                        </div>
                                        <div className="mb-1 p-1">
                                        <DialogContentText className="p-1"><strong>ID:</strong> {this.state.clienteSeleccionado.id}</DialogContentText>
                                            <DialogContentText className="p-1"><strong>Nombres:</strong> {this.state.clienteSeleccionado.firstName} {this.state.clienteSeleccionado.secondName}</DialogContentText>
                                            <DialogContentText className="p-1"><strong>Apellidos:</strong> {this.state.clienteSeleccionado.firstLastName} {this.state.clienteSeleccionado.secondLastName}</DialogContentText>
                                            <DialogContentText className="p-1"><strong>Género:</strong> {this.state.clienteSeleccionado.gender}</DialogContentText>
                                        </div>
                                        <div className="mb-1 p-1 text-center">
                                            <DialogContentText className="p-1">
                                                <strong>Opciones del Pedido</strong>
                                            </DialogContentText>
                                        </div>
                                        <FormControl fullWidth>
                                            <InputLabel id="type">Tipo de Prenda</InputLabel>
                                            <div className="mb-1 p-1">
                                                {this.state.clienteSeleccionado.gender == "Femenino" ?
                                                    <Select
                                                        className="w-100"
                                                        labelId="type"
                                                        label="Tipo de Prenda"
                                                        value={this.state.pedido}
                                                        onChange={(newValue) => {this.tipoAgregarPedido(newValue.target.value)}}
                                                    >
                                                        <MenuItem value={"Vestido"}>Vestido</MenuItem>
                                                        <MenuItem value={"Blusa"}>Blusa</MenuItem>
                                                        <MenuItem value={"Camisa"}>Camisa</MenuItem>
                                                        <MenuItem value={"Chaqueta: Cuero"}>Chaqueta: Cuero</MenuItem>
                                                    </Select>
                                                    :
                                                    <Select
                                                        className="w-100"
                                                        labelId="type"
                                                        label="Tipo de Prenda"
                                                        value={this.state.pedido}
                                                        onChange={(newValue) => this.tipoAgregarPedido(newValue.target.value)}
                                                    >
                                                        <MenuItem value={"Traje: Dos piezas"}>Traje: Dos piezas</MenuItem>
                                                        <MenuItem value={"Traje: Tres piezas"}>Traje: Tres piezas</MenuItem>
                                                        <MenuItem value={"Camisa"}>Camisa</MenuItem>
                                                        <MenuItem value={"Chaqueta: Cuero"}>Chaqueta: Cuero</MenuItem>
                                                    </Select>
                                                }
                                            </div>
                                            <div className="mb-1 p-1">
                                                <InputLabel id="fecha_entrega">Tipo de Prenda</InputLabel>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DesktopDatePicker
                                                        disablePast={true}
                                                        labelId="fecha_entrega"
                                                        label="Fecha de Entrega"
                                                        openTo="month"
                                                        views={['month', 'day']}
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