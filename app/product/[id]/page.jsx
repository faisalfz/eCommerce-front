'use client'
import Image from "next/image"
import { usePathname } from 'next/navigation';

const SingleProduct = () => {
  const pathname = usePathname();
  console.log('Path name: ', pathname)
  return (
    <>
      <div className='flex gap-10 justify-center items-center my-20 w-full '>
        <div className='w-1/5 bg-white p-4 rounded-md shadow-md'>
          {/* <Image src={}/> */}
        </div>
        <div className='w-3/5 bg-white p-4 rounded-md shadow-md'>Product Detail</div>
        
      </div>
    </>
  )
}

export default SingleProduct