import Link from 'next/link';
import Image from "next/image";

const ProjectCard = ({ title, img, proUrl, description, info }) => {
    return (
        <div class="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-sm group hover:bg-[#bfaa8f] mb-4">
            <div class="hover:mix-blend-overlay">
                <Image src={img} class="mt-3 rounded-sm group-hover:opacity-10" alt={info}/>
                <div class=" place-self-auto hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-4">
                    <h3 class='font-[kepler] text-white text-center'>{title}</h3>
                    <p class="font-[europa] text-white items-center justify-center tracking-widest">{description}</p>
                    <div class='flex items-center justify-center'>
                        <button type="button" class="px-5 py-3 bg-[#2B2B2B] rounded-sm shadow-xl shadow-neutral-700"><Link class='no-underline  font-[europa] text-white font-semibold text-lg tracking-wider' href={proUrl}>More Info</Link></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;