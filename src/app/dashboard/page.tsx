'use client';

import Navbar from '../../components/Navbar';
import Statistics from '../../components/Statistics';
import SalesChart from '../../components/SalesChart';
import '../../styles/dashboard.css';

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Panel Analítico</h1>
        <Statistics />
        <SalesChart />
      </div>
    </main>
  );
}