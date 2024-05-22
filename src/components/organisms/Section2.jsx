import Cards from "../molecules/Cards";
import mysql from "../../data/mysql";
import "./Section2.css"

function Section2 (){
    return (
        <div id="cards_section">
        {   
          mysql.contacts.map(contact=><Cards image2 ={contact.image2} text2={contact.text2}></Cards>)

        }
    </div>
    
        
    );
}
export default Section2;