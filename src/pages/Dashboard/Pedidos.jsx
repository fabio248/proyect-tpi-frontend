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
            pedidoSeleccionado: {}
        }

        this.abrirModalBorrarPedido = this.abrirModalBorrarPedido.bind(this)
        this.cerrarModalBorrarPedido = this.cerrarModalBorrarPedido.bind(this)

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

        let pedidos= {}

        const url_api = 'https://proyecto-tpi-backend-production.up.railway.app/api/v1'
        const respuesta = await fetch(url_api + "/tasks", {
            method: 'get',
            headers: {
                "api": "78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8"
            }
        }).then(value => {return value})

        const pedidosPromises = respuesta.json().then(arrayPedidos =>{
            pedidos =  arrayPedidos
            const arrayClientes = arrayPedidos.map(pedido => {
                                    const clienteDelPedido =  fetch(url_api+"/clients/"+pedido.clienteId,{
                                        method:"get",
                                        headers: {
                                            "api": "78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8"
                                        }
                                    }).then(cliente => {return cliente.json()})
                                    return clienteDelPedido
                                    })

            return Promise.all(arrayClientes)
        })

        pedidosPromises.then(clientes => {

            for(let i = 0; i< clientes.length;i++){
                pedidos[i].cliente = clientes[i]

            }
        }).finally(() => { this.actualizarEstado(pedidos,true,false,undefined) })






    }


    actualizarEstado(pedidos,existenDatos,modalBorrarPedidoEstaAbierto,pedidoSeleccionado){


        this.setState({
            pedidos: pedidos,
            hayDatos: existenDatos,
            modalBorrarAbierto: modalBorrarPedidoEstaAbierto,
            pedidoSeleccionado: pedidoSeleccionado
        })

/*
        let respuesta = pedidos.map(async (pedido) => {

            const respuesta  = (await fetch("https://proyecto-tpi-backend-production.up.railway.app/api/v1/clients/" + pedido.clienteId,
                {
                    method: "get",
                    headers: {
                        "api": "78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8"
                    }
                })).json().then((clienteSolicitado) => {

                    pedido.cliente = clienteSolicitado
                }
            ).finally(()=>{
                this.setState( {
                    pedidos:pedidos,
                    hayDatos: existenDatos,
                    modalBorrarAbierto: modalBorrarPedidoEstaAbierto,
                    modalActualizarAbierto:modalActualizarPedidoEstaAbierto,
                    pedidoSeleccionado:pedidoSeleccionado,
                    clienteSeleccionado:clienteSeleccionado
                })
            })
        })


*/
    }





    abrirModalBorrarPedido(pedidoSeleccionado){

        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,true,pedidoSeleccionado)
    }

    cerrarModalBorrarPedido(){
        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,false,undefined)
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
                                <TableCell>
                                    Cliente
                                </TableCell>
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
                                                <TableCell>
                                                    {fila.cliente.firstName+" "+fila.cliente.firstLastName}
                                                </TableCell>
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

                                                            onClick={()=>{window.location.href += "/"+fila.id}}
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




            </React.Fragment>
        )
        }
    }

}

export default Pedidos;