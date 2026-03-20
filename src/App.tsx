/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Tab } from './types';
import { TopBar, BottomBar } from './components/Navigation';
import { ScanResults } from './components/ScanResults';
import { TrendingNow } from './components/TrendingNow';
import { InspirationHub } from './components/InspirationHub';
import { ProfileCloset } from './components/ProfileCloset';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      <TopBar />
      
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <ScanResults key="home" />}
          {activeTab === 'scan' && <TrendingNow key="scan" />}
          {activeTab === 'inspiration' && <InspirationHub key="inspiration" />}
          {activeTab === 'profile' && <ProfileCloset key="profile" />}
        </AnimatePresence>
      </main>

      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
