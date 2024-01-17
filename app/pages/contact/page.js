import Link from "next/link";


const Contact = () => {



    return (
        <div id='contact' class='bg-[#2B2B2B]'>
            <div class='row'>
                <div class='flex w-full h-screen justify-center items-center'>
                    <div class='col-3' />
                    <div class='col-6'>
                        <h1 class='flex justify-center font-[kepler] text-white mt-2'>Let's Get in Touch!</h1>
                        <p class='font-[europa] text-white text-lg tracking-wider mt-8'>Get In Touch
                            I’m currently looking for Fullstack, Front-End and Back-End opportunities, my inbox is always open. I’ll get back to you as soon as possible!</p>
                        <div>
                            <Link href='mailto:smith.carlicia@gmail.com' class='flex justify-center items-center bg-[#bfaa8f] no-underline font-[europa] text-white font-semibold text-lg rounded-md px-4 py-3 mt-10'>
                                <button>Contact</button>
                            </Link>
                        </div>
                    </div>
                    <div class='col-3' />
                </div>
            </div>
        </div>

    );
}

export default Contact;