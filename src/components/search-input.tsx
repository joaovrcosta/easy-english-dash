import { Search } from 'lucide-react'
import { Input } from './ui/input'

const SearchInput = () => {
  return (
    <div className="w-full flex-1">
      <form>
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
      </form>
    </div>
  )
}

export default SearchInput
