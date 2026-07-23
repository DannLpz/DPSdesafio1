import { Product } from '../types/Product';
import ProductCard from './ProductCard';
import '../styles/product-grid.css';

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  // Manejo de estado vacío en caso de que la búsqueda no arroje resultados
  if (products.length === 0) {
    return <p className="no-results">No se encontraron productos con ese nombre.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}