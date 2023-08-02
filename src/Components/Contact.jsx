import React from 'react'
import { TbBrandFacebookFilled } from 'react-icons/tb'
import { RiInstagramLine } from 'react-icons/ri'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
export default function Contact() {
    return (
        <>
            <div className=" d-flex justify-content-center align-items-between">
                <div className='animate__animated animate__bounceInLeft'>
                    <h2 className='Contact'>
                        Reach US
                    </h2>
                </div>
            </div>
                <div className=" d-flex justify-content-center align-content-center">
            <div className='animate__animated animate__bounceInRight '>
                    <ul className='social'>
                        <p><a href=""><TbBrandFacebookFilled /></a></p>
                        <p><a href=""><AiOutlineTwitter /></a></p>
                        <p><a href=""><FaLinkedin /></a></p>
                        <p><a href=""><RiInstagramLine /></a></p>
                    </ul>
                </div>
            </div>
        </>
    )
}
