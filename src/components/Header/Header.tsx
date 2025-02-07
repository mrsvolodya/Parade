import CompanyLogo from "./CompanyLogo";
import SignOutButton from "./SignOutButton";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-header-bg min-h-10 sm:min-h-20 px-2 sm:px-5 sticky top-0 z-10">
      <div>
        <CompanyLogo />
      </div>
      <nav className="flex items-center space-x-2 sm:space-x-16">
        <UserProfile />

        <SignOutButton />
      </nav>
    </header>
  );
};

export default Header;
