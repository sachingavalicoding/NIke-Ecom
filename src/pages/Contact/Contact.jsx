import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-screen bg-green-200'>
            <form action="php.backend" className='w-[45rem] mx-auto mt-[4rem] bg-red-600 flex flex-col px-3 py-2 items-start justify-center gap-3   '>
                <div className='  grid grid-cols-2 gap-3 place-items-center '>
                    <div>
                        <label>First  Name </label>
                        <input type="text" placeholder='Enter First  Name....' />
                    </div>
                    <div>
                        <label >Last Name </label>
                        <input type="text" placeholder='Enter Last Name....' />
                    </div>
                </div>
                <div className='  grid grid-cols-2 gap-3 place-items-center '>
                    <div >
                        <label >Email  </label>
                        <input type="email" placeholder='Enter Last Name....' />
                    </div>
                    <div>
                        <label > Phone No </label>
                        <input type="tel" placeholder='Enter Last Name....' />
                    </div>
                </div>
                <div className='w-full flex items-center justify-start'>
                    <label > Massage </label>
                    <textarea name="textarea" id="textarea" cols="30" rows="5"></textarea>
                </div>
            </form>

        </div>
    )
}

export default Contact