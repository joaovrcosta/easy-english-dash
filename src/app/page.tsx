import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AuthPage() {
  return (
    <div className="w-full lg:grid lg:h-[100vh] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/placeholder.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 mb-80">
          <Image
            src="/logo-easy-white.svg"
            alt="Logo"
            width="64"
            height="64"
            className="mx-auto"
          />
          <p className="mt-40 text-white text-5xl font-semibold max-w-[400px] leading-[60px] text-center ">
            Porque aprender inglês! é{' '}
            <span className="text-[#082A81] font-black">easy</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 px-10">
        <div className="mx-auto grid w-[618px] gap-6">
          <div className="grid gap-2 text-start">
            <h1 className="text-3xl font-bold">Faça seu login</h1>
            <p className="text-balance text-muted-foreground">
              Seja bem vindo de volta, insira suas credenciais para continuar
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu a sua senha?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href="/dashboard">
              <Button type="submit" className="w-full mt-10">
                Login
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{' '}
            <Link href="#" className="underline">
              Cadastrar-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
