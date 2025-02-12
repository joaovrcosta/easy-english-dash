import { ColumnDef } from '@tanstack/react-table'

export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Curso',
  },
  {
    accessorKey: 'amount',
    header: 'Situação',
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
  },
]
