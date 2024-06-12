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
      <div className="font-Raleway flex justify-center items-center min-h-screen">
        <div className="ml-12 flex items-center">
          <Image src={wave} alt="Wave" width={200} height={200} />
          <h1 className="text-7xl">Hi I'm <span className="font-extrabold">prashant</span></h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={handleArrowClick} className="bg-[#D9D9D9] px-8 py-2 rounded-2xl">
          <Image src={downArrow} alt="down arrow" />
        </button>
      </div>
    </>
  );
}
