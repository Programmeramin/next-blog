import Link from 'next/link'
import Image from 'next/image'

const BlogItem = ({item}) => {
  return (
    <>
      
      
        <div className="blog-item bg-white shadow p-4 rounded-lg my-3 flex justify-start gap-4">

           <Image width={300} height={300} src={item.photo} alt="Prothom alo " className='object-cover'/> 

           <div className="blog-content">
              <h2 className="font-bold mb-4 text-2xl">{item.title}</h2>
              <p className='line-clamp-3 '>{item.desc}</p>

           <Link className="p-3 w-[150px] bg-purple-600 rounded-lg mt-3 text-white block" href={`/blog/${item.id}`}>Read more...</Link>
  
           </div>    

        </div>
      

    </>
  )
}

export default BlogItem
