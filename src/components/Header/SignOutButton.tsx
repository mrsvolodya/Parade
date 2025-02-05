import LogOutIcon from "../../assets/icons/log-out-icon.svg";

const SignOutButton = () => (
  <button className="flex items-center space-x-2 text-white hover:text-gray-300">
    <img src={LogOutIcon} alt="Logout Icon" className="w-4 h-4 rounded-full" />
    <span>Sign Out</span>
  </button>
);

export default SignOutButton;
