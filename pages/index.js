import Header1 from "@/components/Header1"
import Header2 from "@/components/Header2"
import Header3 from "@/components/Header3"
import Footer from "@/components/Footer"
import Head from "next/head"

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Tripy Homes</title>
      </Head>
     <Header1 />
     <Header2 />
     <Header3 />
     <Footer />
    </div>
  )
}

export default Home
