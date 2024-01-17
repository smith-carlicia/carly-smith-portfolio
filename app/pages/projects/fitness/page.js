import Link from 'next/link';
import Image from 'next/image';
import { SiHtml5, SiCss3, SiMongodb, SiHeroku, SiNodedotjs, SiJavascript, SiBootstrap, SiExpress } from "react-icons/si";
import Fit from '../../../../public/assets/fitness-tracker.png';

const Fitness = () => {
    return (
        <div class='w-full h-screen bg-[#2B2B2B]' id='fitness'>
            <div class='w-screen lg:h[40vh] relative'>
                <div class='absolute top-0 left-0 w-full h-[30vh] lg:h[40vh] bg-[#bfaa8f]/80 z-10' />
                <Image
                    class="absolute z-1"
                    layout='fill'
                    objectFit='cover'
                    src={Fit}
                />
                <div class='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h1 class='font-[kepler] font-bold py-2'>Fitness Tracker</h1>
                    <h3 class='flex justify-normal space-x-6 font-[europa] text-semibold text-xl tracking-wider'>HTML // Node.js // MongoDb</h3>
                </div>
            </div>

            <div class='max-w-[1240px] mx-auto p-2 gap-8 pt-8 mt-8 row'>
                <div class='col-7'>
                    <h3 class='font-[kepler] text-[#bfaa8f] font-light tracking-wider'>Project</h3>
                    <h2 class='font-[kepler] text-white font-medium tracking-wider'>Overview</h2>
                    <p class='font-[europa] text-white text-xl tracking-wide mt-6'>
                        This codebase is a workout tracker that creates, updates and tracks the user's daily workouts.
                    </p>
                    <button type="button" class='px-10 py-3 bg-[#bfaa8f] mr-10 mt-8 rounded-sm'>
                        <Link class='no-underline font-[europa] text-white font-semibold text-lg' href='https://blooming-forest-17711.herokuapp.com/'>
                            Demo
                        </Link>
                    </button>
                    <button type="button" class="px-10 py-3 bg-[#bfaa8f] mt-8 rounded-sm">
                        <Link class='no-underline font-[europa] text-white font-semibold text-lg' href='https://github.com/smith-carlicia/fitness-tracker'>
                            Repo
                        </Link>
                    </button>
                </div>

                <div class='col-1' />
                <div class='col-3'>
                    <div class='shadow-xl bg-[#2B2B2B] shadow-slate-950/50 mt-1 round-lg'>
                        <div>
                            <ul class='text-white pb-2'>
                                <h3 class='flex items-center font-[kepler] text-white font-semibold text-lg tracking-wider mt-4 mr-8'>Technologies</h3>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiHtml5 class='text-[#bfaa8f] text-xl mr-2' />HTML</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiCss3 class='text-[#bfaa8f] text-xl mr-2' />CSS</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiBootstrap class='text-[#bfaa8f] text-xl mr-2' />Bootstrap</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiJavascript class='text-[#bfaa8f] text-xl mr-2' />JavaScript</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiNodedotjs class='text-[#bfaa8f] text-xl mr-2' />Node.js</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiExpress class='text-[#bfaa8f] text-xl mr-2' />Express.js</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiMongodb class='text-[#bfaa8f] text-xl mr-2' />MongoDb</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiHeroku class='text-[#bfaa8f] text-xl mr-2' />Heroku</p>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class='col-1' />
            </div>
        </div>
    )
}

export default Fitness;