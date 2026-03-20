/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, PlusCircle } from 'lucide-react';
import { OUTFITS } from '../constants';

export const ProfileCloset = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-24 pb-32 px-6 max-w-7xl mx-auto"
  >
    <section className="mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-container bg-surface-container-highest">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfvzsGwL9HOY1sbgsnaEoGpBeMkL4M7wCbcU35pU0gwKGWHMW9b1oRve4vRSkw6knI1Yp_nGFJ1o6d6OI-vcRA-5a8y_YNVVMaWUmYVhbmNg41lJSXCdo6awUNhYq6Sh6DJI7PM67a-vv6Y48TuIacrlndIfjBIjQeymjGpoa1mNgUXM5Co5LDvmSptWhHq8GYZvGladC6b5KxMh49k8cKzC3ar2nj4wvD34Isq81l7fKyeKEpWJviddRinBrV3vfxfaCHrY1pO5A" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-headline font-bold text-xs shadow-xl">
            LEVEL 4
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter mb-2">MY CLOSET</h2>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="font-headline font-bold text-xl text-on-surface">Elite Member</span>
            <div className="h-1 w-1 rounded-full bg-outline-variant"></div>
            <span className="font-label text-sm uppercase tracking-widest opacity-70">Momentum Level 4</span>
          </div>
        </div>
      </div>
    </section>

    <nav className="flex gap-8 mb-10 border-b border-surface-container-highest overflow-x-auto no-scrollbar">
      <button className="pb-4 border-b-4 border-primary-fixed text-on-background font-headline font-bold text-lg whitespace-nowrap">
        My Outfits
      </button>
      <button className="pb-4 border-b-4 border-transparent text-on-surface-variant font-headline font-bold text-lg whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
        Saved Items
      </button>
      <button className="pb-4 border-b-4 border-transparent text-on-surface-variant font-headline font-bold text-lg whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
        Wishlist
      </button>
    </nav>

    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low cursor-pointer">
        <img 
          src={OUTFITS[0].image} 
          alt="Featured" 
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex flex-col justify-end p-6">
          <span className="font-label text-[10px] text-primary-container uppercase tracking-widest mb-1">Last worn: {OUTFITS[0].lastWorn}</span>
          <h3 className="font-headline font-bold text-2xl text-white leading-tight">{OUTFITS[0].title}</h3>
          <div className="flex gap-2 mt-3">
            {OUTFITS[0].tags.map(tag => (
              <span key={tag} className="px-2 py-1 rounded bg-white/10 backdrop-blur-md text-[10px] text-white font-bold">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container cursor-pointer">
        <img 
          src={OUTFITS[1].image} 
          alt="Outfit 2" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4">
          <Heart size={20} className="text-white fill-white" />
        </div>
      </div>

      <div className="col-span-2 h-32 md:h-auto flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-xl hover:border-primary-fixed hover:bg-primary-fixed/5 transition-all cursor-pointer">
        <PlusCircle size={32} className="mb-2 text-outline" />
        <span className="font-headline font-bold text-sm tracking-widest uppercase">UPLOAD OUTFIT</span>
      </div>
    </section>
  </motion.div>
);
