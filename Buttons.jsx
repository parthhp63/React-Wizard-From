import React from "react";

const Buttons=()=>{

    return(
        <div className="container flex justify-around mt-4 mb-8">
            <button className="bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-600 hover:text-white transition duration-200 ease-in-out">
                Back
            </button>

            <button className="bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-600 hover:text-white transition duration-200 ease-in-out">
                Next
            </button>

        </div>
    )
}
export default Buttons;