import React from 'react'

function Button({children, selected, onClick}) {
    return (
        <button 
        className={`${selected === true ? "bg-lightGreen text-zinc-50 hover:bg-darkGreen" : "bg-zinc-500/30 text-zinc-200 hover:bg-zinc-800"}
         text-sm px-2 py-1 rounded-full font-semibold transition-all flex items-center gap-2`}
         onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
