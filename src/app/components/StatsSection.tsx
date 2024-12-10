'use client';
import React from 'react';
import './StatsSection.css'; // Import custom styles

function StatsSection() {
  return (
    <section className="stats-section py-12 bg-blue-900">
      <div className="container mx-auto px-4 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Stat 1 */}
          <div className="stat-item" data-aos="zoom-in">
            <h3 className="text-4xl font-bold">300K+</h3>
            <p className="text-lg">Retail Merchants</p>
          </div>

          {/* Stat 2 */}
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-lg">Banking Partners</p>
          </div>

          {/* Stat 3 */}
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="400">
            <h3 className="text-4xl font-bold">120+</h3>
            <p className="text-lg">Team of Employees</p>
          </div>

          {/* Stat 4 */}
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="600">
            <h3 className="text-4xl font-bold">90M+</h3>
            <p className="text-lg">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
