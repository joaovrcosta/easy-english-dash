import Sidebar from "@/components/sidebar";
import PinItem from "@/components/pin-item";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DefaultChartPayment } from "@/components/charts/payments-default";
import { ProfitChart } from "@/components/charts/profit-chart";

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

          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Dezembro</SelectItem>
                <SelectItem value="dark">Novembro</SelectItem>
                <SelectItem value="system">Outubro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full flex gap-4">
              <Card className="w-full p-4">
                <DefaultChartPayment />
              </Card>

              <Card className="w-full p-4">
                <ProfitChart />
              </Card>
            </div>

            <div className="w-full flex gap-4">
              <Card className="w-full p-4">
                <DefaultChartPayment />
              </Card>

              <Card className="w-full p-4">
                <ProfitChart />
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
