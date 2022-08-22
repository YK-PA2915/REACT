import React,{ Component } from "react";
import './productos.css';

const listaProducto = [
    {
    id: 1,
    descripcion:"zapato nike replica",
    precio:170000,
    },
    {
    id: 2,
    descripcion:"zapato adidas replica",
    precio:130000,
    }
    ,{
        id: 3,
        descripcion:"zapato Rebook replica",
        precio:110000,
    }
];
class Productos extends Component {
    /**cambiamos el estado de estatico o dinamico  */
constructor(props) {
    super(props);

    this.state = {
        listaProducto,
    };
    this.Eliminar = this.Eliminar.bind(this);
}
Eliminar(id) {
    const isNotId =item =>item.id !== id;
    const listaActualizada = this.state.listaProducto.filter(isNotId);
    this.setState({listaProducto: listaActualizada});
}
render() {
return (
    <div>
        <h1>PROYECTO REACT</h1>
        <div className="principal">
        <table> 
        <thead>
        <tr>
            <th>descripcion</th>
            <th>precio</th>
            <th></th>
        </tr> 
        </thead>
          {
            this.state.listaProducto.map(item => 
                //<div key={item.id} className="principal">
                 <tbody>
                        <td>{item.descripcion}</td>
                        <td>{item.precio}</td>
                        
                        <td>
                            <button onClick={() => this.Eliminar(item.id)} type="button">Eliminar</button>
                        </td>
                        </tbody> 
                        
                    //</div>
           
           ) 
        }
        </table>   
        </div>      
    </div>
);
}
}
export default Productos;