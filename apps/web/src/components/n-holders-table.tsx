// components/n-holders-table.tsx

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface TokenHolder {
  date: string;
  contractAddress: string;
  nHolders: number;
  createdAt: string;
  updatedAt: string;
}

export default function NHoldersTable(): JSX.Element {
  const [tokenHolders, setTokenHolders] = useState<TokenHolder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTokenHolders() {
      try {
        const response = await fetch('http://localhost:3000/api/csv-data', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTokenHolders(data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTokenHolders();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(tokenHolders[100]);

  return (
    <Table>
      <TableHeader className='bg-gray-100'>
        <TableRow>
          <TableHead className='w-6'>Token</TableHead>
          <TableHead className='w-6'>Holders</TableHead>
          <TableHead className='w-6'>Change (24h)</TableHead>
          <TableHead className='w-6'>Change (7d)</TableHead>
          <TableHead className='w-6'>Change (30d)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokenHolders.map((tokenHolder, index) => (
          <TableRow key={index}>
            <TableCell>{tokenHolder.contractAddress}</TableCell>
            <TableCell>{tokenHolder.nHolders}</TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
