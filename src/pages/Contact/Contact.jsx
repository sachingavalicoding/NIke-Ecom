import React from 'react'

const Contact = () => {
    return (
        <div className='contact__container w-full h-full p-6'>
            <form action="php.backend" className='form__container mt-[4rem] w-[100%] mx-auto border-2 shadow-md flex flex-col gap-5 md:w-[60%] px-4 py-5'>
                <div className='row'>

                    <label>First  Name </label>
                    <input type="text" placeholder='Enter First  Name....' />
                </div>
                <div className='row'>
                    <label >Last Name </label>
                    <input type="text" placeholder='Enter Last Name....' />
                </div>

                <div className='row'>

                    <label >Email  </label>
                    <input type="email" placeholder='Enter Email ...' />
                </div>
                <div className='row'>
                    <label > Phone No </label>
                    <input type="tel" placeholder='Enter Phone no....' />
                </div>

                <div className='row'>
                    <label > Massage </label>
                    <textarea name="textarea" id="textarea" cols="30" rows="1"></textarea>
                </div>

                <div className='flex gap-5 items-center w-full justify-center'>
                    <button type='reset' className="btn-pri">Clear</button>
                    <button type='submit' className="btn-sec">Submit </button>
                </div>
            </form>

        </div>
    )
}

export default Contact