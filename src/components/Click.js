// function Click(){
//     const mouse = (a) => {
//         alert(a);
//     }
//     return(
//         <button type="button" onClick={() => mouse("You clicked me!")}>Click me</button>
//     )
// }
function Click(){
    const mouse = (a, b) => {
        alert(a + b.type);
    }
    return(
        <button type="button" onClick={(event) => mouse("You clicked me!", event)}>Click me</button>
    )
}

export default Click;