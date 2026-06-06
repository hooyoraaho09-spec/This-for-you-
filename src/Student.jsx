

// export default function Student({name,age,city}){

// import { useState } from "react"

    
//     return(
//         <div>
//           <p>Name:{name}</p>
//           <p>Age: {age}</p>
//           <p>City: {city}</p>
//         </div>

//     )
// }

// 
// import React, { useState } from "react";
// export default function Student(){
//     const [count,setCount] = useState(0);
//     function decrease(){
//         setCount(count-1)
//     }
//     function reset(){
//         setCount(0)
//     }
//     function double(){
//         setCount(count*2)

//     }

//     return(
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={()=> setCount(count+1)}>Increase</button>
//             <button onClick={decrease}>decrease</button>
//             <button onClick={reset}>Reset</button>
//             <button onClick={double}>Square</button>
//         </div>
//     )

// }

// import React, { useState } from "react";

// export default function Student(){
//    
//     const [age,setAge] = useState(0);
//     return(
//         <div>
//            
//             <input type="number"
//             placeholder="Enter your age?"
//             onChange={(e) => setAge((e.target.value))}   />
//             <h1>My name is {name} </h1>
//             <h2>iam {age} years old</h2>
            
//         </div>
//     )

// }

// conditional rendering
// import React, { useState } from "react";

// export default function Student() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   function handleOnclick() {
//     if (name.trim() === "") {
//       setMessage("Enter your name first");
//       return;
//     }

//     setMessage("");
//     setIsLoggedIn(true);
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button onClick={handleOnclick}>
//         Login
//       </button>

//       {message && <p>{message}</p>}

//       {isLoggedIn && (
//         <>
//           <p>Welcome {name}</p>
//           <p>You have access to the dashboard </p>
//         </>
//       )}
//     </div>
//   );
// }
import "./Student.css";

import React, { useState } from "react";

export default function Student() {
  const [message, setMessage] = useState(
    "Click the button to get a message ✨"
  );

  const messages = [
    "Welcome Saxiib test React waye igu qado hh ❤️",
    "Good Night 🌙",
    "Have a Nice Day 😊",
    "Keep Learning React 🚀",
    "You Are Doing Great 💪",
  ];

  function handleMessage() {
    const randomIndex = Math.floor(
      Math.random() * messages.length
    );

    setMessage(messages[randomIndex]);
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Random Message Generator</h1>

        <p className="message">{message}</p>

        <button
          className="btn"
          onClick={handleMessage}
        >
          Show Random Message
        </button>
      </div>
    </div>
  );
}