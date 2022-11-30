import {Component} from "react";
import {TableContainer, Table, TableBody, Box, Typography, Grid, TableRow, TableCell, TableHead} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";



class Pedidos extends Component{

    constructor(props) {
        super(props);

        this.state = {
            pedidos: {},
            hayDatos:false,
            consultaEjecutada:false
        }
    }


    async getPedidos(){

        const respuesta = await fetch("https://proyecto-tpi.onrender.com/api/v1/tasks",{
            method:'get',
            headers:{
                "api":"78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8"
            }
        })


        respuesta.json().then(value => {
            console.log(value)
            this.setState({
                pedidos:value,
                hayDatos:true
            })

        })

    }



    render() {



        if(!this.state.hayDatos){
            this.getPedidos()

                return (<>

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
                  </Grid>
              </>)


        }
        else {



        return (

            <>



                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align={"center"}>
                                    Tipo
                                </TableCell>
                                <TableCell align={"center"}>
                                    Fecha de recepción de pedido
                                </TableCell>
                                <TableCell align={"center"}>
                                    Fecha de entrega de pedido
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
                                            </TableRow>
                                        </>
                                    }
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </>
        )
        }


    }
}
export default Pedidos;