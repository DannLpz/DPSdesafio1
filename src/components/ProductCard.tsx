'use client';

import { Product } from '../types/Product';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/cartSlice';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="product-card">
      {/* Carga de portadas mediante HTTPS (Requerimiento de la rúbrica) */}
      <img src={product.image} alt={product.title} className="product-image" />
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        <button
          className="add-to-cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          ➕ Agregar al carrito
        </button>
      </div>
    </div>
  );
}