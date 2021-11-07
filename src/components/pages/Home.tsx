import styled from "styled-components"
import RestoCard from "../RestoCard"

const Hero = styled.div`
  background-image: url("/images/header.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Home = () => {
  return (
    <>
      <div className="container max-w-6xl mx-auto flex p-5">
        <Hero className="w-full h-80 my-6 rounded-md relative">
          <div className="bg-black opacity-30 absolute w-full h-80 rounded-md"></div>
          <div className="text-right m-8">
            <a
              href="/save-collection"
              className="p-3 bg-black text-white text-sm rounded-full opacity-75"
            >
              + Save Collection
            </a>
          </div>
          <div className="text-white absolute bottom-0 m-10">
            <h1 className="text-5xl">Trending in Glints</h1>
            <p>
              Most-loved & highly-reviewed restaurants, by and for Glintser!
            </p>
          </div>
        </Hero>
      </div>
      <div className="container max-w-6xl mx-auto flex p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
        </div>
      </div>
    </>
  )
}

export default Home
