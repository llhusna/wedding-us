import React, {useState} from 'react'
import { images } from '../constant'
import toast from 'react-hot-toast';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { guestInfoSchema } from '../schema/guestInfo'
import axios from 'axios'

type HomeProps = {
  name: string
  pax: string
} 
export const Home = () => {
  const { 
    register,
    handleSubmit,
    formState : { errors, isSubmitting }, 
    }  = useForm<HomeProps>({
    defaultValues :{
      name: '',
      pax: '',
    },
    resolver: zodResolver(guestInfoSchema)
  })
  const [openModalGift, setOpenModalGift] = useState(false)
  const [openModalPax, setOpenModalPax] = useState(false)

    // Copy the token
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText('551025210571');
        toast.success("Copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };

  /* const onHandleChanged = (evt) => {
    const value = evt.target.value;
    setName({
      ...name,
      [evt.target.name]: value,
    });
  };


const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Name submitted:', name);
} */

const onSubmit: SubmitHandler<HomeProps> = (data) => {
  axios.get('http://localhost:3000/users')
    .then((response) => {
      // Find the user with matching username and password
      const user = response.data.find((user: any) => user.username === data.name && user.pax === data.pax);
      
      if (user) {
        // Authentication successful, redirect to the profile page
        toast.success("Submitted");
        console.error("success");
      } else {
        // Authentication failed, handle the error
        toast.error('Invalid credentials')
        console.error('Invalid credentials');
        // You can display an error message or perform any other action
      }
    })
    .catch((error) => {
      // Handle any error that occurs during the request
      console.error(error);
    });
};

  return (
    <div className='h-full w-full'>
      <div className='flex justify-between items-center relative z-10 lg:-translate-y-20 '>
          <img src={images.flowerleft} alt="flower" className="translate-y-14 w-28 md:w-60 lg:w-[32%]"/>
          <div className='text-center flex flex-col'>
            <span className='text-sm md:text-2xl lg:text-4xl min-[1920px]:text-5xl '>You're invited to the</span>
            <span className='text-xs md:text-2xl lg:text-3xl min-[1920px]:text-4xl border-y-[0.5px] lg:border-y-[1px] border-[#D0CDBC] py-1 lg:py-2  mt-2 lg:mt-4'>Reception of</span>
          </div>
          <img src={images.flowerright} className="w-28 w-28 md:w-60 lg:w-[32%]" alt="flower" />
      </div>

      <img src={images.hero} className="w-full -translate-y-4 md:scale-90 grayscale z-0 lg:-translate-y-60" alt="hero" />

      <div className='w-full items-center mt-6 w-full lg:-translate-y-40 md:translate-x-4'>
        <div className='flex text-md md:text-2xl lg:text-4xl min-[1920px]:text-5xl justify-center gap-x-6 lg:gap-x-10 items-center'>
          <div><span className='border-y-[0.5px] lg:border-y-[2px] border-[#D0CDBC] py-1 mt-2 px-6'>SUNDAY</span></div>
          <div className='text-center flex flex-col col-span-2 lg:gap-y-4'>
            <span className=''>JULY</span>
            <span className='text-[#9B9383] font-bold text-xl lg:text-5xl min-[1920px]:text-6xl'>30</span>
            <span>2023</span>
          </div>
          <div><span className='border-y-[0.5px] lg:border-y-[2px] border-[#D0CDBC] py-1 px-4 mt-2'>12PM - 3PM</span></div>
          </div>
      </div>

    <div className='lg:-translate-y-10'>
      <div className='text-center mt-10 md:mb-4 text-[16px] md:text-xl lg:text-4xl min-[1920px]:text-4xl mx-10 lg:mx-60 text-[#9B9383] font-semibold'>
          Venue :
      </div>

      <div className='text-center text-[14px] md:text-xl lg:text-3xl min-[1920px]:text-4xl mx-10 lg:mx-60 '>
          <a href="https://waze.com/ul/hw280yv71q" target="_blank" rel="noreferrer" className='text-black hover:text-[#9B9383]'>
            Lot 3905 Jalan Lombong Perak 2, Kg Lombong Seksyen 29,<br/> 40460 Shah Alam Selangor<br/>
          </a>
          <span className='text-[10px] md:text-lg'>(Click the address to waze the location)</span>
      </div>
    </div>

      <div className='relative flex justify-center mt-8 lg:mt-20 '>
      <img src={images.vector} alt="flower"  className='lg:w-16'/>
      </div>

      <div className='text-center mt-6 lg:mt-20 text-[14px] mx-6 md:text-xl lg:text-3xl min-[1920px]:text-4xl lg:mx-60'>
        "As we begin our new life together,<br/>
        we want you to be a part of our journey.”
      </div>
{/* 
    <div className='mx-4 md:mx-20 lg:mx-60 min-[1920px]:mx-96 my-8 flex flex-col gap-y-4'>
    <div>
      <div
         className="
         bg-[#C0934F]
         hover:bg-opacity-50
         rounded-full
         text-center
         text-white
         text-md
         md:text-xl
         min-[1920px]:text-3xl
         p-3
         lg:p-5
         min-[1920px]:p-6
         relative
         cursor-pointer
         z-10"
         onClick={() => setOpenModalPax(!openModalPax)}
       >
        GOING
      </div>
      {openModalPax?
       <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-try1 z-0'>
          <div className='md:px-4'>
          <label className='text-sm'>
            Name
            <input
                type="text"
                id="name"
                placeholder='Insert name'
                className="
                      bg-white 
                      border-[0.5px]
                      w-full 
                      rounded-sm  
                      md:rounded-md 
                      text-black
                      max-sm:px-2 
                      px-4 
                      py-1 
                      md:py-1 
                      lg:py-3
                      mt-1
                      text-[14px] 
                      min-[1920px]:text-xl "
                disabled = {isSubmitting}
                {...register('name')}
              />
              {errors.name?.message && <div className='text-red-600'>{errors.name?.message}</div>}
          </label>
          </div>
          <div className='mt-4 md:px-4'>
          <label className='text-sm'>
            Pax
            <input
                type="text"
                id="pax"
                placeholder='Ex : 1'
                className="
                      bg-white 
                      border-[0.5px]
                      w-full 
                      rounded-sm  
                      md:rounded-md 
                      text-black
                      max-sm:px-2 
                      px-4 
                      py-1 
                      md:py-1 
                      lg:py-3
                      text-[14px] 
                      min-[1920px]:text-xl "
                      disabled = {isSubmitting}
                      {...register('pax')}
            />
            {errors.pax?.message && <div className='text-red-600'>{errors.pax?.message}</div>}
          </label>
          </div>
          <div className='flex justify-center my-6'>
            <button  type="submit" className='text-center bg-[#847256] lg:font-bold px-10 py-2 rounded-xl' >
              <span className='copy'>Submit</span>
            </button>
        </div>
        </div>
      </form>
      :
      <></>
      }
    </div>
    
    <div>
      <div
         className="
         hover:bg-opacity-50
         border-[1px]
         border-[#C0934F]
         rounded-full
         text-center
         text-md
         md:text-xl
         min-[1920px]:text-3xl
         p-3
         lg:p-5
         min-[1920px]:p-6
         relative
         cursor-pointer
         z-10"
         onClick={() => setOpenModalGift(!openModalGift)}
       >
        SEND GIFT 
      </div>
      {openModalGift ?
      <>
      <div className='bg-try2 z-0'>
      <div className='text-center py-2 lg:text-lg'>
        551025210571<br/>
        Maybank
      </div>

      <div className='flex justify-center my-2'>
      <button className='text-center bg-[#847256] lg:font-bold px-10 py-2 rounded-xl' onClick={copyToClipboard}>
        <span className='copy'>copy</span>
      </button>
      </div>
      </div>
      </>
      :
      <></>
    }
    </div>
</div> */}

      <div className=' flex justify-center mt-4 lg:pt-20'>
        <img src={images.itinerary} alt="flower" className='w-full h-full'/>
      </div>

      <div className='px-10 md:px-40 lg:px-60 min-[1920px]:px-96 text-center text-[14px] md:text-xl lg:text-3xl min-[1920px]:text-4xl lg:mt-20 py-10 '>
      "Today, we embark on a journey of love and togetherness, seeking the mercy and blessings of Allah. May our union be filled with happiness, peace, and everlasting commitment."
      </div>

      <div className='relative flex justify-center'>
        <img src={images.flowerbottom} alt="flower" className='lg:w-60' />
      </div>

    </div>
  )
}
