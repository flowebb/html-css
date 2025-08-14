import Image from '../atoms/Image';
const MainImage = () => {
    return (
        <>
            <Image
                src='socar.avif'
                className='absolute inset-0 w-full h-full object-cover'
            ></Image>
        </>
    );
};

export default MainImage;
