import tw from "tailwind-styled-components";

function HeaderOption({Icon, title}) {
    return (
        <Container>
            <Icon className="h-7" />
            <HeaderTitle>{title}</HeaderTitle>
        </Container>
    )
}

export default HeaderOption

const Container = tw.div`
    flex text-gray-400 space-x-2 p-4 rounded-full hover:bg-[#191B27] cursor-pointer
`;

const HeaderTitle = tw.h4`
    font-bold text-white
`;