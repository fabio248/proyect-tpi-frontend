import React, {Component} from "react";
import {
    TableContainer,
    Table,
    TableBody,
    Box,
    Grid,
    TableRow,
    TableCell,
    TableHead,
    Button, Tooltip, IconButton, FormControl, InputLabel, Select, MenuItem, TextField,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {Add, Delete, Update, Visibility} from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";




class Pedidos extends Component{


    constructor(props) {
        super(props);

        this.state = {
            pedidos: {},
            hayDatos:false,
            modalBorrarAbierto:false,
            modalActualizarAbierto:false,
            pedidoSeleccionado: {}
        }

        this.abrirModalBorrarPedido = this.abrirModalBorrarPedido.bind(this)
        this.cerrarModalBorrarPedido = this.cerrarModalBorrarPedido.bind(this)
        this.abrirModalActualizarPedido = this.abrirModalActualizarPedido.bind(this)
        this.cerrarModalActualizarPedido = this.cerrarModalActualizarPedido.bind(this)
        this.borrarPedido = this.borrarPedido.bind(this)
        this.actualizarEstado = this.actualizarEstado.bind(this)
    }


    actualizarTablaDePedidos(){
        this.getPedidos()
    }


    async borrarPedido(){
        this.actualizarTablaDePedidos()
        const url_api = 'https://proyecto-tpi-backend-production.up.railway.app/api/v1'


        const respuesta = await fetch(url_api+"/tasks/"+this.state.pedidoSeleccionado.id,
            {
            method:"delete",
            headers:{
                "api":"78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8"
            }
        })

        this.actualizarEstado({},false,false,false,undefined,undefined)

    }

    async getPedidos(){

        const url_api = 'https://proyecto-tpi-backend-production.up.railway.app/api/v1'
        const respuesta = await fetch(url_api+"/tasks",{
            method:'get',
            headers:{
                "api":"78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8"
            }
        })

        respuesta.json()
            .then(
                value => {this.actualizarEstado(value,true,false,false,undefined)}
            )
    }


    actualizarEstado(pedidos,existenDatos,modalBorrarPedidoEstaAbierto,modalActualizarPedidoEstaAbierto,pedidoSeleccionado,clienteSeleccionado){

        this.setState( {
            pedidos:pedidos,
            hayDatos: existenDatos,
            modalBorrarAbierto: modalBorrarPedidoEstaAbierto,
            modalActualizarAbierto:modalActualizarPedidoEstaAbierto,
            pedidoSeleccionado:pedidoSeleccionado,
            clienteSeleccionado:clienteSeleccionado
        })
    }

    abrirModalBorrarPedido(pedidoSeleccionado){
        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,true,false,pedidoSeleccionado,undefined)
    }

    cerrarModalBorrarPedido(){
        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,false,false,this.state.pedidoSeleccionado,undefined)
    }

    async abrirModalActualizarPedido(pedidoSeleccionado){
        const url_api = 'https://proyecto-tpi-backend-production.up.railway.app/api/v1'
        const respuesta = await fetch(url_api+'/clients/'+pedidoSeleccionado.clienteId,{
            method:"get",
            headers:{
                "api":"78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8"
            }
        })

        const clienteSeleccionado = await respuesta.json()

        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,false,true,pedidoSeleccionado,clienteSeleccionado)
    }

    cerrarModalActualizarPedido(){
        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,false,false,undefined,undefined)
    }

    render() {

        if(!this.state.hayDatos){
            this.getPedidos()

            return (<React.Fragment>
                  <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      style={{ minHeight: '100vh' }}
                  >
                      <Box >
                        <CircularProgress color={"inherit"}/>
                      </Box>
                      <Box>
                          <h6 color="primary">Obtenido Datos</h6>
                      </Box>
                  </Grid>
            </React.Fragment>
            )
        }
        else {
        return (
            <React.Fragment>

                <div className="container m-2 p-3">
                    <div className='text-center'>
                        <h3 className='section-subheading text-muted'>
                            Tabla de Pedidos
                        </h3>
                    </div>
                </div>

                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell align={"center"}>
                                    Tipo
                                </TableCell>
                                <TableCell align={"center"}>
                                    Fecha de recepción de pedido
                                </TableCell>
                                <TableCell align={"center"}>
                                    Fecha de entrega de pedido
                                </TableCell>
                                <TableCell align={"center"}>
                                    Acciones
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.pedidos.map(
                                    (fila) => {

                                        return <>
                                            <TableRow key={fila.id} >
                                                <TableCell align={"center"}>
                                                    {fila.type}
                                                </TableCell>
                                                <TableCell align={"center"}>
                                                    {new Date(fila.createdAt).toLocaleDateString()}
                                                </TableCell>
                                                <TableCell align={"center"}>
                                                    {new Date(fila.fechaEntrega).toLocaleDateString()}
                                                </TableCell>
                                                <TableCell align={"center"}>
                                                    <Tooltip title={"Borrar pedido"} >
                                                        <IconButton
                                                            size={"small"}
                                                            color={"error"}
                                                            onClick={() => {this.abrirModalBorrarPedido(fila)}}
                                                            >
                                                            <Delete/>
                                                        </IconButton>
                                                    </Tooltip>

                                                    <Tooltip title={"Actualizar pedido"}>
                                                        <IconButton
                                                            size={"small"}

                                                            onClick={()=>{this.abrirModalActualizarPedido(fila)}}
                                                            >
                                                            <Update/>
                                                        </IconButton>
                                                    </Tooltip>

                                                    <Tooltip title={"Consultar pedido"}>
                                                        <IconButton size={"small"}
                                                                    onClick={() =>{window.location.href += "/"+fila.id}}>
                                                            <Visibility/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    }
                                )
                            }
                        </TableBody>


                    </Table>
                </TableContainer>


                <Dialog
                    open={this.state.modalBorrarAbierto}
                    onClose={this.cerrarModalBorrarPedido}
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>¿Eliminar pedido?</DialogTitle>

                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" color="black">¿Realmente desea eliminar el pedido?</DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button color={"error"} onClick={this.borrarPedido}>Eliminar</Button>
                        <Button onClick={this.cerrarModalBorrarPedido}>Cancelar</Button>
                    </DialogActions>

                </Dialog>

                { (this.state.pedidoSeleccionado && this.state.clienteSeleccionado)?
                    <Dialog
                    open={this.state.modalActualizarAbierto}
                    onClose={this.cerrarModalActualizarPedido}>
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
                                            value={this.state.pedidoSeleccionado.type}
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
                                            value={this.state.pedidoSeleccionado.type}
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
                                            className="w-100"
                                            disablePast={true}
                                            labelId="fecha_entrega"
                                            label="Fecha de Entrega"
                                            openTo="month"

                                            views={['month', 'day']}
                                            value={this.state.pedidoSeleccionado.fechaEntrega}
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
                    </Dialog>:<></>

                }


            </React.Fragment>
        )
        }
    }

}

export default Pedidos;