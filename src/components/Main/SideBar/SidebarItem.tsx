import { NavLink } from "react-router-dom";
import cn from "classnames";
import ArrowRightIcon from "../../UIElements/ArrowRightIcon";

interface SideBarItemProps {
  title: string;
  path: string;
}

const SidebarItem: React.FC<SideBarItemProps> = ({ title, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn(
          "flex justify-between items-center cursor-pointer p-2 rounded-md text-white hover:bg-gray-800 transition-colors",
          { "text-yellow-400 bg-gray-800": isActive }
        )
      }
    >
      {({ isActive }) => (
        <>
          <span className="text-lg">{title}</span>
          <ArrowRightIcon isActive={isActive} />
        </>
      )}
    </NavLink>
  );
};

export default SidebarItem;
