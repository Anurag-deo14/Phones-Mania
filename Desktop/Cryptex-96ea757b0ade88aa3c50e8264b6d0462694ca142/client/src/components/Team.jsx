import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import  anurag  from "../../images/anurag.jpeg"
import  ishaan  from "../../images/ishaan.jpeg"
import  aniket  from "../../images/aniket.jpeg"

const Team = () => {
  return (
    <>
    <div className='text-white px-10 lg:px-60 py-0 lg:py-20' id='team'>
        <h1 className='text-center py-10 text-5xl font-bold'>Our Team</h1>
        <p>We're committed to make sure that your transactions are safe and your doation reaches to the person in need, and we're always looking for ways to improve our platform. Thank you for choosing our website.Our website is completely open source and also open to contributions. Check github for contributing.</p>
        <div className='flex lg:flex-row flex-col justify-around py-20 pb-5 items-center'>
            <div className='w-48 pb-10'>
                <a href="https://linktr.ee/anuragdeo" ><img src={anurag} alt="" className='rounded-[50%] h-[200px] '/></a>
                <a href="https://linktr.ee/anuragdeo" ><h2 className='transition ease-in-out text-center text-2xl font-bold hover:text-[20px] py-2 pt-4'>Anurag Deo</h2></a>
                <h3 className='text-center pb-4'>FullStack Developer</h3>
                <div className='flex flex-row justify-evenly'>
                    <a href="https://www.linkedin.com/in/anurag-deo-03410a229/"><SiLinkedin size={30}/></a>
                    <a href="https://github.com/Anurag-deo14"><SiGithub size={30}/></a>
                </div>
            </div>
            <div className='w-48 pb-10'>
                <a href="https://linktr.ee/anuragdeo" ><img src={aniket} alt="" className='rounded-[50%] h-[200px]'/></a>
                <a href="https://linktr.ee/anuragdeo" ><h2 className='transition ease-in-out text-center text-2xl font-bold hover:text-[20px] py-2 pt-4'>Aniket Kumar</h2></a>
                <h3 className='text-center pb-4'>FrontEnd Developer</h3>
                <div className='flex flex-row justify-evenly'>
                    <a href="https://www.linkedin.com/in/kraniket901/"><SiLinkedin size={30}/></a>
                    <a href="https://github.com/Kraniket901"><SiGithub size={30}/></a>
                </div>
            </div>
            <div className='w-48 pb-10'>
                <a href="https://linktr.ee/anuragdeo" ><img src={ishaan} alt="" className='rounded-[50%] h-[200px]'/></a>
                <a href="https://linktr.ee/anuragdeo" ><h2 className='transition ease-in-out text-center text-2xl font-bold hover:text-[20px] py-2 pt-4'>Ishaan Adarsh</h2></a>
                <h3 className='text-center pb-4'>UI/UX Designer</h3>
                <div className='flex flex-row justify-evenly'>
                    <a href="https://www.linkedin.com/in/ishaan-adarsh-161a56222/"><SiLinkedin size={30}/></a>
                    <a href="https://github.com/IshaanAdarsh"><SiGithub size={30}/></a>
                </div>
            </div>
           

        </div>
    </div>
    </>
  )
}

export default Team