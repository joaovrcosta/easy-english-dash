import Sidebar from '@/components/sidebar'
import PinItem from '@/components/pin-item'
import { Card } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col lg:flex-row">
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl text-primary">
              Pins
            </h1>
          </div>
          <div className="space-y-3 max-w max-h-[820px] overflow-y-auto [&::-webkit-scrollbar]:hidden">
            <PinItem name="João Victor" type="Pendencia" number="11999999999" />
            <PinItem name="Maria" type="Pendencia" number="11999999999" />
            <PinItem name="Guilherme" type="Pendencia" number="11999999999" />
            <PinItem name="Elizel" type="Pendencia" number="11999999999" />
            <PinItem name="Higor" type="Pendencia" number="11999999999" />
          </div>
        </main>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 lg:pl-0">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl text-primary">
              Dashboard
            </h1>
          </div>

          <div className="flex space-x-3">
            <Card className="w-full p-4">
              <h1>Lucros</h1>
            </Card>

            <Card className="w-full p-4">
              <h1>Lucros</h1>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
