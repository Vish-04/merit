'use client';

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Bounce } from "react-toastify";

export default function LandingPage() {

  const [email, setEmail] = useState('')

  const updateWaitlist = async () => {
    if (!email.trim()) return
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast('Please enter a valid email address.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

      toast('🦄 Adding you to the waitlist!', {
        position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_GOOGLE_SHEET_API}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [{id:'INCREMENT', email: email}] })
  
    })
    
      const data = await response.json()
      console.log(data)
      setEmail('')
      toast('Added!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    }
    catch(error){
      console.error(error)
    }
  }

  const redirectToJotform = () => { 
    window.open('https://form.jotform.com/242858099694073', '_blank');
  }

  const redirectToCalendly = () => { 
    window.open('https://calendly.com/vakkati/coffee-chats', '_blank');
  }

  return (
    <div className="flex flex-col min-h-[100vh] relative overflow-x-hidden">
      <header className="absolute top-0 w-[100vw] px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <SpaceIcon className="h-6 w-6"  />
          <p className="text-xl ml-3 text-white">Merit</p>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full h-[90vh] py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r flex justify-center from-[#00b09b] to-[#96c93d]">
          <div className="container px-4 md:px-6 text-center flex flex-col justify-center items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Land research opportunities in weeks
              </h1>
              <p className="max-w-[700px] mx-auto text-lg text-white md:text-xl lg:text-2xl">
                Find your dream research opportunity as an undergraduate student at UC Davis in weeks.
              </p>
              <div className="flex flex-col gap-2 md:flex-row justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className={`bg-white hover:bg-white/90 text-black text-xl rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none`}
                  onClick={redirectToCalendly}
                >
                  Schedule a Call
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className={`bg-black hover:bg-black/90 text-white text-xl rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none}`}
                  onClick={redirectToJotform}
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-[90vh]">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-full w-full py-12 px-8 md:py-20 md:px-12 gap-12 md:gap-4">
            <div className="flex flex-col gap-4 mt-[-4rem] w-full md:w-4/5">
              <div className="inline-block rounded-lg w-min text-nowrap bg-gray-200 px-3 py-1 text-sm text-gray-500">
                Key Benefits
              </div>
              <p className="text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl">
                THE OPTIMAL ALGORITHM<span className="text-green-400">.</span>
              </p>
              <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Use our <span className="text-green-400 font-semibold">fundemental</span> set of steps to help you find the most <span className="text-green-400 font-semibold"> quality research </span> positions.
              </p>
              <div className="flex flex-col gap-2 md:flex-row mr-4">
                <Button
                  type="submit"
                  size="lg"
                  onClick={redirectToCalendly}
                  className={` text-semibold bg-black text-white text-xl rounded-lg ease-in-out transition-all duration-30 focus-visible:ring-1 focus-visible:ring-ring`}
                >
                  Schedule a Call
                </Button>
                <Button
                  type="submit"
                  onClick={updateWaitlist}
                  size="lg"
                  className={` text-semibold bg-green-400 text-black text-xl rounded-lg ease-in-out transition-all duration-30 focus-visible:ring-1 focus-visible:ring-ring`}
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
            <img
              src="images\img1.webp"
              alt="Merit"
              className="md:w-2/5 w-full md:h-full object-center rounded-xl"
            />
          </div>
        </section>
        <section className="w-full h-[90vh] bg-gradient-to-r from-[#00b09b] to-[#96c93d]">
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center h-full w-full md:py-20 py-12 px-8 md:px-12 gap-12 md:gap-4">
          <img
              src="images\img2.png"
              alt="Merit"
              className="overflow-hidden md:w-2/5 w-full md:h-full rounded-xl object-center object-contain"
            />
            <div className="flex flex-col gap-4 mt-[-4rem] w-fullmd:w-4/5">
              <div className="inline-block rounded-lg w-min text-nowrap bg-gray-200 px-3 py-1 text-sm text-gray-500">
                Key Benefits
              </div>
              <p className="text-3xl font-bold text-white tracking-wider sm:text-4xl md:text-5xl">
                CHOOSE PROFESSORS<span className="text-green-400">.</span>
              </p>
              <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <span className="underline underline-offset-4 decoration-semibold font-semibold">Leverage Merit</span> to talk and meet with the <span className="underline underline-offset-4 decoration-semibold font-semibold"> best</span> professors in <span className="underline underline-offset-4 decoration-semibold font-semibold">your field of interest</span>
              </p>
              <div className="flex flex-col gap-2 md:flex-row">
                <Button
                  type="submit"
                  size="lg"
                  className={`bg-white hover:bg-white/90 text-black text-xl rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none`}
                  onClick={redirectToCalendly}
                >
                  Schedule a Call
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className={`bg-black hover:bg-black/90 text-white text-xl rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none}`}
                  onClick={redirectToJotform}
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
            
          </div>
        </section>
        <section className="w-full h-[90vh]">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-full w-full py-12 px-8 md:py-20 md:px-12 gap-12 md:gap-4">
            <div className="flex flex-col gap-4 mt-[-4rem] w-full md:w-4/5">
              <div className="inline-block rounded-lg w-min text-nowrap bg-gray-200 px-3 py-1 text-sm text-gray-500">
                Key Benefits
              </div>
              <p className="text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl">
                LAND RESEARCH<span className="text-green-400">.</span>
              </p>
              <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Use our <span className="text-green-400 font-semibold">personalized</span> preparation material to impress and<span className="text-green-400 font-semibold"> land roles</span> in lab groups  .
              </p>
              <div className="flex flex-col gap-2 md:flex-row mr-4">
                <Button
                  type="submit"
                  size="lg"
                  onClick={redirectToCalendly}
                  className={` text-semibold bg-black text-white text-xl rounded-lg ease-in-out transition-all duration-30 focus-visible:ring-1 focus-visible:ring-ring`}
                >
                  Schedule a Call
                </Button>
                <Button
                  type="submit"
                  onClick={updateWaitlist}
                  size="lg"
                  className={` text-semibold bg-green-400 text-black text-xl rounded-lg ease-in-out transition-all duration-30 focus-visible:ring-1 focus-visible:ring-ring`}
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
            <img
              src="images\img1.png"
              alt="Merit"
              className="overflow-hidden md:w-2/5 w-full md:h-full object-center object-contain"
            />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-2 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Merit. All rights reserved.</p>
      </footer>
      <ToastContainer />
    </div>
  )
}

function SpaceIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      color="white"
    >
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
}