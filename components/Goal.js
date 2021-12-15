import tw from 'tailwind-styled-components';
import { EmojiHappyIcon, BriefcaseIcon, LightBulbIcon } from "@heroicons/react/outline"
import GoalOption from './GoalOption';

function Goal() {
    return (
        <Container>
            <GoalLeft>
                <GoalOption Icon={EmojiHappyIcon} number={1} title="Have fun when coding" />
                <GoalOption Icon={BriefcaseIcon} number={2} title="Use my skills on all my work" />
                <GoalOption Icon={LightBulbIcon} number={3} title="Keep growing. Like the #PAPAFAM" />
            </GoalLeft>
            <GoalRight>
                <GoalTitle>An overview of my goals</GoalTitle>
                <GoalSubTitle>- In the life there is a moment to Push up and take in hand the future.</GoalSubTitle>
                <GoalSubTitle>- I really like the improvments I learn when we develop or coding things, there are many possibility.</GoalSubTitle>
                <GoalSubTitle>- I want these be a big part to realize my goal and help my country and all over.</GoalSubTitle>
            </GoalRight>
        </Container>
    )
}

export default Goal

const Container = tw.div`
    flex pb-20
`;

const GoalLeft = tw.div`
    ml-12 mt-12
    p-7
    flex-1 w-64 w-full
    flex
    flex-col
    space-y-8
`;

const GoalRight = tw.div`
    flex-1 w-32
    ml-12 mt-12 mr-12
    p-7
`;

const GoalTitle = tw.p`
    text-6xl text-white font-bold
`;

const GoalSubTitle = tw.p`
    text-2xl text-white font-normal mt-6
`;