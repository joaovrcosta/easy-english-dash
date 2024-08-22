import Sidebar from '@/components/sidebar'
import { DataTable } from './data-table'
import { columns, Payment } from './columns'
import SearchInput from '@/components/search-input'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

async function getData(): Promise<Payment[]> {
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
  ]
}

export default async function ContractsPage() {
  const data = await getData()

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-start flex-col ">
            <h1 className="text-lg text-primary font-semibold md:text-2xl mb-4">
              Contratos
            </h1>
            <div className="flex w-full space-x-3">
              <SearchInput />
              <Button className="flex gap-3">
                Contrato manual <Plus />
              </Button>
            </div>
          </div>

          <DataTable columns={columns} data={data} />
        </main>
      </div>
    </div>
  )
}
