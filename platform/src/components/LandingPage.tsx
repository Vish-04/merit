import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Beaker, Users, Trophy } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Research at UC Davis, Simplified
              </h1>
              <p className="text-2xl font-medium">
                Connect with top professors. Elevate your academic journey.
              </p>
              <a
                href="https://calendly.com/rvanga1/researchconnect-research-goals-setting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 sm:mt-6"
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="flex justify-center relative lg:justify-start">
              <Image
                src="/images/uc-davis-logo.png"
                alt="UC Davis Logo"
                width={300}
                height={300}
                className="rounded-full lg:w-[500px] lg:h-[500px]"
              />
              <div className="absolute -bottom-4 lg:-left-4 bg-white text-blue-600 p-4 rounded-full shadow-lg">
                <p className="text-xl font-bold">100+ Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-none">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">{feature.title}</h2>
                  <p className="text-lg text-blue-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-3xl font-bold text-blue-900 mb-8">
              "ResearchConnect allowed me to set up meetings with some of the top professors in my field at UC Davis. I'm glad I set up an initial meeting with them."
            </p>
            <footer className="text-xl text-blue-700">
              <strong>Emily Chen</strong> • Neurobiology, Physiology & Behavior
            </footer>
          </blockquote>

          {/* Additional Testimonial */}
          <blockquote className="text-center mt-16">
            <p className="text-3xl font-bold text-blue-900 mb-8">
              "I was able to get a research position in a lab that I was interested in. I'm grateful for the opportunity to work with such a great team."
            </p>
            <footer className="text-xl text-blue-700">
              <strong>Michael Johnson</strong> • Cell Biology
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </div>
      </section>
    </div>
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
];
