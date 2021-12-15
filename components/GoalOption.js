import tw from 'tailwind-styled-components';

function GoalOption({ Icon, title, number }) {
    return (
        <Container>
            <Icon className="h-12 mr-10 text-[#C64FFF]" />
            <GoalInfo>
                <GoalNumber>{number}</GoalNumber>
                <GoalTitle>{title}</GoalTitle>
            </GoalInfo>
        </Container>
    )
}

export default GoalOption

const Container = tw.div`
    flex space-x-6
    items-center
`;

const GoalInfo = tw.div`
    border-white w-full p-6 pl-10 pr-10
    bg-[#111827]
    hover:bg-[#111F35]
    hover:border-transparent
`;

const GoalNumber = tw.div`
    text-6xl text-white font-extrabold 
`;

const GoalTitle = tw.div`
    text-white uppercase mt-5
`;