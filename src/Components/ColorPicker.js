import React, {Component} from 'react';
class ColorPicker extends Component {
  render(){
    return(
       <div>
         <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           <div class="panel panel-primary">
             <div class="panel-heading">
               <h3 class="panel-title">Color Picker</h3>
             </div>
             <div class="panel-body">
               <span></span>
               <hr/>
             </div>
           </div>
         </div>

       </div>
      );
  }
}
export default ColorPicker;