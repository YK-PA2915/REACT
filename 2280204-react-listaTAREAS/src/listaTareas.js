import React, { Component } from 'react';



class ListaTareas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: 'yeimi',
            todoItem: [
            {
                action: 'endulzar a mi amigo secreto',
                done: true,
            },
            {
                action: 'almorzar',
                done: false,
            }
            ],
            newItemText: '',
        }
    }
/*metodo para actualizar*/
    UpdateNexTextValue = (event) =>{
        this.setState({newItemText: event.target.value});
    }
/*metodo para crear un nuevo elemento */
    CreateNewTodo = ()=> {
        if(!this.state.todoItem
            .find( item => item.action === this.state.newItemText)) 
            {
                this.setState({
                    todoItem: [
                        ...this.state.todoItem,
                        {
                            action: this.state.newItemText,
                            done: false 
                        }],
                    
                    });
            }

    }
/* toggole  */
ToggleTodo =(todo)=> this.setState({todoItem:
            this.state.todoItem.map(item => item.action === todo.action 
                ? {...item, done: !item.done } : item )
            });
/*construir las filas de la tabla de  tarea  */
TodoTableRows = () => this.state.todoItem.map(item =>
            <tr key={item.action}>
                <td>{item.action}</td>
                <td>
                    <input type="checkbox" checked={item.done}
                    onChange={()=>this.ToggleTodo(item)}></input>
                </td>

            </tr>
    
    )

render() {
        return (
            <div>
                <h4 className="bg-primary text-white text-center p-5">
                    Lista Tareas de {this.state.userName}<span> </span>
                    ({this.state.todoItem.filter(t => !t.done).length}- cosas por hacer)</h4>
                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control"
                            value={this.state.newItemText}
                            onChange={this.UpdateNexTextValue}></input>
                        <button className="btn btn-primary mt-1"
                            onClick={this.CreateNewTodo}>ADD</button>

                    </div>
                    <table className="table table-striped table-bordered ">
                        <thead>
                            <tr>
                                <th>DESCRIPCION</th>
                            </tr>
                        </thead>
                        <tbody> {this.TodoTableRows()}
                           
                        </tbody>

                    </table>

                </div>
            </div>
         )
    }
}

export default ListaTareas;


