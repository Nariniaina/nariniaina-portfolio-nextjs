import tw from "tailwind-styled-components";
import HeaderOption from "./HeaderOption";
import { EyeIcon, FireIcon, PresentationChartBarIcon, CodeIcon, ArrowSmDownIcon } from "@heroicons/react/solid"
import TypeWriter from "react-typewriter";

function Header({ data }) {
    if (data) {
        var name = data.name;
        var bio = data.bio;
        var occupation = data.occupation;
    }

    return (
        <Container>
            <HeaderBackground src="../images/header-background.jpg" alt=""/>
            <HeaderOptions>
                <HeaderOption Icon={EyeIcon} title="Let's take a look" />
                <HeaderOption Icon={FireIcon} title="My goals" />
                <HeaderOption Icon={PresentationChartBarIcon} title="My special projects" />
                <HeaderOption Icon={CodeIcon} title="Everything else ?" />
            </HeaderOptions>
            <HeaderContent>
                <HeaderLeft>
                    <HeaderInfo><TypeWriter typing={0.5}>{data ? `Im ${name} from Madagascar and I am a ${occupation}` : null}</TypeWriter></HeaderInfo>
                    <HeaderDescription>{bio}</HeaderDescription>
                </HeaderLeft>
                <HeaderBottom>
                    <ArrowSmDownIcon className="h-7" />
                </HeaderBottom>
                <HeaderRight>
                    <HeaderDate>Build specialy for the Day 1 Challenge #PAPAChallenge</HeaderDate>
                    <HeaderProfile src="../images/profilepic.JPG" alt="" />
                </HeaderRight>
            </HeaderContent>
        </Container>
    )
}

export default Header

const Container = tw.header`
    h-screen relative z-0
`;

const HeaderBottom = tw.div`
    flex items-end justify-center text-white transition duration-550 animate-bounce
`;

const HeaderBackground = tw.img`
    h-screen absolute -z-10 object-cover w-full brightness-50
`;

const HeaderProfile = tw.img`
    ml-auto mt-10 rounded-full w-60 h-60 cursor-pointer object-cover transition duration-150 transform hover:scale-110 hover:brightness-50
`;

const HeaderOptions = tw.div`
    flex space-x-8 items-center justify-center p-7 w-full
`;

const HeaderContent = tw.div`
    flex
`;

const HeaderLeft = tw.div`
    ml-12 mt-12
    p-7
    flex-1 w-64
`;

const HeaderRight = tw.div`
    flex-1 w-32
    ml-12 mt-12 mr-12
    p-7
`;

const HeaderInfo = tw.h1`
    text-6xl text-white font-extrabold
`;

const HeaderDescription = tw.h1`
    text-xl text-white font-normal mt-6
`;

const HeaderDate = tw.p`
    text-white flex justify-end text-2xl
`;