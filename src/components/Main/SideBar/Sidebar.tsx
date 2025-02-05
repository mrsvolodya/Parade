import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="bg-second-bg w-[290px] h-full flex flex-col">
      <ul className="p-4 space-y-2">
        <SidebarItem title="Product List" path="/products" />
        <SidebarItem title="My Account" path="/account" />
      </ul>
    </aside>
  );
};

export default Sidebar;
