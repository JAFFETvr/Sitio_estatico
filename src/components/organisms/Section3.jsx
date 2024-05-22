import Personajes from "../molecules/Personajes";
import mysql from "../../data/mysql";
import "./Section3.css"
function Section3 (){
    return(
        <div id="personajes_section">
            {
                mysql.contacs3.map(contact=><Personajes image3 ={contact.image3} text3={contact.text3}></Personajes>)

            }
        </div>  

    )
}
export default Section3;