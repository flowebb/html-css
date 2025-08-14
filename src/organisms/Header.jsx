import MenuIcon from '../atoms/MenuIcon';
const Header = () => {
    return (
        <>
            <header className='fixed z-20 top-0 left-0 w-full '>
                <div className='container mx-auto flex justify-between p-6 '>
                    <img src='logo.svg' alt='' />

                    <MenuIcon></MenuIcon>
                </div>
            </header>
        </>
    );
};

export default Header;
