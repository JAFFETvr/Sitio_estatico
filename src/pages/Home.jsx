import Section1 from "../components/organisms/Section1";
import Section2 from "../components/organisms/Section2";
import Section3 from "../components/organisms/Section3";
import Header from "../components/molecules/Header";
import "./Home.css"
function Home (){
    return (
        <>
         <Header></Header>
        <div id="presentacion_home">
             <Section1></Section1>
         </div>

        <div id="cards_home">
           <Section2></Section2>
        </div>
        <div id="personajes_home">
         <Section3></Section3>
        </div>
        
        </>
        
    )
}
export default Home;