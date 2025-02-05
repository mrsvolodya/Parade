import { useState } from "react";
import SearchIcon from "../../../assets/icons/search-icon.svg";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="w-full">
      <div className="relative flex">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border-1 border-r-0 border-border-color  rounded-l-md pl-4 h-[50px]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="bg-yellow p-3 rounded-r-md hover:bg-yellow-500 transition-colors border-1 border-l-0 border-border-color cursor-pointer"
          onClick={handleSearch}
        >
          <img src={SearchIcon} alt="Search Icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
