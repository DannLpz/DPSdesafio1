'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';
import { books } from '../data/books';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica exacta del requerimiento: filtro dinámico, insensible a mayúsculas, solo por title
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <Navbar />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {/* Pasamos el array filtrado, si el input está vacío, filteredBooks contiene todo el catálogo */}
      <ProductGrid products={filteredBooks} />
    </main>
  );
}