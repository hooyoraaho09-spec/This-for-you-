
// import PropTypes from "prop-types"
function UserGreeting(props){
    // if(props.isLoggin){
    // return <h2> welcome {props.username} </h2>
    // }
    //   // even this is working you don't need to use else{ return <h2> hi </h2>}
    //     return <h3>hello again</h3>

    const welcome = <h2> welcome {props.username}</h2>
    const islogin =  <h2>please log in to continue</h2>

    return (props.isLoggin ?  welcome : islogin 

    );
}
// UserGreeting.proptypes ={
//     isLoggin: PropTypes.bool,
//     username: PropTypes.string,
// }

export default UserGreeting;