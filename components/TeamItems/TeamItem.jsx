import Image from "next/image"
import Link from "next/link"

const TeamItem = ({item}) => {
  return (
    <>
      
      <div className="w-[200px]">

        <Image className=" object-cover rounded-3xl" src={item.photo} width={200} height={150} alt="photo"/>
 
    <h1>{item.name}</h1>
    <p>{item.skill}</p>

       <Link href={`/team/${item.id}`} className="bg-purple-600 rounded p-2 m-2 text-black block">Read more...</Link>
    

      </div> 

    </>
  )
}

export default TeamItem
