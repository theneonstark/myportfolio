import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-Pin'
import { FaLocationArrow } from 'react-icons/fa'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div className='py-20 ' id ="projects">
      <h1 className='heading'>  
        A small selection of {''}
        <span className='text-purple'>Recent Projects</span>
      </h1>
      <div className = "flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        
        {projects.map(({id, title, des, img, iconLists, link})=>(
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
        >
          {des}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <div className='flex items-center'>
                    {iconLists.map((icon,index)=>(
                      <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform:`translateX(-${5 * index * 2}px)`}}>
                          <img src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}
                  </div>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="flex align-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link href={link}>Check Live
            <FaLocationArrow className='ms-3' color='#CBACF9'/>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
