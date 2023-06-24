import React from 'react'


const Card = (props) => {

    return (
        <div className='flex flex-col w-64 h-72   text-white p-2 rounded gap-y-4 '>
           <div className='h-3/4 w-full border border-black p-4 rounded-xl relative'><img className='w-full h-full rounded-xl ' src={props.avatar} alt="" /><div className='absolute -right-4 -top-4  bg-black  rounded-t-full rounded-b-full h-10 w-10 flex justify-center items-center'><p className='' >{ props.id}</p></div></div>
           <div><h4 className='text-center text-xl text-black'>{props.first_name}</h4></div> 
            
        </div>
    )
}


export default Card