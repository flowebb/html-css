import ServiceTitleOuter from '../molecules/ServiceTitleOuter';
import ServiceTitleInner from '../molecules/ServiceTitleInner';
import ServiceImage from '../molecules/ServiceImage';

const ServiceSection = () => {
    return (
        <>
            <div className='  h-screen  bg-gray-700'>
                <div className='max-w-4xl mx-auto pt-20'>
                    <div className=' container mx-auto   '>
                        <ServiceTitleOuter>
                            {' '}
                            끊임없이 확장되는 이동 경험<br></br>
                            쏘카의 다양한 서비스
                        </ServiceTitleOuter>
                        <div className='h-28' />

                        <div className='grid grid-rows-3 grid-cols-2 gap-4'>
                            <div className='relative'>
                                <ServiceTitleInner title='쏘카플랜'>
                                    한달이상 원하는 만큼 내 차처럼 이용하는
                                    <br></br>중장기 차량 대여 서비스
                                </ServiceTitleInner>
                                <ServiceImage src='service1.jpg'></ServiceImage>
                            </div>
                            <div className='relative'>
                                <ServiceTitleInner></ServiceTitleInner>
                                <ServiceImage></ServiceImage>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSection;
