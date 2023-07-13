import React, {Component} from "react";
import "./style2.css"
class ClassCompo extends Component{
render(){
    return(
<div className="container2">
 <h2 className="secondbox">This is created using Class Component </h2>
 <h2 className='para'>This is done by External css</h2>
        < h2 style={{color:"#fff"}}>This is done by inline css</h2>

</div>
    )
}
}
export default ClassCompo;
