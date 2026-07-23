'use client';

import '../styles/search.css';

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: Props) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar mangas por título..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}