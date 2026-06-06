import "./Stt.css"
import PropTypes from "prop-types";
function Testes(props){

    return(
        <div className="oneone">
            <h2>Name: {props.name} </h2>
            <h3>Age: {props.age}   </h3>
            <h4>Student: {props.student ? "yes" : "No"} </h4>
        </div>
    )

}

Testes.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    student: PropTypes.bool.isRequired,
}
Testes.defaultProps = {
    name: "gust",
    age: 0,
    student: false,
}

export default Testes;