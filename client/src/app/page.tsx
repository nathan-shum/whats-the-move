import GettingStarted from '@/components/get-started'
import Embark from '@/components/embark'
import Steps from '@/components/steps'
import Theme from '@/components/themes'
import Quote from '@/components/quote'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden h-[5480px] w-100vw">
        <GettingStarted />
        <Embark />
        <Steps />
        <Theme />
        <Quote />
        <Footer />
      </div>
    </div>
  );
};