import { FiSearch } from "react-icons/fi"
import styled from "styled-components"

const Hero = styled.div`
  background-image: url("/images/header.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Home = () => {
  return (
    <>
      <header className="border-b">
        <div className="container max-w-6xl mx-auto flex justify-between items-center p-5">
          <div className="text-3xl font-bold italic w-1/6">Glintsomato</div>
          <div className="flex justify-start items-center w-4/6">
            <FiSearch className="w-1/12 h-10 py-2 border border-r-0 rounded-md rounded-r-none shadow ml-6 text-gray-500" />
            <input
              type="input"
              name="restaurant"
              className="w-11/12 h-10 p-3 border border-l-0 rounded-md rounded-l-none shadow"
              placeholder="Search for restaurant"
            />
          </div>
          <div className="w-1/6 flex justify-end">
            <a
              href="/login"
              className="mx-3 text-gray-500 hover:text-gray-800"
              rel="noopener noreferrer"
            >
              Log In
            </a>
            <a
              href="/signup"
              className="mx-3 text-gray-500 hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
      <div className="container max-w-6xl mx-auto flex p-5">
        <Hero className="w-full h-80 my-6 rounded relative">
          <div className="bg-black opacity-30 absolute w-full h-80"></div>
          <div className="text-right m-8">
            <a
              href="/save-collection"
              className="p-3 bg-black text-white text-sm rounded-full opacity-75"
            >
              + Save Collection
            </a>
          </div>
          <div className="text-white absolute bottom-0 m-10">
            <h1 className="text-5xl">Trending in Jakarta</h1>
            <p>
              Most-loved & highly-reviewed restaurants, by and for Jakartans!
            </p>
          </div>
        </Hero>
      </div>
    </>
  )
}

export default Home
