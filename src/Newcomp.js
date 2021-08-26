import React, { Component } from 'react'


export class Newcomp extends Component {
    
    
    state={
        Todo:['mekla','khrja','nom'],
        Ntodo:" " 
    };
    handleChange=(e)=>{this.setState({Ntodo:e.target.value})};
    Buttonchange=(newtask)=>{
        this.setState({
            Todo:[...this.state.Todo,newtask] 
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.Buttonchange(this.state.Ntodo)}>add</button>
                <input type="text" onChange={(e)=>this.handleChange(e)} />
                {this.state.Todo.map((e,i)=>{
                return  <ul><li key={i}>{e}</li></ul>
                })}

            </div>
        )
    }
}

export default Newcomp

