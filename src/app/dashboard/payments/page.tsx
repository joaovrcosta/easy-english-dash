import Sidebar from "@/components/sidebar";
import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

export default async function PaymentsPage() {
  const data = await getData();

  return (
    <div className="flex flex-col ">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl text-primary">
            Pagamentos
          </h1>
        </div>
        <section>
          <DataTable columns={columns} data={data} />
        </section>
      </main>
    </div>
  );
}
