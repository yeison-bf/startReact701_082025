import React from 'react'

import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  FileText, 
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SidebarLayout = () => {
    return (
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">Admin Panel</span>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    <li>
                        <Link to="/dashboard/home" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-medium">
                            <Home size={20} />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/users" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                            <Users size={20} />
                            <span>Usuarios</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                            <ShoppingCart size={20} />
                            <span>Productos</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                            <BarChart3 size={20} />
                            <span>Reportes</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                            <FileText size={20} />
                            <span>Documentos</span>
                        </Link>
                    </li>
                </ul>

                {/* Settings Section */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <ul className="space-y-2">
                        <li>
                            <Link className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                <Settings size={20} />
                                <span>Configuración</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}
