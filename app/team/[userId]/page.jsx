import getSingleDevs from "@/app/libs/getSingleDevs";
import Link from "next/link";
import Image from "next/image";
import team from "@/public/team.png"

const page = async ({params}) => {

    const {name, skill, photo} = await getSingleDevs(params.userId)

  return ( 
    <>
     
     <div className="bg-green-800 p-10 flex gap-3">
       <div className="text-center my-10 text-white text-2xl">
       <Image src={team} alt="" />
        <h1>{name}</h1>
        <p>{skill}</p>
        <Link className="bg-purple-700 p-3 block rounded-full" href="/team">Back</Link>
       </div>
     </div>

    </>
  )
}

export default page
