'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { clearCart } from '../redux/cartSlice';
import '../styles/navbar.css';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Obtenemos los items del estado global
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  // Cálculos dinámicos requeridos por la rúbrica
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">📚 MangaStore</Link>
      </div>
      
      <div className="navbar-links">
        <Link href="/" className="nav-link">Catálogo</Link>
        <Link href="/dashboard" className="nav-link">Dashboard Analytics</Link>
        
        <div className="cart-container">
          <button 
            className="cart-button" 
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            🛒 Carrito <span className="badge">{totalItems}</span>
          </button>

          {/* Menú desplegable del carrito */}
          {isCartOpen && (
            <div className="cart-dropdown">
              {cartItems.length === 0 ? (
                <p className="empty-cart">Tu carrito está vacío.</p>
              ) : (
                <>
                  <div className="cart-items-wrapper">
                    {cartItems.map((item) => (
                      <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-info">
                          <p className="item-title">{item.title}</p>
                          <p className="item-price">Unidad: ${item.price.toFixed(2)}</p>
                          <p className="item-qty">Cantidad: {item.quantity}</p>
                          <p className="item-subtotal">
                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="cart-footer">
                    <p className="cart-total">Total a pagar: ${totalPrice.toFixed(2)}</p>
                    <button 
                      className="clear-cart-btn"
                      onClick={() => dispatch(clearCart())}
                    >
                      🗑️ Vaciar Carrito
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}