import React from "react";
import './grid.css';
function articlesWidget(props){
    return (
        <div className="grid-item">
        
        
         <div style={{}}>
         <h3>{props.article.title}</h3>
         <div style={{ display:"flex",flexDirection:"row",justifyContent:"center",
         alignItem:"center",margin:"7px"}}><img src = {props.article.imageSrc}style={{maxWidth: '75%',}} alt = "Couldn't load" border = "0"/> </div>

         
        
         </div>
         <div style={{display:"flex"}}>
         <div>{props.article.description}</div>
         {props.article.showContent ? <div>{props.article.content}</div> : <button style={{'color':'blue'}}>Read More</button>}
        </div>
         </div>
    );
}
export default articlesWidget;