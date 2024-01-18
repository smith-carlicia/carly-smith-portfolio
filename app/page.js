import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Profile from '../public/assets/job_profile_pic.jpeg';

export default function Home() {
  return (
    <div id='home' className='bg-[#2B2B2B] w-full h-screen'>
      <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center text-center'>
        <div class='row'>
          <div class='col-3'>
            <picture>
              <Image
                class="img-fluid rounded-full shadow-xl z-[100] shadow-slate-950/50"
                height={300}
                width={300}
                src={Profile}
              />
            </picture>
          </div>
          <div class='col-8'>
            <p className='text-[#bfaa8f] font-[kepler] font-semibold text-6xl'>Carlicia Smith</p>
            <h2 className="text-4xl text-white font-[kepler] font-semibold mt-2 tracking-widest">
              Fullstack Software Engineer
            </h2>
            <p class='mt-4 font-[europa] text-2xl text-white'>
              I'm a fullstack developer who loves to create dynamic applications. Currently, I'm focused on building responsive applications while learning Next js.
            </p>
            <button type="button" class="px-8 py-3 bg-[#bfaa8f] rounded-md mt-6 mr-8" >
              <Link href='https://docs.google.com/document/d/1OFxcuvjRz36lWJVWfmHlQjxmqZ4T0r6gqQE1wMYinq4/edit?usp=sharing' class='no-underline font-[europa] font-semibold text-lg text-white tracking-wider'>
                Download Resume
              </Link>
            </button>
            <button type="button" class="px-8 py-3 bg-[#bfaa8f] rounded-md mt-6" >
              <Link href='mailto:smith.carlicia@gmail.com' class='no-underline font-[europa] font-semibold text-lg text-white tracking-wider'>Contact</Link>
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
