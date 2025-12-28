'use client';

import React from 'react';

const Dashboard = () => {
    const stats = [
        { label: 'Total Orders', value: '124' },
        { label: 'Revenue', value: '14,250 AZN' },
        { label: 'Pending WhatsApp', value: '12' },
    ];

    const products = [
        { name: 'Minimalist Bifold Wallet', stock: 15, price: '85 AZN' },
        { name: 'Classic Leather Belt', stock: 8, price: '110 AZN' },
        { name: 'Premium Gift Bundle', stock: 4, price: '240 AZN' },
    ];

    return (
        <div className="min-h-screen bg-zinc-50 font-sans p-8">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <header className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-serif text-leather-pitch">Admin Dashboard</h1>
                        <p className="text-sm text-zinc-500 mt-1">Manage your craft and connection.</p>
                    </div>
                    <button className="bg-leather-pitch text-white px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-luxury hover:bg-leather-tan transition-all">
                        Add Product +
                    </button>
                </header>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-8 rounded-luxury border border-zinc-100 shadow-subtle">
                            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">{stat.label}</p>
                            <p className="text-3xl font-serif text-leather-pitch mt-2">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Product Table */}
                <div className="bg-white rounded-luxury border border-zinc-100 shadow-xl overflow-hidden">
                    <div className="p-6 border-b border-zinc-50 flex justify-between items-center">
                        <h2 className="font-serif text-xl">Active Products</h2>
                        <span className="text-xs font-bold text-leather-tan uppercase tracking-widest cursor-pointer">View All</span>
                    </div>
                    <table className="w-full text-left">
                        <thead className="bg-zinc-50 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                            <tr>
                                <th className="px-6 py-4">Product Name</th>
                                <th className="px-6 py-4">Stock</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-50 text-sm">
                            {products.map((p, i) => (
                                <tr key={i} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-leather-pitch">{p.name}</td>
                                    <td className="px-6 py-4 text-zinc-500">{p.stock} units</td>
                                    <td className="px-6 py-4 text-zinc-500">{p.price}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex space-x-4">
                                            <button className="text-leather-tan font-bold uppercase text-[10px] tracking-widest hover:underline">Edit</button>
                                            <button className="text-red-400 font-bold uppercase text-[10px] tracking-widest hover:underline">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
