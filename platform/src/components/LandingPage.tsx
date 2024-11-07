// ** Next Imports
// @ts-ignore
import Image from "next/image";

// ** MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";

// ** UI
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ** Lucide Icons
import { ArrowRight, Beaker, Users, Trophy, Microscope, CalendarDays, Code, Star, Quote } from "lucide-react";

export default function LandingPage() {


  return (
    <Box className="min-h-screen bg-white">
      
      {/* NAV */}
      <Box className="h-[50px] absolute top-0 w-full flex items-center px-7 border-b border-blue-700">
        <Microscope className="w-6 h-6 text-white" />
        <Typography variant="h5" className="text-2xl text-white font-bold font-mono">ResearchConnect</Typography>
      </Box>
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <Box className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <Box className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <Box className="space-y-8">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                We Help Students Get Research @ UC Davis
              </h1>
              <Typography variant="h6" className="font-medium">
                Connect with top professors. Elevate your academic journey.
              </Typography>
              <a
                href="https://calendly.com/rvanga1/researchconnect-research-goals-setting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 sm:mt-6"
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </Box>
            <Box className="flex justify-center relative">
              <Image
                src="/images/uc-davis-logo.png"
                alt="UC Davis Logo"
                width={500}
                height={500}
                className="rounded-full lg:w-[500px] lg:h-[500px]"
              />
              <Box className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 bg-white text-blue-600 p-4 rounded-full border border-gray-400 shadow-lg floating">
                <Typography className="text-xl font-bold text-nowrap"><span className="font-mono font-bold">100+</span> Opportunities</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>

      {/* Features Section */}
      <Box className="container flex flex-col md:flex-row justify-center min-h-[80vh] gap-4 py-20 mx-auto sm:px-6 lg:px-8">
        <Box className="flex flex-col items-center w-full md:w-[40vw] p-4">
          <Box>
            <Typography variant="h3" fontWeight={600} className="text-black text-left"><span className="text-blue-600 text-bold underline">Elevate</span> your Resume with Research</Typography>
            <Typography variant="body2" mt={2} className="flex text-2xl mt-4 text-gray-700 font-mono text-left ml-0">Bolster your chances of admission to top graduate, medical, and industry programs.</Typography>
          </Box>
          <Box className="flex items-center justify-evenly w-full mt-10 gap-4">
            <Box className="flex flex-col items-center justify-center">
              <Typography variant="h3" fontWeight={700} className=" text-gray-700 font-mono">300+</Typography>
              <Typography variant="h6" fontWeight={400} className=" text-gray-700 font-mono">Professors</Typography>
            </Box>
            <Box className="flex flex-col items-center justify-center">
              <Typography variant="h3" fontWeight={700} className=" text-gray-700 font-mono">100+</Typography>
              <Typography variant="h6" fontWeight={400} className=" text-gray-700 font-mono">Departments</Typography>
            </Box>
            <Box className="flex flex-col items-center justify-center">
              <Typography variant="h3" fontWeight={700} className=" text-gray-700 font-mono">5+</Typography>
              <Typography variant="h6" fontWeight={400} className=" text-gray-700 font-mono">Students</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="grid md:w-[60vw] grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardHeader
                className="mb-0"
                title={<Box className="flex items-center gap-4 justify-start">
                  <Box className="flex items-center justify-center p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </Box>
                  <Typography fontWeight="bold" variant="h6" className="text-5xl md:text-nowrap mb-2 text-blue-900">{feature.title}</Typography>
                </Box>
                }
              />
              <CardContent className="text-center h-min">
                <Typography variant="body2" className="text-2xl text-left text-blue-700">{feature.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Testimonial Section */}
      <section className="bg-blue-50 py-20 flex flex-col gap-8 items-center justify-center">
        <Typography variant="h3" fontWeight={600} className="text-black text-center">What Our Students Say</Typography>
        <Box className="container flex flex-wrap justify-center items center gap-4 mx-auto px-4 sm:px-6 lg:px-8">
         
          {/* BENEDICT PALMA */}
          <Box className="p-6 bg-white rounded-xl border border-gray-200 w-[400px] h-[330px] shadow-lg">
            <Quote fill="#2563eb" className="w-10 h-10 text-blue-600" />
            <Typography variant="body1" mt={2} fontWeight={600} className="text-3xl font-bold">
              The team at ResearchConnect was able to get me the perfect lab position in just a week. I am incredibly grateful for both the opportunity and the dedicated support from the team.
            </Typography>
            <Box className="flex items-center gap-4 mt-8">
              <Image src="/images/benedict-palma.jpg" alt="Benedict Palma" width={50} height={50} className="rounded-full" />
              <Box className="flex flex-col justify-center">
                <Typography variant="body2" fontWeight={400} className="text-xl font-mono">Benedict Palma</Typography>
                <Typography variant="body2" fontWeight={300} className="text-xl font-mono">Human Biology @ UC Davis</Typography>
              </Box>
            </Box>
          </Box>

          {/* SABRINA TRAN */}
          <Box className="p-6 bg-white rounded-xl border border-gray-200 w-[400px] shadow-lg">
            <Quote fill="#2563eb" className="w-10 h-10 text-blue-600" />
            <Typography variant="body1" mt={2} fontWeight={600} className="text-3xl font-bold">
              ResearchConnect allowed me to set up meetings with some of the top professors in my field at UC Davis. I'm glad I set up an initial meeting with them.
            </Typography>
            <Box className="flex items-center gap-4 mt-8">
              <Image src="/images/sabrina-tran.jpg" alt="Sabrina Tran" width={50} height={50} className="rounded-full" />
              <Box className="flex flex-col justify-center">
                <Typography variant="body2" fontWeight={400} className="text-xl font-mono">Sabrina Tran</Typography>
                <Typography variant="body2" fontWeight={300} className="text-xl font-mono">Neurobiology, Physiology & Behavior</Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-24">
        <Box className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Research Journey?</h2>
          <a
            href="https://calendly.com/rvanga1/researchconnect-research-goals-setting"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold">
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </Box>
      </section>
    </Box>
  );
}

// Updated feature order
const features = [
  {
    title: "Career Boost",
    description: "Gain experience that sets you apart in your future endeavors.",
    icon: Trophy,
  },
  {
    title: "Exclusive Access",
    description: "Connect with research opportunities not available elsewhere.",
    icon: Beaker,
  },
  {
    title: "Professor Connect",
    description: "Get the chance to connect with top professors aligned to your interests and skills.",
    icon: Users,
  },
  {
    title: "Proprietary Algorithm",
    description: "Use our proprietary algorithm and optimize your chances of landing research.",
    icon: Code,
  },
];
