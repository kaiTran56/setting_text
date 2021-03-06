import React, {Component} from 'react';
class ColorPicker extends Component {

  constructor(props){
    super(props);
    this.state = {
      colors : ['red','green','blue','#ccc']
    };
  }

  showColor(color){
    return {
      backgroundColor : color  
    };
  }

  onSetColor(color){
    this.props.onReceiveColor(color);
  }

  render(){

    var elmColors = this.state.colors.map((color, index)=>{
      return <span 
                  key={index} 
                  style={this.showColor(color)}
                  className={this.props.color ===color ? 'active': ''}
                  onClick={()=>{this.onSetColor(color)}}
                  >
                    
              </span>
    });

    return(
       <div>
         <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           <div class="panel panel-primary">
             <div class="panel-heading">
               <h3 class="panel-title">Color Picker</h3>
             </div>
             <div class="panel-body">
               {elmColors}
               <hr/>
             </div>
           </div>
         </div>

       </div>
      );
  }
}
export default ColorPicker;