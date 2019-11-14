import React,{ Component } from 'react';
import './css/Content.css';
import { thisExpression } from '@babel/types';

class Content extends Component {
  //agregar un constructor 
  constructor(){
      //react necesita la palabra super para poder utilizar this
      super();
      //crear un state (objeto)
      this.state = {
          count:0,
          num1:0,
          num2:0
      };
      // para cargar todo el objeto
      this.handleCountClick=this.handleCountClick.bind(this);
      this.handleResultClick=this.handleResultClick.bind(this);
      this.handleInputChanged=this.handleInputChanged.bind(this);
  }
  
  componentDidMount(){
      this.setState({count:1});
  }

  handleCountClick(e){
    if(e.target.id==="add"){
      this.setState({count:this.state.count+1});
      
    }
    else if(e.target.id==="subtract" && this.state.count>0){
      this.setState({count:this.state.count-1});
    }
    else if(e.target.id==="reset"){
      this.setState({count:0});
    }
  }

  handleResultClick(e){
      if(e.target.id==="result"){
        this.setState({result:this.state.num1+this.state.num2});
      }
  }

  handleInputChanged(e){
    if(e.target.id==="num1"){
      this.setState({num1:Number(e.target.value)});
    }
    else{
      this.setState({num2:Number(e.target.value)});
    }
  }
  render() {
    const {body} =this.props;
      return(
    <div className="Content">
      <div className="content-in">
        <h1> Counter: {this.state.count} </h1>
        <p>
          <button id="add" onClick={this.handleCountClick}> + </button>
          <button id="subtract" onClick={this.handleCountClick}> - </button>
          <button id="reset" onClick={this.handleCountClick}> Reset </button>
        </p>

        <h2> Calculadora</h2>
        <p>
          <input id="num1" type="number" value={this.state.num1} onChange={this.handleInputChanged}/>
          +
          <input id="num2" type="number" value={this.state.num2} onChange={this.handleInputChanged}/>
          <button id="result" onClick={this.handleResultClick}> = </button>
        {this.state.result}       
        </p>
      </div>
    </div>
      );
  };
}

export default Content;
