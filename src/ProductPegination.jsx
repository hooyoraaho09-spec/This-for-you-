import React, { useCallback, useState } from 'react';

export default function ProductPegination(){
    const [page , setPage] = useState(1);
    const pages = [<PageOne/> ,<PageTwo/>, <PageThree/>]
    const handPrev = useCallback (()  => {
    // code goes
    setPage ((P) => Math.max(1, p-1))
    },[])
    const handleNext = useCallback ( () => {
        setPage ((p)  => Math.min(pages.length,p+1))
    },[pages.length]

    )

    return(
        <div>
         {pages [page-1]}
        <button onClick={handPrev} disabled = {page ===1}>Prev</button>
         <button onClick = {handleNext} disabled = {pages.length === page}>Next</button>
        </div>
    )

}
function PageOne(){
   return(
    <div>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dignissimos qui quasi quis 
     voluptatibus enim pariatur et delectus esse repellendus dolor, corporis sed 
     quidem inventore sequi ratione. Cupiditate, quasi velit.111111111111111
        </div>
    
   )
   
}

function PageTwo(){
   return(
    <div>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dignissimos qui quasi quis 
     voluptatibus enim pariatur et delectus esse repellendus dolor, corporis sed 
     quidem inventore sequi ratione. Cupiditate, quasi velit.222222222222222
        </div>
    
   )
   
}

function PageThree(){
   return(
    <div>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dignissimos qui quasi quis 
     voluptatibus enim pariatur et delectus esse repellendus dolor, corporis sed 
     quidem inventore sequi ratione. Cupiditate, quasi velit.3333333333333
        </div>
    
   )
   
}