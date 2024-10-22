import HeaderIcon from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center py-6 border-b-2 mb-10">
                <h1 className='text-3xl font-extrabold'>Knowledge Cafe</h1>
                <img src={HeaderIcon} alt="" />
            </div>
        </div>
    );
};

export default Header;