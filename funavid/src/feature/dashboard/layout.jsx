import React from 'react';

import { SidebarLayout } from './components/sidebar';
import { NavbarHome } from './components/navbar';
import { Outlet } from 'react-router-dom';

export const LayoutHome = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <SidebarLayout />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <NavbarHome />

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <div className="max-w-full ">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};