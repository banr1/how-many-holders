// components/n-holders-table.tsx

import { OrderType } from '@uniswap/uniswapx-sdk';
import { useEffect, useState } from 'react';

import HashCell from '@/components/cell/hash-cell';
import InputTokenCell from '@/components/cell/input-token-cell';
import OutputTokenCell from '@/components/cell/output-token-cell';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { fetchIntents } from '@/lib/fetch-intents';
import { formatTimestamp, numToDate } from '@/lib/utils';
import { ChainId } from '@/types/chain-id';
import { FilledDutchIntentV1 } from '@/types/dutch-intent-v1';
import { FilledDutchIntentV2 } from '@/types/dutch-intent-v2';
import { IntentStatus } from '@/types/intent-status';

export default function NHoldersTable(): JSX.Element {
  // const { status, chainId, interval } = props;

  // const [intents, setIntents] = useState<(FilledDutchIntentV1 | FilledDutchIntentV2)[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

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
        {[
          'hoge', 'fuga'
        ].map((intent) => (
          <TableRow key={intent.hash}>
            <TableCell>Hoge</TableCell>
            <TableCell>Hoge</TableCell>
            <TableCell>Hoge</TableCell>
            <TableCell>Hoge</TableCell>
            <TableCell>Hoge</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
