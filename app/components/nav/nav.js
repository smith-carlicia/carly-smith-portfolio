import Link from 'next/link';


const Nav = () => {

  return (
      <nav className='bg-[#2B2B2B] pt-3'>
        <div className="list-none flex flex-row justify-content-start font-[europa] shadow-xl shadow-slate-950/50 z-[100] space-x-4">
          <ul>
            <li>
              <Link href="/" className=' italic font-semibold tracking-wide text-xl no-underline text-white ml-1 scroll={false}'>Carlicia Smith</Link>
            </li>
          </ul>
          <ul>
            <li className='inline'>
              <Link href="/pages/about" class='no-underline text-white scroll={false} hover:underline hover:text-solid hover:decoration-[#bfaa8f] hover:decoration-4'>About Me</Link>
            </li>
          </ul>
          <ul>
            <li className='inline'>
              <Link href="/pages/resume"class='no-underline text-white scroll={false} hover:underline hover:text-solid hover:decoration-[#bfaa8f] hover:decoration-4'>Experience</Link>
            </li>
          </ul>
          <ul>
            <li className='inline'>
              <Link href="/pages/portfolio" class='no-underline text-white scroll={false} hover:underline hover:text-solid hover:decoration-[#bfaa8f] hover:decoration-4'>Portfolio</Link>
            </li>
          </ul>
          <ul>
            <li className='inline'>
              <Link href="/pages/contact" class='no-underline text-white scroll={false} hover:underline hover:text-solid hover:decoration-[#bfaa8f] hover:decoration-4'>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav> 
  );
}

export default Nav;