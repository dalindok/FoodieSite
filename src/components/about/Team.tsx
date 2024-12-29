import dalin from "../../assets/about/dalin.png";
import nita from "../../assets/about/nita.png";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Team = () => {
  return (
    <div className="text-center px-4 py-10">
      <h2 className="text-4xl font-zain font-bold pb-6">Our Team</h2>
      <p className="text-lg px-10 sm:px-60">
        We bring people together through the joy of great food. Discover local
        restaurants, easily book a table, and savor unique dining
        experiences—all in one place.
      </p>
      <div className="flex items-center justify-center space-y-14 sm:space-y-0 sm:space-x-40 py-10 flex-col sm:flex-row">
        <div className="w-96 shadow-2xl shadow-slate-200">
          <img
            src={dalin}
            alt="dalin"
            className="w-96 h-72 object-cover rounded-t-3xl"
          />
          <p className="font-zain text-3xl pt-8">Dok Dalin</p>
          <p className="text-md pt-2">Developer</p>
          <div className="flex justify-center space-x-10 p-6">
            <FaGithub size={40} />
            <MdOutlineAlternateEmail size={40} />
          </div>
        </div>
        <div className="w-96 shadow-2xl shadow-slate-200">
          <img
            src={nita}
            alt="nita"
            className="w-96 h-72 object-cover rounded-t-3xl"
          />
          <p className="font-zain text-3xl pt-8">Chom Thonita</p>
          <p className="text-md pt-2">Developer</p>
          <div className="flex flex-row justify-center space-x-10 p-6">
            <FaGithub size={40} />
            <MdOutlineAlternateEmail size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
