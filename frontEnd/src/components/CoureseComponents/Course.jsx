import React from 'react'
import Cards from "../HomeComponets/Cards"
import list from "../../../public/BooksList.json"
import { Link } from "react-router-dom"
function Course() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl'>
                        We're delighted to have you <span className='text-pink-500'> Here! :)</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, dignissimos. Neque, porro laborum sint eos quaerat natus consequatur ipsa saepe hic ab vel aperiam perferendis non similique numquam praesentium eius soluta repellendus odit sunt nemo quisquam earum illo. Officiis inventore reprehenderit nam rerum accusamus tempora veniam amet labore vel quis!
                    </p>

                    <Link to="/">
                        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>
                            Back
                        </button>
                    </Link >
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        list.map((item) => (

                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>
        </>
    );
}

export default Course