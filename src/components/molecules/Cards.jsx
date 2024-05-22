import "./Cards.css";
import Text2 from "../atoms/2/Text2";
import Image2 from "../atoms/2/Image2";
function Cards (props){
    return (
        <div id="cards_conteiner">
            <Image2 image2={props.image2}></Image2>
            <Text2 text2={props.text2}></Text2>
        </div>
    )
}
export default Cards;