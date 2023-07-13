import React, { useState } from 'react';
import "./style.css"
function FuncCompo(){
   
    return(
        <div className='container'>
        <h2 className='head1' >This is created using functional Component</h2>
        <hr></hr>
        <h2 className='para'>This is done by External css</h2>
        < h2 style={{color:"#fff"}}>This is done by inline css</h2>

        </div>
    )
} 
export default FuncCompo;