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
                     N
                </React.Fragment>
            )
        }
        else {
            return(
                <React.Fragment>
                    S
                </React.Fragment>
            );
        }
    }
}

export default Clientes;