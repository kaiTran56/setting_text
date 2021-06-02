import React, {Component} from 'react';
class SizeSetting extends Component {
  render(){
    return(
       <div>
         <div class="panel panel-warning">
           <div class="panel-heading">
             <h3 class="panel-title">Size : 15px</h3>
           </div>
           <div class="panel-body">
             <button type="button" className="btn btn-success">Increase</button>
              <button type="button" className="btn btn-success">Decrease</button>
           </div>
         </div>
       </div>
      );
  }
}
export default SizeSetting;