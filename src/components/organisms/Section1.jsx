import mysql from "../../data/mysql"
import Presentacion from "../molecules/Presentacion"
import "./Section1.css"
function Section1(){
    return (
        <div id="class_presentacion">
            {
                mysql.constacs2.map (contact=><Presentacion image1 ={contact.image1} text1={contact.text1}></Presentacion>)
            }
        </div>
        
    )
}
export default Section1