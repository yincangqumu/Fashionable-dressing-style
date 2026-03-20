/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const InspirationHub = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-24 px-6 max-w-7xl mx-auto pb-32"
  >
    <section className="mb-12">
      <h2 className="font-headline font-extrabold text-5xl md:text-7xl text-on-background tracking-tighter mb-4 leading-none">
        INSPIRATION <span className="text-primary-fixed">HUB</span>
      </h2>
      <p className="font-label text-on-surface-variant max-w-md uppercase tracking-widest text-xs font-bold">
        Curated performance aesthetics for the modern athlete.
      </p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[500px] bg-surface-container cursor-pointer">
        <img 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKZyYaSKpc7lQa8gWU3_AW3NNFVPXzyHAIh4qFWq30N1K14U9mfS0c_cYvDcR3_AQY1rd60OuIHLELB8tmAohDNbCBFUmDHrucfSQxtJ99k3ogeCF0qEEXb716hroQoNQcID2l5TsAY9JHgiLvW5AAwofcjhyHXq0K_mMcTBvqt5GDiuuQlPzsjtxMKOyY0A2--Jn8Z96U_lbBBSH-u9Leqqti3c1bK56iWdd6_bziPoDaRCKEDkXuKB8yOoUSlp62wxfrwQXreU" 
          alt="Hiking"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
          <div>
            <span className="inline-block bg-primary-container text-on-primary-container font-label text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">Adventure Tech</span>
            <h3 className="font-headline font-black text-4xl text-white leading-none">HIKING PEAKS</h3>
          </div>
          <button className="bg-white text-on-surface p-4 rounded-xl active:scale-90 transition-all">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="md:col-span-4 group relative overflow-hidden rounded-xl h-[500px] bg-surface-container cursor-pointer">
        <img 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlE3x_5_1wjsAC_Nz-lEk4oTfawWWqYrsiDr_crIu9Of4mCf4YEfai3ryf040Cd3miSv6r9sO2MVCeBX80Yen8hFIdAZ2CyqVHVtzrBs9AffO3xr3nwCUt6DF4PFOtNTd_KJkiCbBiwmejAd0Zdkh65j2uyG-edAlU05_rEfCemEj4zgVVpuwKWeqLcNirXc_g0XYOpqw3y7lLRQdXZpM3ge5N7DeXUADTPIJs9Ya0DLcSC2Et0OfQvBAhxoNea_Jynmz7G5Qi4-0" 
          alt="Yoga"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <span className="inline-block bg-white/20 backdrop-blur-md text-white font-label text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">Zen Performance</span>
          <h3 className="font-headline font-black text-4xl text-white leading-none">YOGA FLOW</h3>
        </div>
      </div>
    </div>
  </motion.div>
);
