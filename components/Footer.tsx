import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-black h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5">
				<div className="p-5 ">
					<ul>
						<p className="text-white font-bold text-3xl pb-6">
							XXX<span className="text-red-300">FLIX</span>
						</p>
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						
						
						
					</ul>
				</div>
				<div className="p-5">
					
				</div>
				
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2022 All rights reserved | XXXFLIX
					
				</h1>
			</div>
    </div>
  )
}

export default Footer
