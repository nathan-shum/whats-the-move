import GettingStarted from '@/components/get-started'
import Embark from '@/components/embark'
import Steps from '@/components/steps'
import Theme from '@/components/themes'
import Quote from '@/components/quote'
import Footer from '@/components/footer'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="flex flex-col bg-white w-full">
        <Hero />
        {/* <GettingStarted />
        <Embark />
        <Steps />
        <Theme />
        <Quote />
        <Footer /> */}
      </div>
    </div>
  );
};