import React,{ Component } from "react";
import './Aerolinea.css';

const listaAerolinea = [
    {
        id: 1,
        nombre:"Bogotá",
        aerolinea:"Latam",
    },
    {
        id: 2,
        nombre:"Cartagena",
        aerolinea:"Avianca",
    },
    {
        id: 3,
        nombre:"Cartagena",
        aerolinea:"Latam",
    },
];

function buscar(nombre){
    return function(item) {
        return item.nombre.toLowerCase().includes(nombre.toLowerCase());
    }
}
class Aerolinea extends Component {
    /**cambiamos el estado de estatico o dinamico  */
constructor(props) {
    super(props);

    this.state = {
        listaAerolinea,
        nombre: ''
    };
    this.Eliminar = this.Eliminar.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

}
Eliminar(id) {
    const isNotId =item =>item.id !== id;
    const listaActualizada = this.state.listaAerolinea.filter(isNotId);
    this.setState({listaAerolinea: listaActualizada});
}
onSearchChange(event) {

    this.setState({nombre: event.target.value});
}



render() {
return (
    <div className="principal">
        <h1>AEROLINEA</h1>
            <form>
                <input type="text" onChange={this.onSearchChange}></input>
            </form>

        <table> 
        <thead>
        <tr>
            <th>NOMBRE</th>
            <th>AEROLINEA</th>
            <th></th>
        </tr> 
        </thead>
        <tbody>
          {
            this.state.listaAerolinea.filter(buscar(this.state.nombre)).map(item => 
              <tr  key={item.id} >
                 <td>{item.nombre}</td>
                        <td>{item.aerolinea}</td>
                        
                        <td>
                            <button onClick={() => this.Eliminar(item.id)} type="button">Eliminar</button>
                        </td>
              </tr>            
           ) 
        } 
        </tbody> 
        </table>   
           
    </div>
);
}
}
export default Aerolinea;