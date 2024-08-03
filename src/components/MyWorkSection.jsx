'use client'
import React,{useState} from 'react'
import CategoryButton from './CategoryButton'
import WorkCard from './WorkCard'

const categories = [
    {
        name:'All'
    },
    {
        name:'UIUX'
    },
    {
        name:'Graphics'
    }
]
const workList =[
    {
        id:1,
        path:'/images/about.png',
        projectName:'Project Name',
        category:'Graphics',
        tag:['All','Graphics']
    },
    {
        id:2,
        path:'/images/about.png',
        projectName:'Project Name',
        category:'UIUX',
        tag:['All','UIUX']
    },
    {
        id:3,
        path:'/images/about.png',
        projectName:'Project Name',
        category:'UIUX',
        tag:['All','UIUX']
    },
    {
        id:4,
        path:'/images/about.png',
        projectName:'Project Name',
        category:'UIUX',
        tag:['All','UIUX']
    },
    {
        id:5,
        path:'/images/about.png',
        projectName:'Project Name',
        category:'Graphics',
        tag:['All','Graphics']
    },
    {
        id:6,
        path:'/images/about.png',
        projectName:'Project Name',
        category:'Graphics',
        tag:['All','Graphics']
    },
    {
        id:7,
        path:'/images/about.png',
        projectName:'Project Name',
        category:'UIUX',
        tag:['All','UIUX']
    },
    {
        id:8,
        path:'/images/about.png',
        projectName:'Project Name',
        category:'UIUX',
        tag:['All','UIUX']  
    },
]
const MyWorkSection = () => {
    const [tag,setTag] = useState('All');
  return (
    <section className='w-full min-h-screen opacity-90 pt-24' id='work'>
        <div className='w-auto sm:w-fit px-5 mx-auto py-1 bg-gray-500 rounded-full flex flex-row justify-around items-center divide-x'>
            {
                categories.map((category,index)=>{
                    return <span key={index} className='w-full'><CategoryButton onClick={()=>setTag(category.name)} name={category.name} isSelected={tag === category.name}/></span>
                })
            }
        </div>
        <div className='w-full sm:py-10 sm:px-44 p-5'>
            {
                workList.map((work,index)=>{
                    return <div key={index} className={`${work.tag.includes(tag)?'inline':'hidden'}`}><WorkCard path={work.path} projectName={work.projectName} category={work.category} /></div>
                })
            }
        </div>
    </section>
  )
}

export default MyWorkSection