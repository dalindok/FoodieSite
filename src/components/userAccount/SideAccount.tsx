import profile from "../../assets/sideAccount/Profile.png";
interface SideAccountProps {
  onNavigate: (link: string) => void;
}
const SideAccount: React.FC<SideAccountProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-screen w-60 md:w-72 shadow-xl font-zain">
      <div className="flex flex-col ">
        {/* Profile Picture */}
        <div className="flex flex-row mt-10 mx-auto">
          <img
            src={profile}
            alt="User account Profile"
            className="w-14 h-14 bg-gray-300 rounded-full mb-4"
          />

          {/* User Information */}
          <div className="my-auto ml-5">
            <h1 className="text-2xl font-bold">maya</h1>
            <p className="text-gray-500">012 234 345</p>
            <p className="text-gray-500">Female</p>
          </div>
        </div>
        {/* Divider */}
        <div className="w-32 md:w-40 mx-auto border-t border-customColor my-6"></div>
        <div className="ml-5">
          {/* Buttons */}
          <button
            onClick={() => onNavigate("/list-booking")}
            className="w-48 md:w-60 border border-customColor text-black font-semibold py-1 rounded-lg mb-4 hover:bg-customColor transition">
            My Booking
          </button>
          <button
            onClick={() => onNavigate("/edit-profile")}
            className="w-48 md:w-60 border border-customColor text-black font-semibold py-1 rounded-lg hover:bg-customColor transition">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideAccount;
