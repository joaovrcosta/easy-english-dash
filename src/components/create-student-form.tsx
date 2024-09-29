import { Input } from './ui/input'

export function CreateStudentForm() {
  return (
    <>
      <div className="space-y-2 mt-3">
        <h2>Dados do Aluno</h2>
        <div className="flex space-x-2">
          <Input id="name" type="text" placeholder="Nome" required />
          <Input id="email" type="email" placeholder="Email" required />
        </div>
        <div className="flex space-x-2">
          <Input id="phone" type="tel" placeholder="Telefone" required />
          <Input
            id="birthDay"
            type="text"
            placeholder="Data Aniversario"
            required
          />
        </div>
        <div className="flex space-x-2">
          <Input
            id="civilState"
            type="text"
            placeholder="Estado Civil"
            required
          />
          <Input id="religion" type="text" placeholder="Religião" />
        </div>
        <div className="flex space-x-2">
          <Input id="cpf" type="text" placeholder="CPF" />
          <Input id="rg" type="text" placeholder="RG" />
        </div>
        <div className="flex space-x-2">
          <Input id="nationality" type="text" placeholder="Nacionalidade" />
          <Input id="sex" type="text" placeholder="Sexualidade" />
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <h2>Endereço</h2>
        <div className="flex space-x-2 mt-3">
          <Input id="cep" type="text" placeholder="CEP" />
          <Input id="address" type="text" placeholder="Endereço" />
        </div>
        <div className="flex space-x-2">
          <Input id="number" type="text" placeholder="Número" />
          <Input id="complement" type="text" placeholder="Complemento" />
        </div>
        <div className="flex space-x-2">
          <Input id="neighborhood" type="text" placeholder="Bairro" />
          <Input id="city" type="text" placeholder="Cidade" />
        </div>
        <div className="flex space-x-2">
          <Input id="street" type="text" placeholder="Rua" />
          <Input id="country" type="text" placeholder="País" />
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <h2>Responsavel</h2>
        <div className="flex space-x-2 mt-3">
          <Input id="guardianName" type="text" placeholder="Nome" />
          <Input id="guardianPhone" type="text" placeholder="Telefone" />
        </div>
        <div className="flex space-x-2">
          <Input id="guardianEmail" type="text" placeholder="Email" />
          <Input id="guardianRelationship" type="text" placeholder="Relação" />
        </div>
      </div>
    </>
  )
}
