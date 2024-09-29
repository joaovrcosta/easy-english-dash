import { Button } from '@/components/ui/button'
import Sidebar from '@/components/sidebar'
import { DataTable } from './data-table'
import { columns, Payment } from './columns'
import { Plus } from 'lucide-react'
import SearchInput from '@/components/search-input'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { NewStudentModalContent } from '@/components/modals/new-student'

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
          <div className="flex flex-col items-start justify-between">
            <h1 className="text-lg font-semibold md:text-2xl mb-4 text-primary">
              Alunos
            </h1>
            <div className="flex w-full space-x-3">
              <SearchInput />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex gap-3">
                    Cadastrar aluno <Plus />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <NewStudentModalContent />
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
  )
}
