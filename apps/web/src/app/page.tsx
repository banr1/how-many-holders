// app/page.tsx

'use client';

import { useState } from 'react';

import NHoldersTable from '@/components/n-holders-table';
import { ChainId } from '@/types/chain-id';

export default function Home() {
  return (
    <div className='mx-2 p-4'>
      <h1 className='text-2xl font-bold mb-4'>How Many Holders?</h1>
      <NHoldersTable />
    </div>
  );
}
