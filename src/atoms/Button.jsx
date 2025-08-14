const Button = ({ children, icon }) => {
    return (
        <button className='absolute bottom-10 right-10 z-10 bg-blue-600 text-white rounded-xl flex flex-row p-4'>
            {icon}
            {children}
        </button>
    );
};

export default Button;
