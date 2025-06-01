import { Link } from "react-router-dom";
function Navbar() {
  const nav_links = [
    {
      name: "Home",
      link: "/Divine-Portfolio/",
      label: "home",
    },
    {
      name: "About Me",
      link: "/Divine-Portfolio/About",
      label: "About Me",
    },
    {
      name: "Projects",
      link: "/Divine-Portfolio/Projects",
      label: "Projects",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between w-full items-center  p-5">
        <div className="flex">
          <img src="/img/logo.png" alt="" height={15} width={20} />
          <span className=" font-bold text-2xl">Divine</span>
        </div>
        <div className="nav-links pointer-events-auto">
          <ul className="flex gap-15 ">
            {nav_links.map((nav_link) => {
              return (
                <li key={nav_link.label}>
                  <Link to={nav_link.link} className="font-semibold">
                    {nav_link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
