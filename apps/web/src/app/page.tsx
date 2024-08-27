// app/page.tsx

'use client';

import { useState } from 'react';

import NHoldersTable from '@/components/n-holders-table';
import { ChainId } from '@/types/chain-id';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60" 
        style={{ backgroundImage: "url('/background.webp')" }}
      ></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">How Many Holders?</h1>
          <NHoldersTable />
        </div>
      </div>
    </div>
  );
}
