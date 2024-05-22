import Text1 from "../atoms/1/Text1";
import Image1 from "../atoms/1/Image1";
import "./Presentacion.css"
function Presentacion (props){
    return (
        <>

        <div id="conteiner">
         <Text1 text1={props.text1}></Text1>
         
         </div>
         <div id="imag_cont">
                     <Image1 image1={props.image1}></Image1>

         </div>
    
       
        </>
        
    )
}
export default Presentacion;