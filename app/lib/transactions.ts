'use server';
import { formatCurrency } from './utils';
import { redirect } from 'next/navigation'

export async function fetchTransactions() {
  try {

    const data = fetch('http://localhost:8002/api/transaction/')
    .then(response => response.json())
    .then((dataJson) =>{
        const transactions = dataJson.data;
        console.log(transactions);
        return transactions;
    })
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}


