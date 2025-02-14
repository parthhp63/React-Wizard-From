import React, { useEffect } from "react";

const display=(
    <div className="w-full flex items-center ">
        <div className="relative flex flex-col items-center text-teal-600 ">
            <div className="rounded-full transition duration-500 ease-in-out border-2 border-gray-200 h-12 w-12 flex items-center justify-center py-3">1  
            </div>
            
            <div className="absolute top-0 text-center mt-16 w-30 text-xs font-medium uppercase" >Description</div>
            </div>
          
                <div className="flex-auto border-t-2 br transition duration-500 ease-in-out"> </div>
            </div>
       
)

const Header=({steps,currStep})=>{

    // useEffect(()=>{
    //  const stepState=steps.map((step,index)=>{
    //     object.ass
    //  })
    // },[steps,currStep])

    return(
        <div className="mx-4 p-4 flex justify-between items-center">
        {display}
        </div>
    )

}

export default Header;