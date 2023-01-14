import Head from "next/head";
import Image from "next/image";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import {
  DiHtml5,
  DiCss3Full,
  DiReact,
  DiJava,
  DiPython,
  DiPostgresql,
  DiGit,
} from "react-icons/di";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiSpringboot, SiPostman, SiTailwindcss } from "react-icons/si";
import face1 from "../public/face-1.jpg";
import { useState } from "react";
import worldpinimage from "../public/worldpin-image.png";
import tictactoeimage from "../public/tictactoe-image.png";
import ticketingimage from "../public/ticketing-image.png";
import musicdataapi from "../public/beatznta.png";
import WpVideoPlayer from "./WpVideoOpener";
import TicVideoPlayer from "./TicVideoOpener";
import "../styles/Home.module.css";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleLoad = () => {
    console.log('PDF loaded successfully');
  }

  const handleError = (error) => {
    console.log('Error loading PDF:', error);
  }


  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Faizan Khan's Porfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-2 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900 scroll-smooth">
        <section>
          <nav className="pt-8 sm:py-10">
            <ul
              className=" flex justify-between place-items-center sm:flex-row sm:text-base text-xs 
              lg:px-4 xl:px-40 px-1 xs:max-sm:px-8"
            >
              <li>
                <a
                  className="
                  dark:bg-gradient-to-r  dark:from-cyan-500 dark:to-teal-500 font-bold text-white px-2 py-2 rounded-full 
                  dark:hover:from-cyan-700 dark:hover:to-teal-700
                  bg-gradient-to-r from-orange-400 to-pink-400 
                  hover:from-orange-600 hover:to-pink-600
                  "
                  href="https://drive.google.com/file/d/1HePbe5Go0os8pzI5kaoU90dwaOdp_aWT/view?usp=pdf"
                  target="_blank"
                >
                  &nbsp; CV &nbsp;
                </a>
              </li>
              <li>
                <a
                  className="
                  bg-gradient-to-r from-cyan-500 to-teal-500 font-bold text-white px-4 py-2 rounded-full 
                  hover:from-cyan-700 hover:to-teal-700
                  dark:bg-gradient-to-r dark:from-orange-400 dark:to-pink-400 
                  dark:hover:from-orange-600 dark:hover:to-pink-600"
                  href="#about-me"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="
                  bg-gradient-to-r from-cyan-500 to-teal-500 font-bold text-white px-4 py-2 rounded-full 
                  hover:from-cyan-700 hover:to-teal-700
                  dark:bg-gradient-to-r dark:from-orange-400 dark:to-pink-400 
                  dark:hover:from-orange-600 dark:hover:to-pink-600"
                  href="#projects"
                >
                  Projects
                </a>
              </li>

              <div>
                {darkMode ? (
                  <div className="cursor-pointer text-base sm:text-xl transition-all duration-300 dark:bg-gradient-to-r  dark:from-cyan-500 dark:to-teal-500 font-bold text-white px-4 py-2 rounded-full 
                  dark:hover:from-cyan-700 dark:hover:to-teal-700">
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                  />
                  </div>
                ) : (
                  <div className="cursor-pointer text-sm sm:text-xl transition-all duration-300 font-bold text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 
                  hover:from-orange-600 hover:to-pink-600">
                  <BsFillMoonFill
                    onClick={() => setDarkMode(!darkMode)}
                    
                   /> 
                   </div>
                  
                )}
              </div>
            </ul>
          </nav>
        </section>

        <section>
          <div className="text-center sm:px-10 sm:my-10 my-8">
            <h2 className="text-4xl md:text-5xl py-3 text-teal-600 font-medium  dark:text-pink-400">
              Hi, I'm Faizan Ahmed Khan
            </h2>
            <h3 className="text-2xl pt-3 text-black md:text-3xl dark:text-white">
              Full-Stack Software Developer
            </h3>
            <p className="py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-300">
              I love exploring and creating <br />
              I'm a lifelong learner <br />
              <span className="">
                Looking for opportunities in the industry
              </span>
            </p>
          </div>

          <div className="text-4xl sm:text-5xl flex justify-center gap-16  ">
            <a
              href="https://www.linkedin.com/in/faizanahmkhan/"
              target="_blank"
            >
              <AiFillLinkedin className="hover:text-blue-500 lg:hover:scale-110 text-blue-500 lg:text-gray-600 dark:text-white dark:hover:text-blue-500" />
            </a>
            <a href="https://github.com/faizanahmkhan" target="_blank">
              <AiFillGithub className="hover:text-gray-400 lg:hover:scale-110 text-gray-400 lg:text-gray-600 dark:text-white dark:hover:text-gray-400" />
            </a>
            <a href="mailto:faizanahmkhan@gmail.com">
              <AiOutlineMail className="hover:text-red-500 lg:hover:scale-110 text-red-500 lg:text-gray-600 dark:text-white dark:hover:text-red-500" />
            </a>
          </div>

          <div className="relative mx-auto rounded-full w-60 h-60 sm:w-80 sm:h-80 mt-6 sm:mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={face1} layout="fill" objectFit="cover" alt='image of myself'/>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <h3
              id="about-me"
              className="text-center text-4xl md:text-5xl font-medium py-10 text-black dark:text-white"
            >
              About Me
            </h3>
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-teal-600 mt-6 mb-4 dark:text-pink-400">
              Background
            </h2>
            <div className="flex 3xl:mx-60 xl:mx-32">
              <div className="text-center sm:text-lg px-4 sm:px-0 py-2 leading sm:leading-8 text-gray-800  dark:text-gray-300 ">
                <p>
                  Since graduating in Chemical & Nuclear Engineering, I have set
                  my sights on a career in the software industry. Throughout my
                  studies, I've honed my problem-solving skills and had the
                  opportunity to work in teams on group projects. Recently, I
                  gained hands-on experience through a bootcamp where I've
                  learned to build both the front-end and back-end of web
                  applications.
                </p>
                <p className="pt-3">
                  I'm looking for an opportunity to take on complex challenges
                  and continue to learn and grow in a dynamic and collaborative
                  environment.{" "}
                  <span className="font-semibold">
                    I'm ready to roll up my sleeves and make an impact as a part
                    of a team dedicated to creating innovative solutions.
                  </span>
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1HePbe5Go0os8pzI5kaoU90dwaOdp_aWT/view?usp=pdf"
                    target="_blank"
                  >
                    <p className="pt-6 font-bold hover:scale-105 transition-all sm:text-xl">
                      View My CV {">"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-teal-600 m-16 dark:text-pink-400">
              Skills & Tools
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:max:xl:px-30 2xl:max-3xl:px-36 3xl:px-56 transition-all duration-500">
              <div
                className="text-blue-700 
              lg:text-gray-600  lg:dark:text-white flex flex-col justify-center items-center"
              >
                <DiCss3Full className="text-4xl sm:text-5xl hover:text-blue-700 hover:scale-110  dark:hover:text-blue-700 " />

                <span className="font-medium hover:text-blue-700">CSS</span>
              </div>

              <div
                className="text-orange-400
              lg:text-gray-600 lg:dark:text-white flex flex-col justify-center items-center"
              >
                <DiHtml5 className="text-4xl sm:text-5xl hover:text-orange-400 hover:scale-110 lg:dark:text-white dark:hover:text-orange-400" />

                <span className="font-medium hover:text-orange-400">HTML</span>
              </div>

              <div
                className="text-yellow-500 lg:text-gray-600 lg:dark:text-white 
              flex flex-col justify-center items-center"
              >
                <IoLogoJavascript
                  className="text-4xl sm:text-5xl lg:hover:text-yellow-500 hover:scale-110 
                dark:hover:text-yellow-500 "
                />
                <span className="font-medium hover:text-yellow-400 text-center">
                  JavaScript
                </span>
              </div>

              <div
                className="text-blue-300 lg:text-gray-600 lg:dark:text-white 
              flex flex-col justify-end items-center"
              >
                <DiReact
                  className="text-4xl sm:text-5xl hover:text-blue-300 hover:scale-110 
                dark:hover:text-blue-300"
                />
                <span className="font-medium hover:text-blue-400">React</span>
              </div>

              <div className="text-red-500 lg:text-gray-600 lg:dark:text-white flex flex-col justify-center items-center mt-8">
                <DiJava
                  className="text-4xl sm:text-5xl hover:text-red-500 hover:scale-110 
                dark:hover:text-red-500"
                />
                <span className="font-medium hover:text-red-500">Java</span>
              </div>

              <div
                className="text-blue-500 lg:text-gray-600 lg:dark:text-white 
              flex flex-col justify-center items-center mt-8"
              >
                <DiPython
                  className="text-4xl sm:text-5xl hover:text-blue-500 hover:scale-110 
                dark:hover:text-blue-500"
                />
                <span className="font-medium hover:text-blue-500">Python</span>
              </div>

              <div
                className="text-sky-700 lg:text-gray-600 lg:dark:text-white 
              flex flex-col justify-center items-center mt-8"
              >
                <DiPostgresql
                  className=" text-4xl sm:text-5xl hover:text-sky-700 hover:scale-110 
                dark:hover:text-sky-700"
                />
                <span className="font-medium hover:text-sky-700">
                  PostgreSQL
                </span>
              </div>

              <div
                className="text-red-400 lg:text-gray-600 lg:dark:text-white 
              flex flex-col justify-center items-center mt-8"
              >
                <DiGit
                  className="text-4xl sm:text-5xl hover:text-red-400 hover:scale-110 
                dark:hover:text-red-400"
                />
                <span className="font-medium hover:text-blue-400">Git</span>
              </div>

              <div className="text-lime-500 lg:text-gray-600 lg:dark:text-white flex flex-col justify-center items-center mt-10">
                <SiSpringboot
                  className=" text-3xl sm:text-4xl hover:text-lime-500 hover:scale-110
              dark:hover:text-lime-500"
                />
                <span className="font-medium hover:text-lime-500">
                  Spring Boot
                </span>
              </div>

              <div className="text-yellow-500 lg:text-gray-600 lg:dark:text-white flex flex-col justify-center items-center mt-10">
                <IoLogoFirebase
                  className=" text-3xl sm:text-4xl hover:text-yellow-500 hover:scale-110 
                dark:hover:text-yellow-500"
                />
                <span className="font-medium hover:text-yellow-500">
                  Firebase
                </span>
              </div>

              <div className="text-orange-500 lg:text-gray-600 lg:dark:text-white flex flex-col justify-center items-center mt-10">
                <SiPostman
                  className="text-3xl sm:text-4xl hover:text-orange-500 hover:scale-110 
                dark:hover:text-orange-500"
                />
                <span className="font-medium hover:text-orange-400">
                  Postman
                </span>
              </div>

              <div className="text-cyan-500 lg:text-gray-600 lg:dark:text-white flex flex-col justify-center items-center mt-10">
                <SiTailwindcss
                  className=" text-3xl sm:text-4xl hover:text-cyan-500 hover:scale-110 
                dark:hover:text-cyan-500"
                />
                <span className="font-medium hover:text-cyan-500">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </section>
       
        <section className="pt-12">
          <div className="m-10">
            <h3
              id="projects"
              className="text-center text-4xl md:text-5xl font-medium  text-black dark:text-white"
            >
              Projects
            </h3>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 2xl:max-3xl:gap-3 gap-12 sm:max-md:mx-6 md:max-lg:mx-20 "
            id="project-card"
            
          >
            <div
              className="flex flex-col flex-1 text-center shadow-xl hover:shadow-2xl p-10  rounded-xl my-10 
              dark:shadow-gray-800 transition-all duration-300 "
            >
              <div>
                <Image
                  className="lg:hover:scale-125 rounded-lg lg:hover:-translate-y-6 transition-all duration-700 ease-in-out
              touch-pinch-zoom md:touch-none"
                  alt="image of worldpin app"
                  src={worldpinimage}
                  layout="responsive"
                />
              </div>
              <h3 className="text-xl font-bold pt-4 pb-4 text-black dark:text-white">
                WorldPin
              </h3>
              <div>
                <ul className="grid grid-cols-2 content-center gap-2 px-1 py-1 ">
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base 
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white
                    "
                  >
                    React
                  </li>
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
                  >
                    Java
                  </li>
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
                  >
                    PostgreSQL
                  </li>
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
                  >
                    Firebase
                  </li>
                </ul>
              </div>
              <p className="py-5 text-black dark:text-gray-300">
                Pin your memories on the map, share them with the world. This
                web app allows a user to place an image, a description, and a
                date on a global map by specifying a location. Developed through
                collaboration, this app utilises a REST API and is implemented
                with React components, JSX syntax, and HTTP requests, resulting
                in a smooth and responsive user interface.
              </p>
              <div className="mt-auto">
                <ul
                  className="grid grid-cols-2 gap-1 sm:gap-4 sm:px-1 py-1 
                  2xl:max-3xl:grid-rows-2 2xl:max-3xl:grid-cols-1"
                >
                  <li
                    className="xl:text-lg text-white font-semibold bg-gray-700 dark:bg-gray-800 hover:bg-gray-900  
                    outline outline-2 hover:outline-0 rounded-full transition-all duration-300 
                    dark:hover:bg-gray-700 dark:hover:outline-gray-800 dark:outline-gray-800 " 
                  >
                    
                    <WpVideoPlayer/>
                  </li>
                  <li
                    className="xl:text-lg text-white font-semibold bg-gray-700 dark:bg-gray-800 hover:bg-gray-900  
                    outline outline-2  hover:outline-0 rounded-full transition-all duration-300
                    dark:hover:bg-gray-700 dark:hover:outline-gray-800 dark:outline-gray-800"
                  >
                    <a
                      href="https://github.com/faizanahmkhan/worldpin_app"
                      target="_blank"
                    >
                      &nbsp;&nbsp;GitHub {">"}&nbsp;&nbsp;
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="flex flex-col flex-1 text-center shadow-xl hover:shadow-2xl p-10 rounded-xl my-10 
              dark:shadow-gray-800
              transition-all duration-300"
            >
              <Image
                className="lg:hover:scale-125 rounded-lg lg:hover:-translate-y-6 transition-all duration-700 ease-in-out
              touch-pinch-zoom md:touch-none"
                src={tictactoeimage}
                layout="responsive"
                alt="image of tictactoe app"
              />

              <h3 className="text-xl font-bold pt-4 pb-4 text-black dark:text-white">
                TicTacToe
              </h3>
              <div>
                <ul className="grid grid-cols-2 content-center gap-2 px-1 py-1">
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base 
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white
                    "
                  >
                    React
                  </li>
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
                  >
                    JavaScript
                  </li>
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
                  >
                    HTML
                  </li>
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
                  >
                    CSS
                  </li>
                </ul>
              </div>
              <p className="py-5 text-black dark:text-gray-300">
                Feast your eyes on a Halloween-themed tic-tac-toe game! A group
                effort targeted at a spooky market, it employs functional
                components and hooks such as useState and useEffect to manage
                the game's state and handle user interactions. Data is consumed
                from a locally-hosted API, implemented using JavaScript's Fetch
                API to make HTTP requests to the server.
              </p>
              <div className="mt-auto">
                <ul
                  className="grid grid-cols-2 align-center gap-1 sm:gap-4 sm:px-1 py-1 
                2xl:max-3xl:grid-rows-2 2xl:max-3xl:grid-cols-1"
                >
                  <li
                    className="xl:text-lg text-white font-semibold bg-gray-700 dark:bg-gray-800 hover:bg-gray-900  
                    outline outline-2 hover:outline-0 rounded-full transition-all duration-300
                    dark:hover:bg-gray-700 dark:hover:outline-gray-800 dark:outline-gray-800"
                  >
                    <TicVideoPlayer/>
                  </li>
                  <li
                    className="xl:text-lg text-white font-semibold bg-gray-700 dark:bg-gray-800 hover:bg-gray-900  
                    outline outline-2  hover:outline-0 rounded-full transition-all duration-300
                    dark:hover:bg-gray-700 dark:hover:outline-gray-800 dark:outline-gray-800"
                  >
                    <a
                      href="https://github.com/faizanahmkhan/tictactoe_frontend"
                      target="_blank"
                    >
                      &nbsp;&nbsp;GitHub {">"}&nbsp;&nbsp;
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="flex flex-col flex-1 text-center shadow-xl hover:shadow-2xl p-10 rounded-xl my-10 
              dark:shadow-gray-800
               transition-all duration-300"
            >
              <Image
                className="lg:hover:scale-125 rounded-lg lg:hover:-translate-y-6 transition-all duration-700 ease-in-out
              touch-pinch-zoom md:touch-none"
                src={musicdataapi}
                layout="responsive"
                alt="image of music data api"
              />

              <h3 className="text-xl font-bold pt-4 pb-4 text-black dark:text-white">
                Music Data API
              </h3>
              <div>
                <ul className="grid grid-cols-2 content-center gap-2 px-1 py-1 ">
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base 
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white
                    "
                  >
                    Java
                  </li>
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
                  >
                    PostgreSQL
                  </li>
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
                  >
                    Postman
                  </li>
                  <li
                    className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
                  >
                    Spring Boot
                  </li>
                </ul>
              </div>
              <p className="py-5 text-black dark:text-gray-300">
                This API was designed to be used with a music web app and allows
                for the creation, reading, updating, and deleting of data
                through HTTP requests. To enhance the system's functionality, a
                SQL database was integrated, allowing for the storage of data
                with each HTTP request. No live demo, but the ReadMe on GitHub
                will walk you through interacting with the API.
              </p>
              <div className="mt-auto">
                <ul className="grid justify-center gap-1 sm:gap-4 sm:px-1 py-1">
                  <li
                    className="xl:text-lg text-white font-semibold bg-gray-700 dark:bg-gray-800 hover:bg-gray-900  
                    outline outline-2  hover:outline-0 rounded-full transition-all duration-300
                    dark:hover:bg-gray-700 dark:hover:outline-gray-800 dark:outline-gray-800"
                  >
                    <a
                      href="https://github.com/faizanahmkhan/music_api"
                      target="_blank"
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub {">"}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="flex flex-col flex-1 text-center shadow-xl hover:shadow-md p-10 rounded-xl my-10 
              dark:shadow-gray-800
               transition-all duration-300 cursor-not-allowed"
            >
              <Image
                className=" rounded-lg transition-all duration-700 ease-in-out
              touch-pinch-zoom md:touch-none blur-lg"
                src={ticketingimage}
                layout="responsive"
                alt="blurred image of ticketing system"
              />

              <h3 className="text-xl font-bold pt-4 pb-4 text-red-500 dark:text-orange-600">
                Ticketing System{" "}
                <span className="italic text-sm">
                  {"("}Coming Soon{")"}
                </span>
              </h3>
              <div>
                <ul className="grid grid-cols-2 content-center gap-2 px-1 py-1 blur-sm">
                  <li
                    className="text-teal-600 font-semibold   
                    outline outline-2 outline-teal-600 rounded-lg text-base 
                    dark:text-pink-400 dark:outline-pink-400 
                    "
                  >
                    React
                  </li>
                  <li
                    className="text-teal-600 font-semibold  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 "
                  >
                    MongoDB
                  </li>
                  <li
                    className="text-teal-600 font-semibold 
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 "
                  >
                    Express
                  </li>
                  <li
                    className="text-teal-600 font-semibold  
                    outline outline-2 outline-teal-600 rounded-lg text-base
                    dark:text-pink-400 dark:outline-pink-400 "
                  >
                    Node
                  </li>
                </ul>
              </div>
              <p className="py-5 text-black dark:text-gray-300 blur-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                fugiat corrupti dignissimos numquam. Totam, voluptate! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Similique
                commodi libero maxime quis necessitatibus, sint ab quos dolore
                illum eveniet.
              </p>
              <div className="mt-auto">
                <ul
                  className="grid grid-cols-2 align-bottom gap-1 sm:gap-4 sm:px-1 py-1 
                2xl:max-3xl:grid-rows-2 2xl:max-3xl:grid-cols-1"
                >
                  <li
                    className=" xl:text-lg text-white font-semibold bg-gray-800  
                    outline outline-2  rounded-full transition-all duration-300 blur-sm
                     dark:outline-gray-800"
                  >
                    Live Demo {">"}
                  </li>
                  <li
                    className=" xl:text-lg  text-white font-semibold bg-gray-800 
                    outline outline-2   rounded-full transition-all duration-300 blur-sm
                     dark:outline-gray-800"
                  >
                    <a
                    // href='https://github.com/faizanahmkhan/worldpin_app' target='_blank'
                    >
                      GitHub {">"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-6 pb-4">
          <div className="text-black dark:text-white font-semibold grid sm:grid-cols-2">
            <div
              className="sm:text-right text-center uppercase text-teal-600 dark:text-pink-400 
              "
            >
              <a
                href="mailto:faizanahmkhan@gmail.com"
                className="hover:text-pink-400 dark:hover:text-teal-600"
              >
                Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
              <a
                href="https://www.linkedin.com/in/faizanahmkhan/"
                target="_blank "
                className="hover:text-pink-400 dark:hover:text-teal-600"
              >
                Github&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
              <a
                href="https://github.com/faizanahmkhan"
                target="_blank"
                className="hover:text-pink-400 dark:hover:text-teal-600"
              >
                Linkedin
              </a>
            </div>

            <div className="sm:text-left text-center sm:order-first">
              Created by Faizan Ahmed Khan 🔥 2023
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
