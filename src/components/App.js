import React,{Component} from 'react';
import {connect} from "react-redux";
import '../styles/index.css';
import MemeItem from './MemeItem';
import { FormGroup , ControlLabel , Form,FormControl} from 'react-bootstrap';
class App extends Component{
  constructor(){
    super();
    this.state={
       memeLimit:12,
       text0:"",
       text1:"",
    };
  }
  render(){
    return(
      <div>
        <h1>Meme Generator</h1>
        <br/>
        <div>
        <h4>
        <i>Write some Text...</i>
        </h4>
        </div>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel> {" "} 
            <FormControl type="text" onChange={event=>this.setState({text0:event.target.value})}></FormControl>
          </FormGroup>
          {" "}
            <FormGroup>
            <ControlLabel>Bottom</ControlLabel> {" "}
             <FormControl type="text" onChange={event=>this.setState({text1:event.target.value})}></FormControl>
            </FormGroup>
           
        </Form>
        {
          this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{return(
            <MemeItem 
            key={index} 
            meme={meme} 
            text0={this.state.text0} 
            text1={this.state.text1}/>
          );
        })
        }
        <div className="meme-button" onClick={()=>{this.setState({memeLimit: this.state.memeLimit+12});
        }}>
          Load more....
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps,null)(App);
