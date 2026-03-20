/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Search, Settings, Heart } from 'lucide-react';
import { TRENDING } from '../constants';

export const TrendingNow = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-24 pb-32 px-6 max-w-7xl mx-auto"
  >
    <section className="mb-10">
      <div className="relative group">
        <input 
          className="w-full bg-surface-container border-none py-4 px-12 rounded-xl text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary-container transition-all" 
          placeholder="Explore outfits" 
          type="text"
        />
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
        <Settings size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer" />
      </div>
      <div className="flex gap-3 mt-6 overflow-x-auto pb-2 no-scrollbar">
        {['All Outfits', 'Hiking', 'Gym Flow', 'Street Style'].map((filter, i) => (
          <span 
            key={filter} 
            className={`px-5 py-2 rounded-full font-label font-bold text-xs uppercase tracking-widest whitespace-nowrap cursor-pointer ${i === 0 ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container text-on-surface-variant'}`}
          >
            {filter}
          </span>
        ))}
      </div>
    </section>

    <header className="mb-8 flex items-end justify-between">
      <h2 className="font-headline font-black text-4xl tracking-tighter text-on-background uppercase">Trending Now</h2>
      <div className="h-1 w-24 bg-primary-fixed mb-2"></div>
    </header>

    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      {TRENDING.map(item => (
        <div key={item.id} className="break-inside-avoid group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl bg-surface-container">
            <img 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
              src={item.image} 
              alt={item.category}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface">
              {item.category}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border-2 border-primary-container">
                <img src={item.user.avatar} alt={item.user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="font-headline font-bold text-sm tracking-tight">{item.user.name}</span>
            </div>
            <div className="flex items-center gap-1 text-on-surface-variant">
              <Heart size={16} className="fill-current" />
              <span className="font-label text-xs font-bold">{item.likes}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
