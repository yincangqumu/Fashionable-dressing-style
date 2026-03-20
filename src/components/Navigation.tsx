/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Menu, Search, Home, Scan, Compass as Explore, User as Person, LucideIcon } from 'lucide-react';
import { Tab } from '../types';

export const TopBar = () => (
  <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
    <div className="flex justify-between items-center px-6 py-4 w-full">
      <button className="text-on-background hover:opacity-70 transition-opacity">
        <Menu size={24} />
      </button>
      <h1 className="font-headline font-black italic text-on-background tracking-tighter text-xl">TRACK & TREND</h1>
      <button className="text-on-background hover:opacity-70 transition-opacity">
        <Search size={24} />
      </button>
    </div>
  </header>
);

interface NavItemProps {
  tab: Tab;
  icon: LucideIcon;
  label: string;
  activeTab: Tab;
  setActiveTab: (t: Tab) => void;
}

const NavItem = ({ tab, icon: Icon, label, activeTab, setActiveTab }: NavItemProps) => {
  const isActive = activeTab === tab;
  return (
    <button 
      onClick={() => setActiveTab(tab)}
      className={`flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90 duration-300 ease-out ${isActive ? 'bg-primary-container text-on-primary-container rounded-xl' : 'text-on-background opacity-50 hover:opacity-100'}`}
    >
      <Icon size={20} strokeWidth={isActive ? 3 : 2} />
      <span className="font-body font-medium text-[10px] uppercase tracking-widest mt-1">{label}</span>
    </button>
  );
};

export const BottomBar = ({ activeTab, setActiveTab }: { activeTab: Tab, setActiveTab: (t: Tab) => void }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-background/80 backdrop-blur-xl z-50 border-t border-outline-variant/20 shadow-[0_-4px_24px_rgba(45,47,47,0.05)] rounded-t-3xl">
      <NavItem tab="home" icon={Home} label="Home" activeTab={activeTab} setActiveTab={setActiveTab} />
      <NavItem tab="scan" icon={Scan} label="Scan" activeTab={activeTab} setActiveTab={setActiveTab} />
      <NavItem tab="inspiration" icon={Explore} label="Hub" activeTab={activeTab} setActiveTab={setActiveTab} />
      <NavItem tab="profile" icon={Person} label="Profile" activeTab={activeTab} setActiveTab={setActiveTab} />
    </nav>
  );
};
