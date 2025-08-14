import MainImage from '../molecules/MainImage';
import MainTitle from '../molecules/MainTitle';
MainImage;
const HeroSection = () => {
    return (
        <>
            <section className=' relative h-screen flex flex-col justify-center items-center '>
                <MainImage></MainImage>
                <MainTitle></MainTitle>
            </section>
        </>
    );
};

export default HeroSection;
