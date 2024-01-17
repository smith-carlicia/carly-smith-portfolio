'use client';
import Link from 'next/link';
import Image from 'next/image';
import { SiHandlebarsdotjs, SiCss3, SiMysql, SiHeroku, SiNodedotjs, SiJavascript, SiBootstrap, SiExpress } from "react-icons/si";
import Santa from '../../../../public/assets/cyber-santa.png';


const Cyber = () => {
    return (
        <div class='w-full h-screen bg-[#2B2B2B]' id='santa'>
            <div class='w-screen h-[30vh] lg:h[40vh] relative'>
                <div class='absolute top-0 left-0 w-full h-[30vh] lg:h[40vh] bg-[#bfaa8f]/80 z-10' />
                <Image
                    class="absolute z-1"
                    layout='fill'
                    objectFit='cover'
                    src={Santa}
                />
                <div class='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h1 class='py-2 font-sans'>Cyber Santa</h1>
                    <h3 class='flex justify-normal space-x-6'>Handlebar.js // Node.js // MySQL</h3>
                </div>
            </div>

            <div class='max-w-[1240px] h-full mx-auto p-2 gap-8 pt-8 mt-8 row'>
                <div class='col-7'>
                    <h3 class='text-[#bfaa8f] font-light font-sans'>Project</h3>
                    <h2 class='font-medium font-sans tracking-wide text-white'>Overview</h2>
                    <p class='font-sans mt-6 tracking-wide text-white'>
                        This application is a four page responsive codebase created to provide an accessible and centralized location for users to create, update, delete and view their own Christmas lists or lists of other users. This site can be used to store their own customized Christmas list and populate it with their gift ideas. Cyber Santa is a full-stack application that lets it's users get a little festive while planning their shopping.
                    </p>
                    <button type="button" class='px-10 py-3 bg-[#bfaa8f] mr-10 mt-8 rounded-md'>
                        <Link class='no-underline  text-white' href='https://project-2-cyber-santa.herokuapp.com/'>
                            Demo
                        </Link>
                    </button>
                    <button type="button" class="px-10 py-3 bg-[#bfaa8f] mt-8 rounded-md">
                        <Link class='no-underline  text-white' href='https://github.com/smith-carlicia/cyber-santa?tab=readme-ov-file'>
                            Repo
                        </Link>
                    </button>
                </div>

                <div class='col-1' />
                <div class='col-3'>
                    <div class='shadow-xl bg-[#2B2B2B] shadow-slate-950/50 mt-1 round-lg'>
                        <div>
                            <ul class='text-white pb-2'>
                            <h3 class='text-white font-semibold font-sans flex items-center text-lg mt-4 mr-8'>Technologies</h3>
                                <p class='text-white flex items-center'><SiHandlebarsdotjs class='text-[#bfaa8f] text-xl mr-2'/>Handlebar.js</p>
                                <p class='text-white flex items-center'><SiJavascript class='text-[#bfaa8f] text-xl mr-2' />JavaScript</p>
                                <p class='text-white flex items-center'><SiCss3 class='text-[#bfaa8f] text-xl mr-2'/>CSS</p>
                                <p class='text-white flex items-center'><SiBootstrap class='text-[#bfaa8f] text-xl mr-2'/>Bootstrap</p>
                                <p class='text-white flex items-center'><SiNodedotjs class='text-[#bfaa8f] text-xl mr-2'/>Node.js</p>
                                <p class='text-white flex items-center'><SiExpress class='text-[#bfaa8f] text-xl mr-2'/>Express.js</p>
                                <p class='text-white flex items-center'><SiMysql class='text-[#bfaa8f] text-xl mr-2'/>MySQL</p>
                                <p class='text-white flex items-center'><SiHeroku class='text-[#bfaa8f] text-xl mr-2' />Heroku</p>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class='col-1' />
            </div>
        </div>
    )
}

export default Cyber;