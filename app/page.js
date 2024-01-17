import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Profile from '../public/assets/job_profile_pic.jpeg';

export default function Home() {
  return (
    <div id='home' className='bg-[#2B2B2B] w-full h-screen'>
      <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center text-center'>
        <div class='row'>
          <div class='col-2' />
          <div class='col-10'>
            <picture>
              <Image
                class="img-fluid rounded-full shadow-xl z-[100] shadow-slate-950/50"
                height={300}
                width={300}
                src={Profile}
              />
            </picture>
          </div>
          <div class='col-2' />
        </div>
        <div class='row'>
          <div class='col' />
          <div class='col-8'>
            <p className='text-[#bfaa8f] font-sans text-3xl'>Carlicia Smith</p>
            <h2 className="text-xl text-white font-semibold mt-2 font-sans tracking-wide">
              Fullstack Software Engineer
            </h2>
            <p class='mt-4 text-white'>
              I'm a fullstack developer who loves to create dynamic applications. Currently, I'm focused on building responsive applications while learning Next js.
            </p>
            <button type="button" class="px-8 py-3 bg-[#bfaa8f] rounded-md mt-6 mr-8" >
              <Link href='https://docs.google.com/document/d/1OFxcuvjRz36lWJVWfmHlQjxmqZ4T0r6gqQE1wMYinq4/edit?usp=sharing'class='no-underline text-white'>
                Download Resume
              </Link>
            </button>
            <button type="button" class="px-8 py-3 bg-[#bfaa8f] rounded-md mt-6" >
              <Link href='mailto:smith.carlicia@gmail.com' class='no-underline text-white'>Contact</Link>
            </button>
            <div class='flex items-center justify-center space-x-4'>
              <Link href='https://github.com/smith-carlicia' class='text-[#bfaa8f] mt-6 text-3xl'>
                <AiOutlineGithub />
              </Link>
              <Link href='https://www.linkedin.com/in/carlicia-smith-613194b4/' class='text-[#bfaa8f] mt-6 text-3xl'>
                <AiFillLinkedin />
              </Link>
              <Link href='mailto:smith.carlicia@gmail.com' class='text-[#bfaa8f] mt-6 text-3xl'>
                <AiOutlineMail />
              </Link>
            </div>
          </div>
          <div class='col' />
        </div>
      </div>
    </div>
  )
}
