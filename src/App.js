import React, {Component} from 'react';
import './App.css';
import Reset from './Components/Reset';
import ColorPicker from './Components/ColorPicker';
import SizeSetting from './Components/SizeSetting';
import Result from './Components/Result';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontSize : 15
    };
  }

  onSetColor = (param)=>{
    this.setState({
      color : param
    });
  }

  render(){
    return(
        <div className="container mt-50">
          <div className="row">
            <ColorPicker color = {this.state.color} onReceiveColor={this.onSetColor}/>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting/>
              <Reset/>
            </div>
            <Result color ={this.state.color}/>
          </div>
        </div>
      );
  }
}
export default App;