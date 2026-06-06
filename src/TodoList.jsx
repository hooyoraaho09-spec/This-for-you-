// import React from "react";
// import ToggleNote from "./ToggleNote";
// import UserGreeting from "./Youtube/UserGreeting.jsx";
// import tests from "./Youtube/Testes.jsx";
// import Testes from "./Youtube/Testes.jsx";
// import List from "./List.jsx";
 // return(
    // <div>
    //     <List item={fruit} category="Fruits"/>
    //     <List item={vegetables} category="Vegetables"/>
    // </div>
    // <div>
    //     <Testes  name = "farhia"  age = {30} student = {false}/>
    //    <Testes   age = {5} student = {false}/>

    // </div>

    
//     )


// }

// function TodoList(){


//     const fruit = [{id:1,name:"Apple", colories: 95},
//          {id:2,name:"Chery", colories: 80},
//           {id:3,name:"orange", colories: 62},
//           {id:4,name:"grape", colories: 52},
//           {id:5,name:"banana", colories: 105}];

//       const vegetables = [{id:6,name:"Apple", colories: 95},
//          {id:7,name:"Carrot", colories: 41},
//           {id:8,name:"Broccoli", colories: 34},
//           {id:9,name:"Spinach", colories: 23},
//           {id:10,name:"Potato", colories: 77}];




   function Todolist(){
    const todos = ["Learn React","practice","hooks","Build an project"];
      return(
    <div>
        <h3>My todos</h3>
        <ul>
            {todos.map((todo,index) => (
                <li key={index}>{todo}</li>
            )) }
            
        </ul>
        
    </div>
      );
   }
export default  Todolist;

   