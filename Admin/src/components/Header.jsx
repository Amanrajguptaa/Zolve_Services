import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-8 md:p-4 bg-[#F6F6F6] w-full border-b-2 border-b-black/25 px-10 fixed top-0">
      <div className="text-2xl sm:text-3xl font-bold text-black italic cursor-pointer flex-1 text-center md:text-left">
        Zolve
      </div>

      <div className="hidden sm:flex items-center space-x-3 sm:space-x-4">
        <span className="cursor-pointer bi bi-search bg-[#1a94c2] flex items-center justify-center p-2 text-white rounded-full text-sm sm:text-base hover:scale-[1.1] duration-300 ease-in-out"></span>
        <span className="cursor-pointer bi bi-bell bg-[#1a94c2] flex items-center justify-center p-2 text-white rounded-full text-sm sm:text-base hover:scale-[1.1] duration-300 ease-in-out"></span>
        <span className="cursor-pointer bi bi-person-fill bg-[#1a94c2] flex items-center justify-center p-2 text-white rounded-full text-sm sm:text-base hover:scale-[1.1] duration-300 ease-in-out"></span>
      </div>
    </div>
  );
};

export default Header;
