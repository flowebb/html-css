import ServiceTitleOuter from '../molecules/ServiceTitleOuter';
import ServiceTitle from '../atoms/ServiceTitle';
import ServiceImage from '../molecules/ServiceImage';
const SharingSection = () => {
    return (
        <>
            <div className='  h-screen bg-gray-900'>
                <div className='max-w-4xl mx-auto pt-20'>
                    <div className=' container mx-auto   '>
                        <ServiceTitleOuter>
                            차가 필요한 모든 순간<br></br>
                            쏘카 카셰어링
                        </ServiceTitleOuter>
                        <div className='h-32' />
                        <div className='relative'>
                            <div className='absolute z-10 top-10 left-10'>
                                <ServiceTitle
                                    y={200}
                                    delay={0}
                                    textSize='text-[30px]'
                                    fontWeight='font-bold'
                                    textColor='text-black'
                                >
                                    전국 어디서나
                                </ServiceTitle>
                                <ServiceTitle
                                    y={200}
                                    delay={0}
                                    textSize='text-[16px]'
                                    fontWeight='font-bold'
                                    textColor='text-gray-500'
                                >
                                    시간에 구애받지 않고<br></br>
                                    쏘카 앱으로 간편하게 예약
                                </ServiceTitle>
                            </div>
                            <ServiceImage src='slide.jpg'></ServiceImage>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SharingSection;
