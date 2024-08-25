"use server";
import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/customers';
import Link from 'next/link';

export default async function Page() {
  
    const customers = await fetchCustomers();
    return (
    <main>
      <Link
            href="/dashboard/customers/add"
            className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>Add Data</span>  
          </Link>
        <CustomersTable customers={customers} />
        
    </main>
    )
  }