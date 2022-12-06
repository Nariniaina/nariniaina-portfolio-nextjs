import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-[1000px]">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>
        <nav className="max-w-7xl mx-auto flex flex-row justify-between gap-5 py-5 px-6">
          <div className="flex sm:hidden"></div>
          <ul className="tracking-wide hidden sm:flex flex-row gap-10 text-slate-800 text-lg">
            <li className="cursor-pointer">A propos de moi</li>
            <li className="cursor-pointer">Compétences</li>
            <li className="cursor-pointer">Projets</li>
          </ul>
          <button className="tracking-wide bg-gray-100 font-semibold rounded-full px-4 py-2">
            Contactez-moi
          </button>
        </nav>
        <div className="grid grid-cols-2 lg:flex-row max-w-7xl mx-auto w-full">
          <div className="col-span-2 lg:col-span-1 order-1 lg:order-none mt-5 lg:mt-[55px] px-6">
            <div className="flex flex-col justify-center lg:justify-start lg:max-w-lg">
              <h1 className="leading-[65px] title-font text-5xl text-slate-900">
                Mon nom est R. Nariniaina
              </h1>
              <p className="mt-7 text-xl leading-[30px] text-slate-700">
                Je suis Nariniaina. Avec 4 ans d'expérience. Je perfectionne mon
                art qu'est le développement en tant qu'artisan de la
                technologie. Pour réaliser mon rêve et le votre.{" "}
              </p>
              <div className="mt-9 flex flex-wrap max-w-sm gap-3">
                <span className="whitespace-nowrap rounded-lg text-black font-semibold text-xl bg-[#fc8e3d] w-min px-3 py-1">
                  Javascript
                </span>
                <span className="whitespace-nowrap rounded-lg text-white font-semibold text-xl bg-[#fb6800] w-min px-3 py-1">
                  NextJS, ReactJS
                </span>
                <span className="whitespace-nowrap rounded-lg text-white font-semibold text-xl bg-[#241f21] w-min px-3 py-1">
                  NodeJS, Express
                </span>
                <span className="whitespace-nowrap rounded-lg text-black font-semibold text-xl bg-[#e1e1e1] w-min px-3 py-1">
                  MongoDB/Firebase
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 flex items-center justify-center h-full relative">
            <div
              className="hidden lg:flex w-min rounded-3xl 
                absolute bottom-[25%] right-[20px] lg:left-[50px] flex-col gap-1 bg-[#241f21]
                px-6 py-5"
            >
              <h4 className="text-5xl font-medium text-white">04+</h4>
              <p className="text-lg whitespace-nowrap text-white">
                ans d'expérience
              </p>
            </div>
            <img
              className="rounded-full object-contain max-w-[450px] max-h-[450px]"
              src="/assets/profile-pic.png"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10">
          <div className="flex flex-row justify-between gap-5">
            <h1 className="text-black text-4xl tracking-widerr">
              Derniers projets
            </h1>
            <div className="flex flex-row gap-4 items-center text-lg">
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
          <div className="mt-14 grid grid-cols-3">
            <div className="flex flex-col w-max">
              <img
                className="rounded-2xl object-cover w-[350px] h-[250px]"
                src="/assets/image-blur-placeholder.png"
              />
              <div className="flex justify-end z-[1] -mt-[25px] -mr-[25px]">
                <div className="bg-[#241f21] py-2 w-min h-min rounded-xl px-4">
                  <span className="text-4xl text-white">01</span>
                </div>
              </div>
              <h1 className="text-black text-2xl w-[300px] -mt-[15px]">
                Food mobile app : E-gouter za
              </h1>
            </div>
            <div className="mt-[100px] flex flex-col w-max">
              <img
                className="rounded-2xl object-cover w-[350px] h-[250px]"
                src="/assets/image-blur-placeholder.png"
              />
              <div className="flex justify-end z-[1] -mt-[25px] -mr-[25px]">
                <div className="bg-[#241f21] py-2 w-min h-min rounded-xl px-4">
                  <span className="text-4xl text-white tracking-wider">02</span>
                </div>
              </div>
              <h1 className="text-black text-2xl w-[300px] -mt-[15px]">
                Snapchat clone
              </h1>
            </div>
            <div className="mt-[200px] flex flex-col w-max">
              <img
                className="rounded-2xl object-cover w-[350px] h-[250px]"
                src="/assets/image-blur-placeholder.png"
              />
              <div className="flex justify-end z-[1] -mt-[25px] -mr-[25px]">
                <div className="bg-[#241f21] py-2 w-min h-min rounded-xl px-4">
                  <span className="text-4xl text-white tracking-wider">03</span>
                </div>
              </div>
              <h1 className="text-black text-2xl w-[300px] -mt-[15px]">
                Netflix clone
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
