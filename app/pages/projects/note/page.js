import Image from 'next/image';
import Link from 'next/link';
import Taker from '../../../../public/assets/note-taker.png';
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiHeroku } from "react-icons/si";

const Note = () => {
    return (
        <div class='w-full h-screen bg-[#2B2B2B]' id='note'>
            <div class='w-screen h-[30vh] lg:h[40vh] relative'>
                <div class='absolute top-0 left-0 w-full h-[30vh] lg:h[40vh] bg-[#bfaa8f]/80 z-10' />
                <Image
                    class="absolute z-1"
                    layout='fill'
                    objectFit='cover'
                    src={Taker}
                />
                <div class='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h1 class='py-2 font-sans'>Note Taker</h1>
                    <h3 class='flex justify-normal space-x-6'>HTML5 // Node.js // Express.js</h3>
                </div>
            </div>



            <div class='max-w-[1240px] mx-auto p-2 gap-8 pt-8 mt-8 row'>
                <div class='col-7'>
                    <h3 class='text-[#bfaa8f] font-light font-sans'>Project</h3>
                    <h2 class='font-medium font-sans tracking-wide text-white'>Overview</h2>
                    <p class='font-sans mt-6 tracking-wide text-white'>
                        This Note Taker codebase is designed to allow users to post, save and delete notes at the click(or tap) of their fingertips.                    
                    </p>
                    <button type="button" class='px-10 py-3 bg-[#bfaa8f] mr-10 mt-8 rounded-sm'>
                        <Link class='no-underline  text-white' href='https://enigmatic-atoll-90656.herokuapp.com/'>
                            Demo
                        </Link>
                    </button>
                    <button type="button" class="px-10 py-3 bg-[#bfaa8f] mt-8 rounded-sm">
                        <Link class='no-underline  text-white' href='https://github.com/smith-carlicia/note-taker'>
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

                                <p class='text-white flex items-center'><SiHtml5 class='text-[#bfaa8f] text-xl mr-2' />HTML</p>
                                <p class='text-white flex items-center'><SiCss3 class='text-[#bfaa8f] text-xl mr-2' />CSS</p>
                                <p class='text-white flex items-center'><SiJavascript class='text-[#bfaa8f] text-xl mr-2' />JavaScript</p>
                                <p class='text-white flex items-center'><SiNodedotjs class='text-[#bfaa8f] text-xl mr-2' />Node.js</p>
                                <p class='text-white flex items-center'><SiExpress class='text-[#bfaa8f] text-xl mr-2'/>Express.js</p>
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

export default Note;