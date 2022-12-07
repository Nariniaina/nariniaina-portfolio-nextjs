import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-[1000px]">
      <Head>
        <title>Nariniaina portfolio</title>
        <meta property="og:title" content="Nariniaina portfolio" />
        <meta
          property="og:description"
          content="Je suis Nariniaina. Avec 4 ans d'expérience. Je perfectionne mon
          art qu'est le développement en tant qu'artisan de la
          technologie."
        />
        <meta
          name="description"
          content="Je suis Nariniaina. Avec 4 ans d'expérience. Je perfectionne mon
          art qu'est le développement en tant qu'artisan de la
          technologie."
        />
        <meta property="og:type" content="image" />
        <meta property="og:url" content="/assets/profile-pic.png" />
        <meta property="og:image" content="/icon-soamadigna-min.png" />
        <link rel="icon" href="/assets/profile-pic.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="keywords" content="nariniaina" />
      </Head>
      <div>
        <nav className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-5 py-5 px-6">
          <div
            className="block sm:hidden hover:cursor-pointer rounded-full group p-2 
          hover:bg-[#ff8900] transition-all ease-in-out duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="min-w-[25px] min-h-[25px] max-w-[25px] max-h-[25px] 
              group-hover:text-white text-slate-600 dark:text-gray-400
              transition-all ease-in-out duration-500"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <ul className="tracking-wide hidden sm:flex flex-row gap-10 text-slate-800 text-lg">
            <li className="cursor-pointer border-b-4 border-transparent hover:border-orange-400 transition-all ease-in-out duration-500">
              A propos de moi
            </li>
            <li className="cursor-pointer border-b-4 border-transparent hover:border-orange-400 transition-all ease-in-out duration-500">
              Projets
            </li>
            <li className="cursor-pointer border-b-4 border-transparent hover:border-orange-400 transition-all ease-in-out duration-500">
              Compétences
            </li>
          </ul>
          <button className="tracking-wide bg-gray-100 transition-all hover:bg-orange-600 hover:scale-105 hover:text-white ease-in-out duration-500 font-semibold rounded-full px-4 py-2">
            Contactez-moi
          </button>
        </nav>
        <div className="grid grid-cols-2 lg:flex-row max-w-7xl mx-auto w-full">
          <div className="col-span-2 lg:col-span-1 order-1 lg:order-none mt-5 lg:mt-[55px] px-6">
            <div className="flex flex-col justify-center lg:justify-start lg:max-w-xl">
              <h1 className="leading-[55px] sm:leading-[65px] title-font transition-all ease-in-out duration-500 text-4xl sm:text-6xl text-slate-900 break-words">
                Mon nom est R.Nariniaina
              </h1>
              <p className="mt-7 text-xl leading-[30px] text-slate-700">
                Je suis Nariniaina. Avec 4 ans d'expérience. Je perfectionne mon
                art qu'est le développement en tant qu'artisan de la
                technologie. Pour réaliser mon rêve et le votre.{" "}
              </p>
              <div className="mt-9 flex flex-wrap max-w-sm gap-4 text-xl">
                <span className="transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer whitespace-nowrap rounded-lg text-black font-semibold bg-[#fcb03d] w-min px-3 py-1">
                  Javascript
                </span>
                <span className="transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer whitespace-nowrap rounded-lg text-white font-semibold bg-[#e66910] w-min px-3 py-1">
                  NextJS, ReactJS
                </span>
                <span className="transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer whitespace-nowrap rounded-lg text-white font-semibold bg-[#241f21] w-min px-3 py-1">
                  NodeJS, Express
                </span>
                <span className="transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer whitespace-nowrap rounded-lg text-black font-semibold bg-[#e1e1e1] w-min px-3 py-1">
                  MongoDB/Firebase
                </span>
              </div>
            </div>
          </div>
          <div className="group col-span-2 lg:col-span-1 flex items-center justify-center h-full relative">
            <div
              className="hidden lg:flex w-min rounded-3xl group-hover:scale-105
                absolute bottom-[25%] left-[45px] flex-col gap-1 bg-[#241f21]
                px-6 py-5 transition-all ease-in-out duration-500 group-hover:opacity-95"
            >
              <h4 className="text-5xl font-medium text-white">04+</h4>
              <p className="text-lg whitespace-nowrap text-white">
                ans d'expériences
              </p>
            </div>
            <img
              className="group-hover:scale-90 z-[-1] rounded-full object-contain
              transition-all ease-in-out duration-500"
              width="450"
              height="450"
              src="/assets/profile-pic.png"
              alt="nariniaina-picture"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10">
          <div className="flex flex-row justify-between gap-5">
            <h1 className="text-black text-4xl tracking-widerr">
              Derniers projets
            </h1>
            <Link
              href="https://github.com/Nariniaina?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:opacity-80 cursor-pointer flex flex-row gap-3 items-end sm:items-center text-lg">
                <p>Github projects</p>
                <div className="h-min w-min">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-black min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-14 grid gap-20 lg:gap-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="hover:scale-105 cursor-pointer rounded-2xl px-2 pt-2 pb-10 transition-all ease-in-out duration-500 hover:bg-orange-600 group h-min flex flex-col w-full md:w-max">
              <img
                className="rounded-2xl object-cover w-full h-[250px]"
                src="/assets/image-blur-placeholder.png"
                alt="e-gouter-za"
              />
              <div className="flex justify-end z-[1] -mt-[25px] mr-[15px] lg:-mr-[25px]">
                <div className="bg-[#241f21] py-2 w-min h-min rounded-xl px-4">
                  <span className="text-4xl text-white">01</span>
                </div>
              </div>
              <h1 className="pl-5 transition-all ease-in-out duration-500 text-black group-hover:text-white text-2xl w-[300px] -mt-[15px]">
                Food mobile app : E-gouter za
              </h1>
            </div>
            <div className="hover:scale-105 cursor-pointer rounded-2xl px-2 pt-2 pb-10 transition-all ease-in-out duration-500 hover:bg-orange-600 group h-min xl:mt-[100px] flex flex-col w-full md:w-max">
              <img
                className="rounded-2xl object-cover w-full h-[250px]"
                src="/assets/image-blur-placeholder.png"
                alt="snapchat-clone"
              />
              <div className="flex justify-end z-[1] -mt-[25px] mr-[15px] lg:-mr-[25px]">
                <div className="bg-[#241f21] py-2 w-min h-min rounded-xl px-4">
                  <span className="text-4xl text-white tracking-wider">02</span>
                </div>
              </div>
              <h1 className="pl-5 transition-all ease-in-out duration-500 text-black group-hover:text-white text-2xl w-[300px] -mt-[15px]">
                Snapchat clone
              </h1>
            </div>
            <div className="hover:scale-105 cursor-pointer rounded-2xl px-2 pt-2 pb-10 transition-all ease-in-out duration-500 hover:bg-orange-600 group h-min lg:mt-[100px] xl:mt-[200px] flex flex-col w-full md:w-max">
              <img
                className="rounded-2xl object-cover w-full h-[250px]"
                src="/assets/image-blur-placeholder.png"
                alt="netflix-clone"
              />
              <div className="flex justify-end z-[1] -mt-[25px] mr-[15px] lg:-mr-[25px]">
                <div className="bg-[#241f21] py-2 w-min h-min rounded-xl px-4">
                  <span className="text-4xl text-white tracking-wider">03</span>
                </div>
              </div>
              <h1 className="pl-5 transition-all ease-in-out duration-500 text-black group-hover:text-white text-2xl w-[300px] -mt-[15px]">
                Netflix clone
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
