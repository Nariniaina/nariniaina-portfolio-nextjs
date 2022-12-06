import Head from "next/head";
import Image from "next/image";

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
            <div className="flex flex-row gap-4 items-end sm:items-center text-lg">
              <p>Tous les projets</p>
              <div className="p-2.5 bg-[#241f21] rounded-lg h-min w-min">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                  />
                </svg>
              </div>
            </div>
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
