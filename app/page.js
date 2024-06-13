'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import wave from '@/assets/wave.png';
import downArrow from '@/assets/downArrow.svg';
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const router = useRouter();

  const handleArrowClick = () => {
    router.push('/my-work');
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={`font-Raleway flex justify-center items-center min-h-screen bg-cover no-repeat bg-[url('../assets/bg.png')]`}
      >
        {/* Wrap the content in a new div */}
        <div className="flex flex-col items-center text-white">
          <div className="items-center flex items-center">
            <Image src={wave} alt="Wave" width={200} height={200} />
            <h1 className="text-9xl">Hi I'm <span className="font-extrabold ">prashant</span></h1>
          </div>
          <div className="text-3xl">UIUX/Graphics Designer</div>
        </div>
        {/* Rest of the content remains the same */}
        <div className="flex items-center justify-center">
          {/* <button onClick={handleArrowClick} className="bg-[#D9D9D9] px-8 py-2 rounded-2xl">
            <Image src={downArrow} alt="down arrow" />
          </button> */}
        </div>
      </div>
    </>
  );
}
