import React from "react";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const ASearchInput = ({ search, setSearch }: Props) => {

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-textPrimary text-xs rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2"
        placeholder="Search by product name"
        value={search}
        onChange={handleChangeSearch}
      />
      <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ASearchInput;
