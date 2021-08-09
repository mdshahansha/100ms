import React from 'react';


 const Pagei=({postsPerPerson,totalPosts})=>{
     const personNo=[];

     for(let i=1;i<Math.ceil(totalPosts/postsPerPerson);i++){
         personNo.push(i);
     }
     return(
         <div>
             <nav>
                 <ul className="pagination">
                     {
                         personNo.map(number =>{
                             
                         })
                     }

                 </ul>
             </nav>
         </div>
     )
 }

export default   Pagei;
