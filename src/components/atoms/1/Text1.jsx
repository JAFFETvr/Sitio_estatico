import "./Text.css"
function Text1 (props){
    return (
        <>
        <h1 id="h1">Welcome</h1>
        <h2 id="h2"> Bienvenido a halo conoce un poco de su historia</h2>
        <p id="p1">{props.text1}</p>
        </>
    )
}

export default Text1;