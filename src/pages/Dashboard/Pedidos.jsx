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
    Button, Tooltip, IconButton,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {Add, Delete, Update, Visibility} from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";




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

        const respuesta = await fetch("https://proyecto-tpi.onrender.com/api/v1/tasks/"+this.state.pedidoSeleccionado.id,
            {
            method:"delete",
            headers:{
                "api":"78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8"
            }
        })

        this.actualizarEstado({},false,false,undefined)
        this.actualizarTablaDePedidos()
    }

    async getPedidos(){

        const respuesta = await fetch("https://proyecto-tpi.onrender.com/api/v1/tasks",{
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


    actualizarEstado(pedidos,existenDatos,modalBorrarPedidoEstaAbierto,modalActualizarPedidoEstaAbierto,pedidoSeleccionado){

        this.setState( {
            pedidos:pedidos,
            hayDatos: existenDatos,
            modalBorrarAbierto: modalBorrarPedidoEstaAbierto,
            modalActualizarAbierto:modalActualizarPedidoEstaAbierto,
            pedidoSeleccionado:pedidoSeleccionado
        })
    }

    abrirModalBorrarPedido(pedidoSeleccionado){
        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,true,pedidoSeleccionado)
    }

    cerrarModalBorrarPedido(){
        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,false,undefined)
    }

    abrirModalActualizarPedido(pedidoSeleccionado){
        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,false,true,pedidoSeleccionado)
    }

    cerrarModalActualizarPedido(){
        this.actualizarEstado(this.state.pedidos,this.state.hayDatos,false,false,undefined)
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
                        <DialogContentText id="alert-dialog-description" color="black">Esto eliminara las medidas asociadas con el cliente</DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button color={"error"} onClick={this.borrarPedido}>Eliminar</Button>
                        <Button onClick={this.cerrarModalBorrarPedido}>Cancelar</Button>
                    </DialogActions>

                </Dialog>

                { (this.state.pedidoSeleccionado)?
                    <Dialog
                    open={this.state.modalActualizarAbierto}
                    onClose={this.cerrarModalActualizarPedido}>
                    <DialogContent>
                    <DialogContentText>{this.state.pedidoSeleccionado.type}</DialogContentText>
                    </DialogContent>
                    </Dialog>:<></>

                }


            </React.Fragment>
        )
        }
    }

}

export default Pedidos;