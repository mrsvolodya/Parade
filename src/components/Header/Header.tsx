import CompanyLogo from "./CompanyLogo";
import SignOutButton from "./SignOutButton";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-header-bg h-20 px-5 sticky top-0">
      <div>
        <CompanyLogo />
      </div>
      <nav className="flex items-center space-x-16">
        <UserProfile />

        <SignOutButton />
      </nav>
    </header>
  );
};

export default Header;
