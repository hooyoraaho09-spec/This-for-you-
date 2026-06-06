
function List(props){
    const category = props.category
    const itemList = props.item;

    
       
        //   fruit.sort((a,b) => b.colories - a.colories); // reverse numerical order
        //   fruit.sort((a,b) => a.colories - b.colories); // numerical order
        //   fruit.sort((a,b) => a.name.localeCompare(b.name)); // sort by name in alphabetical order
        //   fruit.sort((a,b) => b.name.localeCompare(a.name)); // sort by name in reverse alphabetical order

    //    const highCalorieFruit = fruit.filter((fruit) => fruit.colories > 80);       
    // const lowCalorieFruit = fruit.filter((fruit) => fruit.colories <= 80);

       const fruitList = itemList.map((item) => <li key={item.id}>{item.name} - <b>{item.colories}</b></li>);
       return(
        <div>
             <h3>{category}</h3>
           <ul> 
               {fruitList}
           </ul>
           </div>
          
       )
       
}

export default List;