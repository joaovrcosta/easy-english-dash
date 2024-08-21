import { Button } from '@/components/ui/button'
import Sidebar from '@/components/sidebar'
import { DataTable } from './data-table'
import { columns, Payment } from './columns'
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

export default async function StudentsPage() {
  const data = await getData()

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl ">Alunos</h1>
            <Button>
              Novo aluno <Plus />
            </Button>
          </div>
          <section>
            <DataTable columns={columns} data={data} />
          </section>
        </main>
      </div>
    </div>
  )
}
