"use server";
import TransactionTable from '@/app/ui/transactions/table';
import { fetchTransactions } from '@/app/lib/transactions';
import Link from 'next/link';

export default async function Page() {
  
    const transaction = await fetchTransactions();
    return (
    <main>
        <TransactionTable transactions={transaction} />
        
    </main>
    )
  }