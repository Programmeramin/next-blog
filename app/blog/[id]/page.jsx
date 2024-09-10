import getSinglePost from "@/app/libs/getSinglePost";
import { blogs } from "@/fake/data";
import Image from "next/image";

const page = async({params}) => {

    const {id} = params;

    const data = blogs.find((item) => item.id === id);

 
  return (
    <>
    
      <div className="single-blog w-[100px] mx-auto shadow bg-white rounded">
          <Image src={data?.photo} width={300} height={300} alt="Prothom alo"/>

            <h1>{data?.title}</h1>
            <p>{data?.desc}</p>
  
        </div> 

    </>
  )
}

export default page
