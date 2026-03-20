/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Heart, ShoppingBag, BrainCircuit as Psychology } from 'lucide-react';
import { PRODUCTS } from '../constants';

export const ScanResults = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="pt-20 pb-32"
  >
    <section className="px-6 mb-8">
      <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Intelligent Vision</span>
      <h2 className="font-headline font-extrabold text-4xl tracking-tighter text-on-background mt-2">AI SCAN RESULTS</h2>
    </section>

    <section className="relative w-full px-4 mb-12">
      <div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-container-highest">
        <img 
          className="w-full h-[500px] object-cover object-center scanned-image-container" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVBVR9mAXKimY_85eNEtfiXInQ7QvFjYNKt5S3UgMApjCqjN71tWq0pixp4oerzIT5kZqW76VtXofzlvOtjNBjRL0PHrOfiZR2Yvwz_kVkA-1R5UgVc_OKDG5ng9q3Dt5hV_GpKWvLnCa9DOr_boZTsVeIGkFhsxmTgLlPGzBuR7RI0mLsb_V7MGIP9wXUZvimB7qvxqO49XDbvptTJin9V40Yj_5l8yKNVzF_Ou2kI3EGQW2nqriUCvjRj7q4ksN5FDQ8CEVQTKY" 
          alt="Athlete"
          referrerPolicy="no-referrer"
        />
        
        {/* Tags */}
        <div className="absolute top-[35%] left-[55%] flex items-center group">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-6 h-6 bg-primary-container rounded-full animate-ping opacity-75"></div>
            <div className="w-4 h-4 bg-primary-container rounded-full border-2 border-on-surface shadow-lg z-10"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="ml-3 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl border border-outline-variant/20"
          >
            <p className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Identified</p>
            <p className="font-headline text-sm font-bold text-on-surface">Nike Sports Bra</p>
          </motion.div>
        </div>

        <div className="absolute top-[65%] left-[40%] flex items-center group">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-6 h-6 bg-primary-container rounded-full animate-ping opacity-75"></div>
            <div className="w-4 h-4 bg-primary-container rounded-full border-2 border-on-surface shadow-lg z-10"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="ml-3 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl border border-outline-variant/20"
          >
            <p className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Identified</p>
            <p className="font-headline text-sm font-bold text-on-surface">Black Performance Leggings</p>
          </motion.div>
        </div>

        <div className="absolute bottom-6 right-6 bg-on-surface/80 backdrop-blur-md text-surface px-4 py-2 rounded-full flex items-center gap-2">
          <CheckCircle size={14} className="text-primary-fixed" />
          <span className="font-label text-xs font-bold tracking-widest uppercase text-white">98% Match</span>
        </div>
      </div>
    </section>

    <section className="px-6 mb-12">
      <div className="flex items-baseline justify-between mb-8">
        <h3 className="font-headline font-bold text-2xl tracking-tight">Shop the Look</h3>
        <span className="font-label text-xs text-primary font-bold border-b-2 border-primary cursor-pointer">View Collection</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRODUCTS.map(product => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4 bg-surface-container">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={product.image} 
                alt={product.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-surface-container-lowest p-2 rounded-full shadow-md cursor-pointer">
                <Heart size={18} className="text-on-surface" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <p className="font-label text-[10px] text-secondary font-bold uppercase tracking-widest">{product.brand}</p>
                <p className="font-headline font-extrabold text-on-background">{product.price}</p>
              </div>
              <h4 className="font-headline font-bold text-lg text-on-background group-hover:text-primary transition-colors">{product.name}</h4>
              <button className="w-full mt-4 bg-surface-container-highest text-on-surface font-label font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95">
                <ShoppingBag size={16} />
                QUICK ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="px-6 mb-12">
      <div className="bg-surface-container-low rounded-2xl p-8 border-l-4 border-primary-fixed">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Psychology size={24} className="text-primary" />
          </div>
          <h3 className="font-headline font-bold text-xl">Material Insight</h3>
        </div>
        <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
          Our AI has identified high-density compression fabrics and moisture-wicking technology consistent with the <strong className="text-on-surface">Pro-Combat Series</strong>. These pieces are optimized for HIIT and strength training environments.
        </p>
        <div className="flex flex-wrap gap-2">
          {['DRY-FIT', 'COMPRESSION', '4-WAY STRETCH'].map(tag => (
            <span key={tag} className="px-4 py-2 bg-surface-container-highest rounded-full font-label text-[10px] font-bold tracking-widest">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);
