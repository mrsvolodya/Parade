import LogOutIcon from "../../assets/icons/log-out-icon.svg";

const SignOutButton = () => (
  <button className="flex items-center space-x-2 text-white hover:text-gray-300">
    <img
      src={LogOutIcon}
      alt="Logout Icon"
      className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
    />
    <span className="text-[12px] sm:text-[15px] sm: leading-[22px]">
      Sign Out
    </span>
  </button>
);

export default SignOutButton;
