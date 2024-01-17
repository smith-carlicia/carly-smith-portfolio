'use client';
import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiGithub, SiSass, SiTailwindcss, SiChakraui, SiNodedotjs, SiExpress, SiSpring, SiSpringboot, SiMongodb, SiMysql, SiHeroku, SiRabbitmq, SiApachekafka, SiReact, SiNextdotjs, SiGit, SiGooglecloud } from "react-icons/si";
import { DiMaterializecss, DiJava } from "react-icons/di";

const About = () => {

    return (
        <div className='bg-[#EEEDEB]' id='about'>
            <div class='row'>
                <div class='flex justify-center items-center'>
                    <div class='col-3' />
                    <div class='col-6'>
                        <h2 class='text-4xl font-bold font-sans text-[#2B2B2B] mt-8 mb-4'>About Me</h2>
                        <div class='border-black rounded-sm'>
                            <p className='font-sans text-xl tracking-wide text-[#2B2B2B]'>
                                Hi, it's nice to e-meet you! 👋🏽 My name is Carlicia but people call me Carly for short. I'm a Full Stack Web Developer based in Atlanta, GA. Within my experiences as a sales and marketing intern and tech consultant, I've been able to leverage my skills to go above and beyond in effectively collaborating to create the perfect user friendly web applications, softwares and technical documentations. A quick learner, I'm well organized and calm under pressure looking to offer my skills to an innovative team. In my spare time, I love to try new recipes, workout out 💪🏽, go on mini adventures with my daughter and travel through North GA(specifically the mountains).
                            </p>
                        </div>
                    </div>
                    <div class='col-3' />
                </div>
            </div>

            <div class='row'>
                <div class='col-3' />
                <div class='col-6'>
                    <h2 class='text-[#2B2B2B] font-sans mt-10'>SKILLS</h2>
                    <h4 class='text-[#2B2B2B] font-sans mt-8'>KEY SKILLS</h4>
                    <div class='flex items-start justify-start space-x-4'>
                        <p class='text-white font-sans bg-[#2B2B2B] shadow-md shadow-gray-400 outline outline-[#545454] rounded-sm mt-3 p-1'>
                            Full Stack Development
                        </p>
                        <p class='text-white font-sans bg-[#2B2B2B] shadow-md shadow-gray-400  outline outline-[#545454] rounded-sm mt-3 p-1'>
                            Front-end
                        </p>
                        <p class='text-white font-sans bg-[#2B2B2B] shadow-md shadow-gray-400  outline outline-[#2B2B2B]  rounded-sm mt-3 p-1'>
                            Back-end
                        </p>
                        <p class='text-white bg-[#2B2B2B] font-sans shadow-md shadow-gray-400 outline outline-[#2B2B2B]  rounded-sm mt-3 p-1'>
                            Programming
                        </p>
                        <p class='text-white bg-[#2B2B2B] font-sans shadow-md shadow-gray-400 outline outline-[#2B2B2B]  rounded-sm mt-3 p-1'>
                            User Experience
                        </p>
                    </div>
                </div>
                <div class='col-3' />
            </div>

            <div class='row'>
                <div class='col-3' />
                <div class='col-6'>
                    <h4 class='text-[#bfaa8f] font-sans mt-8'>TECHNICAL SKILLS</h4>
                    <div class='row'>
                        <h5 class='text-[#2B2B2B] font-sans underline decoration-[#bfaa8f] mt-2'>Programming Languages:</h5>
                        <p class='flex items-start justify-start space-x-4 text-[#bfaa8f] font-sans text-xl mt-1'>
                            <SiHtml5 /> <SiCss3 /> <SiSass /> <SiJavascript /> <DiJava />
                        </p>
                    </div>
                    <div class='row'>
                        <h5 class='text-[#2B2B2B] font-sans underline decoration-[#bfaa8f] mt-3'>Libraries and Frameworks:</h5>
                        <p class='flex items-start justify-start space-x-4 text-[#bfaa8f] text-xl font-sans mt-1'>
                            <SiTailwindcss /> <SiBootstrap /> <SiChakraui /> <SiJquery /> <SiNodedotjs /> <SiNextdotjs /> <SiReact /> <SiExpress /> <SiSpring /> <SiSpringboot />
                        </p>
                    </div>
                    <div class='row'>
                        <h5 class='text-[#2B2B2B] font-sans underline decoration-[#bfaa8f] mt-3'>Databases:</h5>
                        <p class='flex items-start justify-start space-x-4 text-[#bfaa8f] text-xl font-sans mt-1'>
                            <SiMysql /> <SiMongodb />
                        </p>
                    </div>
                    <div class='row'>
                        <h5 class='text-[#2B2B2B] font-sans underline decoration-[#bfaa8f]'>Tools and Platforms:</h5>
                        <p class='flex items-start justify-start space-x-4 text-[#bfaa8f] text-xl font-sans mt-1 mb-16'>
                            <SiGit /> <SiGithub /> <SiGooglecloud /> <SiRabbitmq /> <SiApachekafka />
                        </p>
                    </div>
                </div>
                <div class='col-3' />
            </div>
        </div>
    );
}

export default About;