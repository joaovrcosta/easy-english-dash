import { Button } from './ui/button'

const PinItem = () => {
  return (
    <div
      className="border rounded-lg p-4 h-[200px] max-w-[300px] flex flex-col justify-between border-dashed shadow-sm "
      x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no products
        </h3>
        <p className="text-sm text-muted-foreground">
          You can start selling as soon as you add a product.
        </p>
      </div>
      <div className="w-full flex items-center justify-end">
        <Button className="mt-4 w-full">Ver</Button>
      </div>
    </div>
  )
}

export default PinItem
