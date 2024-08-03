import React from 'react'
import WhiteBlock from './WhiteBlock'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import FormField from './FormField'

const formFields = [
    {
        label:'Name',
        placeholder:'Your Name',
        type:'text',
        id:'name',
        name:'name'
    },
    {
        label:'Email',
        placeholder:'Your Email',
        type:'email',
        id:'email',
        name:'email'
    }
]

const ConnectSection = () => {
  return (
    <section id='connect' className='px-5 md:px-40 pt-20 lg:pt-40 w-full min-h-screen'>
        <WhiteBlock
        elements={
            <div className='flex felx-row justify-center lg:gap-0 gap-5 lg:justify-between w-full items-center'>
                <h1 className='text-2xl lg:text-8xl'>Let's Connect</h1>
                <Image src='/images/04 get in touch.png' height={1000} width={1000} className='w-20 h-20 lg:w-52 lg:h-52'/>
            </div>
        }
        css='h-fit px-5 lg:px-10 py-5 lg:py-5 w-full'
        />
        <div className='flex flex-row mt-10 px-1 lg:px-5'>
            <WhiteBlock 
            elements={
                <Image src='/images/in.png' height={500} width={500} className='w-7 h-7 lg:w-10 lg:h-10'/>
            }
            css='flex justify-center items-center p-2 lg:p-8 rounded-xl lg:rounded-3xl'
            link={'https://www.linkedin.com/in/prashant-parmar-0124b417a/'}
            />
            <WhiteBlock 
            elements={
                <Image src='/images/Be.png' height={500} width={500} className='w-7 h-7 lg:w-10 lg:h-10'/>
            }
            css='flex justify-center items-center p-2 lg:p-8 rounded-xl lg:rounded-3xl'
            link={'https://www.behance.net/prashantparmar1/projects'}
            />
            <WhiteBlock 
            elements={
                <Image src='/images/insta01.png' height={500} width={500} className='w-8 h-8 lg:w-10 lg:h-10'/>
            }
            css='flex justify-center items-center p-2 lg:p-8 rounded-xl lg:rounded-3xl'
            link={'https://www.instagram.com/prashant.pyro/'}
            />
            <WhiteBlock 
            elements={
                <Image src='/images/skype.png' height={500} width={500} className='w-7 h-7 lg:w-10 lg:h-10'/>
            }
            css='flex justify-center items-center p-2 lg:p-8 rounded-xl lg:rounded-3xl'
            link={'https://join.skype.com/invite/vc4shWcPZe2E'}
            />
            <WhiteBlock 
            elements={
                <span className='text-[12px] lg:text-lg text-center'><ArrowDownTrayIcon className='w-5 inline mr-2'/>Resume</span>
            }
            css='p-2 lg:py-8 lg:px-5 bg-opacity-50 hover:bg-opacity-55 flex justify-center items-center rounded-xl lg:rounded-3xl bg-green-400 '
            link={'https://drive.google.com/file/d/1atcaonbBUMEHqTfrgL-l30N3MbCwcJFv/view?usp=drive_link'}
            />
        </div>
        <div className='mt-10'>
        <WhiteBlock
        elements={
            <div className='flex flex-col lg:flex-row justify-between w-full'>
                <form className='min-w-[50%]'>
                    {
                        formFields.map((field,index)=>{
                            return <div key={index}><FormField label={field.label} type={field.type} name={field.name} id={field.id} placeholder={field.placeholder} /></div>
                        })
                    }
                    <div className='flex my-3 justify-between'><label className=' px-4 text-right min-w-[30%]'>Query</label><textarea name='query' id='query' className='p-2 rounded-xl text-sm min-w-[70%] h-50 text-black'  placeholder='Write your query' rows={3} /></div>
                    <input type='submit' value='Submit' className='my-1 w-full lg:w-[70%] bg-blue-600 p-2  rounded-xl float-right'/>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68688988224!2d70.73889404991546!3d22.273625028484194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721116663187!5m2!1sen!2sin" className='w-full lg:w-[40%] rounded-xl mt-2' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
            </div>
        }
        css='w-full p-5 lg:px-20 py-10'
        />
        </div>
    </section>
  )
}

export default ConnectSection