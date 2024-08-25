
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  FormattedTransactionTable,
} from '@/app/lib/definitions';
export default async function TransactionTable({
  transactions,
}: {
  transactions: FormattedTransactionTable[];
}) {


  
  
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Data Transaction
      </h1>
      
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {transactions?.map((transaction) => (
                  <div
                    key={transaction.uid}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        
                        <p className="text-sm text-gray-500">
                          {transaction.customer.name}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Customer Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Transaction Date
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Transaction
                    </th>
                    
                    
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {transactions.map((transaction) => (
                    <tr key={transaction.uid} className="group">
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {transaction.customer.name}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {new Date(transaction.transactionDate).toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {transaction.total}
                      </td>
                      

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
