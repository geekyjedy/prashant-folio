import React from 'react'
import Image from 'next/image'
import WhiteBlock from './WhiteBlock'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className='pt-24 p-5 lg:px-40 lg:py-20 min-h-screen flex flex-col lg:flex-row gap-5' id='about'>
        {/* Flex container to ensure both sides have equal height */}
        <div className='flex flex-1 gap-5'>
            <WhiteBlock
                elements={
                    <Image 
                        src='/images/person.png' 
                        width={1000} 
                        height={1000} 
                        alt='My Image' 
                        className='object-cover w-full h-full'
                    />
                }
                css='w-[35%] h-full'
            />

            <div className='flex flex-col flex-1 gap-5'>
                <WhiteBlock 
                    elements={
                        <div className='flex justify-between items-center gap-5'>
                            <div>
                                <h1 className='text-3xl sm:text-4xl lg:mb-4 lg:text-8xl'>About Me</h1>
                                <span className='text-sm lg:text-4xl mt-5'>UIUX/Graphics Designer</span>
                            </div>
                            <Image src='/images/03 shaka.png' width={10} height={10} className='scale-x-[-1] w-20 h-20 lg:w-40 lg:h-40'/>
                        </div>
                    }
                    css='p-5 lg:px-5 lg:py-5 w-full'
                />
                <WhiteBlock 
                    elements={
                        <p className='text-sm lg:text-xl'>Hi, My name is Prashant. I am a passionate designer filled with creative juices and a designer bookworm. Master of graphics and intern of UIUX.</p>
                    }
                    css='px-5 lg:px-8 pb-10 lg:pb-20 pt-4'
                />
                <div className='flex flex-col lg:flex-row justify-between gap-5 max-w-fit'>
                    <WhiteBlock 
                        elements={
                            <div className='flex flex-wrap gap-5 items-center'>
                                <div className='w-10 h-10 md:w-16 md:h-16 overflow-hidden rounded-xl bg-white flex items-center justify-center'>
                                    <Image src='/images/AI.png' height={1000} width={1000} className='scale-[2.5] md:scale-[2.2]' />
                                </div>
                                <div className='w-10 h-10 md:w-16 md:h-16 overflow-hidden rounded-xl bg-white flex items-center justify-center'>
                                    <Image src='/images/PS.png' height={1000} width={1000} className='scale-[2.5] md:scale-[2.2]' />
                                </div>
                                <div className='w-10 h-10 md:w-16 md:h-16 overflow-hidden rounded-xl bg-white flex items-center justify-center'>
                                    <Image src='/images/figma.png' height={1000} width={1000} className='w-full' />
                                </div>
                                <div className='w-10 h-10 md:w-16 md:h-16 overflow-hidden rounded-xl bg-white flex items-center justify-center'>
                                    <Image src='/images/PC.png' height={1000} width={1000} className='scale-[2.5] md:scale-[2.2]' />
                                </div>
                            </div>
                        }
                        css='p-8 w-full'
                    />
                    <WhiteBlock 
                        elements={
                            <Link href='/' className='text-xs lg:text-xs underline'>Know more</Link>
                        }
                        css=' rounded-2xl lg:px-12 lg:py-10'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
