import ServiceTitle from '../atoms/ServiceTitle';
const ServiceTitleInner = ({ title, children }) => {
    return (
        <>
            <div className='absolute z-10 top-10 left-10 '>
                <ServiceTitle
                    y={200}
                    delay={0}
                    textSize='text-[30px]'
                    fontWeight='font-bold'
                >
                    {title}
                </ServiceTitle>
                <ServiceTitle
                    y={200}
                    delay={0}
                    textSize='text-[16px]'
                    fontWeight='font-bold'
                >
                    {children}
                </ServiceTitle>
            </div>
        </>
    );
};
export default ServiceTitleInner;
