'use client';
import Link from 'next/link';
import Image from 'next/image';
import { SiHandlebarsdotjs, SiMysql, SiHeroku, SiNodedotjs, SiJavascript, SiExpress } from "react-icons/si";
import Eat from '../../../../public/assets/eat-da-burger.png';
const Burger = () => {
    return (
        <div class='w-full h-screen bg-[#2B2B2B]' id='burger'>
            <div class='w-screen h-[30vh] lg:h[40vh] relative'>
                <div class='absolute top-0 left-0 w-full h-[30vh] lg:h[40vh] bg-[#bfaa8f]/80 z-10' />
                <Image
                    class="absolute z-1"
                    layout='fill'
                    objectFit='cover'
                    src={Eat}
                />
                <div class='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h1 class='font-[kepler] font-bold py-2'>Eat Da Burger!</h1>
                    <h3 class='flex justify-normal space-x-6 font-[europa] text-semibold text-xl tracking-wider'>Handlebar.js // Node.js // MySQL</h3>
                </div>
            </div>

            <div class='max-w-[1240px] mx-auto p-2 gap-8 pt-8 mt-8 row'>
                <div class='col-7'>
                    <h3 class='font-[kepler] text-[#bfaa8f] font-light tracking-wider'>Project</h3>
                    <h2 class='font-[kepler] text-white font-medium tracking-wider'>Overview</h2>
                    <p class='font-[europa] text-white text-xl tracking-wide  mt-6'>
                        This codebase is architectured to as a burger logger to take in the users input of their desired burger and to log it into the provided database in the backend of the application. On the client side, this application lets users input the names of burgers they'd like to eat. When a user submits the name of their desired burger, the application will display the burger on the left side of the page waiting to be devoured. The burgers will be in a waiting area on the let side of the application waiting to be devoured with a Devour It! button. When the Devour It! button is pressed, the consumed burger will appear on the right side of the screen. The burger logger is primarily constructed via Handlebars, Express, Node and MySQL. Node and MySQL queries routes the data from the user input into the application while Handlebars generates the client side, specifically views of the application. The burger logger is deployed via Heroku to host as server and database for this application.
                    </p>
                    <button type="button" class='px-10 py-3 bg-[#bfaa8f] mr-10 mt-8 rounded-sm'>
                        <Link class='no-underline font-[europa] text-white font-semibold text-lg' href='https://floating-meadow-92330.herokuapp.com/burgers'>
                            Demo
                        </Link>
                    </button>
                    <button type="button" class="px-10 py-3 bg-[#bfaa8f] mt-8 rounded-sm">
                        <Link class='no-underline font-[europa] text-white font-semibold text-lg' href='https://github.com/smith-carlicia/burger'>
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
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiJavascript class='text-[#bfaa8f] text-xl mr-2' />JavaScript</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiHandlebarsdotjs class='text-[#bfaa8f] text-xl mr-2' />Handlebar.js</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiNodedotjs class='text-[#bfaa8f] text-xl mr-2' />Node.js</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiExpress class='text-[#bfaa8f] text-xl mr-2' />Express.js</p>
                                <p class='flex items-center font-[europa] text-white tracking-wider'><SiMysql class='text-[#bfaa8f] text-xl mr-2' />MySQL</p>
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

export default Burger;