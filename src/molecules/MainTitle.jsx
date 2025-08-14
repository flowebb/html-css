import Title from '../atoms/Title';

const MainTitle = () => {
    return (
        <>
            <div className='relative z-10 text-center'>
                <Title
                    y={100}
                    delay={0}
                    textSize='text-[70px]'
                    fontWeight='font-bold'
                >
                    Lifetime Mobility
                </Title>
                <Title
                    y={30}
                    delay={0.7}
                    textSize='text-[30px]'
                    fontWeight='font-bold'
                >
                    라이프타임 모빌리티 플랫폼, 쏘카
                </Title>
            </div>
        </>
    );
};

export default MainTitle;
