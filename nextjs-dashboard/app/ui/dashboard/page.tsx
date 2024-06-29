import CardWrapper from '@/app/ui/dashboard/cards';
import { fetchCardData } from '@/app/lib/data';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
 
export default async function Page() {
    const { numberOfInvoices,
         numberOfCustomers,
          totalPaidInvoices,
           totalPendingInvoices,
         } = await fetchCardData();
         
    return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}