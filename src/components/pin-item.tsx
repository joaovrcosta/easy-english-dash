import { Button } from './ui/button'
import { Card } from './ui/card'

interface PinItemProps {
  name: string
  type: string
  number: string
}

const PinItem = ({ name, type, number }: PinItemProps) => {
  return (
    <Card className="py-8 px-4 lg:max-w-[300px] lg:min-w-[300px]">
      <div className="flex flex-col items-start gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm text-muted-foreground">
            {type === 'class' ? 'Turma' : 'Horário'}
          </p>
          <p className="text-gray-500">{number}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <Button className="mt-4 w-full" variant="outline">
          Ver situação
        </Button>
      </div>
    </Card>
  )
}

export default PinItem
