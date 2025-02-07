import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="bg-second-bg sm:max-w-[290px] sm:min-w-[150px] sm:w-full h-full flex flex-col">
      <ul className="p-4 space-y-2">
        <SidebarItem title="Product List" path="/products" />
        <SidebarItem title="My Account" path="/account" />
      </ul>
    </aside>
  );
};

export default Sidebar;
