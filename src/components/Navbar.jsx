const Navbar = () => {
  return (
    <>
      <div className="absolute w-full flex justify-between items-center p-9 pb-1  md:p-14 md:pb-9 md:font-light text-white">
        <h1 className="sacramento first-letter:flex font-bold text-2xl md:text-3xl">
          VW.
        </h1>
        <div className="flex ">
          <a className="px-4 text-lg md:text-2xl hidden md:block" href="/">
            Home
          </a>
          <a className="px-4 text-lg md:text-2xl hidden md:block" href="/about">
            About
          </a>
          <a
            className="px-4 text-lg md:text-2xl hidden md:block"
            href="/skills"
          >
            Skills
          </a>
          <a className="px-4 text-lg md:text-2xl hidden md:block" href="/">
            Project
          </a>
          <a className="px-4 text-lg md:text-2xl hidden md:block" href="/">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
