import React from "react";

const NavHero = () => {
  const navigation = [
    {
      id: 4,
      label: "Gallery",
      path: "/gallery",
    },

    {
      id: 2,
      label: "About",
      path: "/about",
    },
    {
      id: 3,
      label: "Branding",
      path: "/branding",
    },

    {
      id: 5,
      label: "Blog",
      path: "/blog",
    },
    {
      id: 6,
      label: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="w-full h-full py-2 border-b-[1px] border-slate-300 bg-[url('/images/bg2.jpeg')]">
      <nav className=" w-full bg-transparent  hidden md:flex space-x-5 justify-center ">
        <div className=" text-3xl font-bold cursor-pointer text-red-600 p-1">
          HOME
        </div>
        {navigation.map((nav) => (
          <a href={nav.path} key={nav.id}>
            <div className=" text-white  p-1 font-semibold font-sans text-2xl cursor-pointer hover:text-3xl rounded-md ">
              {nav.label}
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavHero;
