'use client'

import {
  Badge,
  Bell,
  CalendarCheck,
  CircleDollarSign,
  CircleUser,
  Home,
  LayoutDashboard,
  LineChart,
  Package,
  Package2,
  ReceiptText,
  School,
  ShoppingCart,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Image from 'next/image'

const Sidebar = () => {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <section className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/logo-easy-red.svg"
            width={32}
            height={32}
            alt="Easy English"
          />
          <span className="text-primary font-bold">Easy</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              isActive('/dashboard')
                ? 'bg-muted text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/students"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              isActive('/students')
                ? 'bg-muted text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <Users className="h-4 w-4" />
            Alunos
          </Link>
          <Link
            href="/classes"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              isActive('/classes')
                ? 'bg-muted text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <School className="h-4 w-4" />
            Turmas
          </Link>
          <Link
            href="/schedules"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              isActive('/schedules')
                ? 'bg-muted text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <CalendarCheck className="h-4 w-4" />
            Horários
          </Link>
          <Link
            href="/payments"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              isActive('/payments')
                ? 'bg-muted text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <CircleDollarSign className="h-4 w-4" />
            Pagamentos
          </Link>
          <Link
            href="/contracts"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              isActive('/contracts')
                ? 'bg-muted text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <ReceiptText className="h-4 w-4" />
            Contratos
          </Link>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar
