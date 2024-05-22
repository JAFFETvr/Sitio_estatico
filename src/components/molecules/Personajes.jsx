import Text3 from "../atoms/3/Text3"
import Image3 from "../atoms/3/Image3"
import "./Personajes.css"
function Personajes (props){
    return(
        <div id="personajes_conteiner">
           <Image3 image3={props.image3}></Image3>

            <Text3 text3={props.text3} ></Text3>
        </div>
    )

}
export default  Personajes