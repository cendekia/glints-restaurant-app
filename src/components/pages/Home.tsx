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
              className="w-11/12 h-10 p-3 border border-l-0 rounded-md rounded-l-none shadow focus:outline-none"
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
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,1"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,2"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,3"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,4"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,11"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,21"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,31"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,41"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,12"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,22"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,32"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://source.unsplash.com/800x600/?restaurant,42"
                alt="restaurant"
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl">Mie Ayam Gondangdia</h1>
              <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-100">
        <div className="container max-w-6xl mx-auto flex flex-col p-5">
          <div className="text-3xl font-bold italic">Glintsomato</div>
          <div>
            <p className="text-xs text-gray-600">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2021 © Glintsomato™
              Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
