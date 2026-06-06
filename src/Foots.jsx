

// function foots (props){
//    return(
//       <div>
//       <h2>hello {props.names}</h2>
//       </div>
//    )


// }
// export default foots;

// const foots = () =>{
//    const isAdmin = false;
//    let message;
//    if(isAdmin){
//       message = "welcome admin";
//    }else{
//       message = "you are not access";
//    }
//    return(
//       <div>
//          <h2>{message}</h2>
//       </div>
//    )
// }
// export default foots;


const foots = () =>{
   const showContent = false;
   return(
      <div><h2>{showContent && <p>Content is visible</p>
      || <p>Content is not visible</p>}</h2></div>
   )
}
export default foots;