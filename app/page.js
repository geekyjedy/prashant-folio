import Image from "next/image";
import wave from '@/assets/wave.png';

export default function Home() {
  return (
    <div className="font-Raleway flex justify-center items-center min-h-screen">
      <div className="absolute top-0 left-0 flex justify-center">
        
      </div>
      <div className="ml-12 flex items-center">
      <Image src={wave} alt="Wave" width={200} height={200} />
        <h1 className="text-7xl">Hi I'm <span className="font-extrabold">prashant</span></h1>
      </div>
    </div>
  );
}
