import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
const Footer = () => {
    return (
        <footer className="flex flex-col space-y-10 justify-center m-[5rem]">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <Link className="hover:text-gray-900" to="/"> Home</Link>
                <Link className="hover:text-gray-900" to="/products">Products</Link>
                <Link className="hover:text-gray-900" to="/contact">Contact</Link>
            </nav>

            <div className="flex justify-center space-x-5  text-2xl ">
                <a href="./">
                    <p> {<AiFillInstagram />} </p>
                </a>
                <a href="./">
                    <p> {<FaTwitter />} </p>
                </a>
                <a href="./">
                    <p> {<FaFacebook />} </p>
                </a>
                <a href="./">
                    <p> {<RiWhatsappFill />} </p>
                </a>
            </div>
            <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
        </footer>
    )
}

export default Footer