import profilePicture from "./assets/img1.jpg";
import "./index3.css";
function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePicture} alt="profile -picture"/>
            <h2>farhia</h2>
            <p>love to fly and always have fun</p>


        </div>
        


    );
}
export default Card;