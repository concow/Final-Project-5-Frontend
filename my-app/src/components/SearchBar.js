import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        id="search"
        placeholder="Search by Movie Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
