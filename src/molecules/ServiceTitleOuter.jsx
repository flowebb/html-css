import ServiceTitle from '../atoms/ServiceTitle';
const ServiceTitleOuter = ({ children }) => {
    return (
        <>
            <div className='container mx-auto pt-10'>
                <div className=' text-white font-bold'>
                    <ServiceTitle
                        y={100}
                        delay={0}
                        textSize='text-[35px]'
                        fontWeight='font-bold'
                    >
                        {children}
                    </ServiceTitle>
                </div>
            </div>
        </>
    );
};

export default ServiceTitleOuter;
