
import NavLinks from './nav-links';
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
 

export default function Dashboard() {
  return (


    
    <div className="flex">
      <div>
       <NavLinks />
       
        </div>
        <div>
      <h1>Main Dash board</h1>
      </div>
      </div>
   
  );
}


