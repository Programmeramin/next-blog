import Link from 'next/link';
import Image from 'next/image';
import React, { Suspense } from 'react'
import getAllDevsData from '../libs/devsData';
import TeamItem from '@/components/TeamItems/TeamItem';

const page = async() => {

    const devs = await getAllDevsData();
 

  return (
    <>
          <div className="bg-green-500 text-white text-2xl p-5 m-auto text-center ">
          
          <div className="team flex gap-3 shadow w-[1100px] justify-center m-auto flex-wrap">
            
     
           {devs.map((item) =>{
            return (
                 <Suspense key={item.id} fallback={<h1>Loading ......</h1>}>
                  <TeamItem item={item }/>
                 </Suspense>
            ) 
           })}

          </div>
    </div>
    </>
  )
}

export default page
