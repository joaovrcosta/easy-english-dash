import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { CreateClassForm } from "@/components/create-class-form";

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

export default async function ClassesPage() {
  const data = await getData();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl text-primary">
              Turmas
            </h1>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex gap-3">
                    Cadastrar aula <Plus />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <CreateClassForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <section>
            <DataTable columns={columns} data={data} />
          </section>
        </main>
      </div>
    </div>
  );
}
