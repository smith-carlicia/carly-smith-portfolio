import Link from "next/link";


const Contact = () => {



    return (
        <div id='contact' class='bg-[#2B2B2B]'>
            <div class='row'>
                <div class='flex w-full h-screen justify-center items-center'>
                    <div class='col-3' />
                    <div class='col-6'>
                        <h1 class='mt-2 flex justify-center text-white'>Let's Get in Touch!</h1>
                        <p class='font-semibold tracking-wider text-white text-lg mt-8'>Get In Touch
                            I’m currently looking for Fullstack, Front-End and Back-End opportunities, my inbox is always open. I’ll get back to you as soon as possible!</p>
                        <div>
                            <Link href='mailto:smith.carlicia@gmail.com' class='bg-[#bfaa8f] text-white rounded-md px-4 py-3 mt-6 flex justify-center no-underline'>
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