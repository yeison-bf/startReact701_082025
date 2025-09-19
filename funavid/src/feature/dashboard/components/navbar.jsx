import React from 'react'
import { 
  Menu,
  Bell,
  User,
  LogOut,
  ChevronDown,
} from 'lucide-react';
export const NavbarHome = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left side - Menu toggle and breadcrumb */}
            <div className="flex items-center space-x-4">
              <button className="lg:hidden p-2 rounded-lg hover:bg-gray-50">
                <Menu size={20} className="text-gray-600" />
              </button>
              <div className="text-sm text-gray-500">
                <span>Inicio</span>
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-medium">Dashboard</span>
              </div>
            </div>

            {/* Right side - User info and notifications */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="p-2 rounded-lg hover:bg-gray-50 relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User size={16} className="text-gray-600" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-800">Juan Pérez</p>
                  <p className="text-xs text-gray-500">Administrador</p>
                </div>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* Logout Button */}
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                <LogOut size={18} />
                <span className="hidden sm:block text-sm">Salir</span>
              </button>
            </div>
          </div>
        </header>
  )
}
