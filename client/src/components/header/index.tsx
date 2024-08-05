import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Header() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/dashboard');
  };

  return (
    <header className="relative flex flex-col items-center h-full w-full max-md:pl-5 max-md:max-w-full">
      <div className="flex w-full justify-between items-start text-white max-md:flex-wrap max-md:max-w-full">
        <Image className="m-5 w-40 h-14" alt="Wtm" src="/images/WTM.svg" width={100} height={70} quality={95} />
        <button onClick={handleStart} className="m-5 px-9 py-3.5 text-3xl font-bold bg-black rounded-[37.5px] max-md:px-5">
          Log in
        </button>
      </div>
      <div className="flex flex-col items-center mt-[300px] gap-[200px]"> {/* Adjust the margin to place the button and slogan correctly */}
        <Link href="/dashboard" className="px-14 py-4 text-3xl font-bold text-black bg-white rounded-3xl max-md:px-5 max-md:mt-10">
          Get Started
        </Link>
        <h1 className="mt-10 text-6xl text-center text-white max-md:mt-30 max-md:max-w-full max-md:text-4xl">
          Because Every Day <br />
          <span className="font-bold text-amber-400"> Needs A Move. </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
