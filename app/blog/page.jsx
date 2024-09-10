import BlogItem from "@/components/BlogItem"
import Skeleton from "@/components/Skeleton"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { blogs } from "@/fake/data"

 
const page = async() => {

  const post = blogs 
 
  return (
    <>
      
     <div className="team-area bg-slate-100">
     <div className="team-box text-center">
              <h1 className="font-bold text-2xl mt-2 p-1">Our Blog</h1>
              <p className="font-bold text-2xl py-3">Only here Blog</p>
          </div>
   

         <div className="blog-box w-[700px] m-auto">
          {post.map((item) =>{
            return (
              <Suspense key={item.id} fallback={ <Skeleton/>}>
              <BlogItem item={item}/>
             
           </Suspense>
            )
          })}
         </div>

        
         
     </div>


    </>
  )
}

export default page
