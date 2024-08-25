'use server';
import { formatCurrency } from './utils';
import { redirect } from 'next/navigation'

export async function fetchCustomers() {
  try {

    const data = fetch('http://localhost:8002/api/customer/')
    .then(response => response.json())
    .then((dataJson) =>{
        const customers = dataJson.data;
        console.log(customers);
        return customers;
    })
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function createUser(data: any) {
  try {
    const response = await fetch('http://localhost:8002/api/customer/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
   
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create customer.');
  }
  finally{  
    redirect('/dashboard/customers');
  }
}

export async function deleteUser(uid: string) {
 
  try {
    const response = await fetch(`http://localhost:8002/api/customer/${uid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete customer.');
  }
  finally{  
    redirect('/dashboard/customers');
  }
}
