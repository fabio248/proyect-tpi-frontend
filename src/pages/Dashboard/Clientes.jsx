import { CircularProgress, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { Component } from "react";


class Clientes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientes: {},
            nulo:true,
            prueba:false,
        };
    }

    // Obtiene los clientes
    async getClientes() {
        
        const peticion = await fetch('https://proyecto-tpi.onrender.com/api/v1/clients', {
            method:'GET',
            headers: {
                'API':'78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmJlN2MwZS01Mjc1LTQyNjEtYmZiMC1jMDcxYWE4NGI1NTIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjkzNDAzNDd9.yh76A2ekWXODxuAIdsRmdtB9KOr4kdFGtULH9QWlQR8',
            }
        });
        
        peticion.json().then(data => {
            this.setState({
                clientes:data,
                nulo:false,
            })
            console.log(data)
        }).catch(exp => {
            console.log(exp)
        });
    }

    render() {

        this.getClientes();

        if(this.state.nulo == false) {
            return(
                <React.Fragment>
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
                                            </TableRow>
                                        </React.Fragment>
                                    }
                                )}
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
        else {
            return(
                <React.Fragment>
                    <Grid
                        container
                        spacing={2}
                        direction='column'
                        alingItems='center'
                        style={{minHeight:'100vh'}}
                    >
                        <Box>
                            <CircularProgress color={'inherit'} />
                        </Box>
                    </Grid>
                </React.Fragment>
            );
        }
    }
}

export default Clientes;