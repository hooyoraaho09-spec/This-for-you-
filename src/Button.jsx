

function Button(){
    const handleClick = () => 
        console.log("yes u did it!");
    const handleClick2 = (name) =>
        alert(`hello ${name} `);
    
    return(
        <button onClick={() => handleClick2("farhia")}>Click me </button>
    )
}
export default Button;