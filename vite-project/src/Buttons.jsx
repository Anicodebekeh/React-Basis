export default function Button({button, message}){
    function msg(){
        alert(message)
    }
    return(
        <div>
            <button onClick={msg}>{button}</button>
            <p></p>
        </div>
    )
}