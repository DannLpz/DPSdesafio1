'use client';

import { useAppSelector } from '../redux/hooks';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SalesChart() {
  const cartItems = useAppSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div className="chart-container empty-chart-msg">
        <p>📊 Agrega productos al carrito para visualizar los datos del gráfico.</p>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <h2>Cantidad agregada por Producto</h2>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={cartItems} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="title" 
              angle={-45} 
              textAnchor="end" 
              interval={0}
              height={100}
              tick={{ fontSize: 12 }}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#e94560" name="Unidades en Carrito" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}