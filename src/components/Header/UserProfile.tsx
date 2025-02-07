import UserIcon from "../../assets/icons/user-icon.svg";

const UserProfile = ({ email = "mike-dawson@gmail.com" }) => (
  <div className="flex items-center space-x-[6px] sm:space-x-[10px]">
    <img src={UserIcon} alt="User Avatar" className="w-4 h-4 rounded-full" />
    <p className="text-[12px] sm:text-[15px] sm: leading-[22px]">{email}</p>
  </div>
);

export default UserProfile;
