import { Input } from "./ui/input";

export function StudentForm() {
  return (
    <div>
      <div className="py-4">
        <p>Informações Pessoais</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Input placeholder="Nome" />
        </div>
        <div>
          <Input placeholder="E-mail" />
        </div>
        <div>
          <Input placeholder="Telefone" />
        </div>
        <div>
          <Input placeholder="Data Aniversario" />
        </div>
        <div>
          <Input placeholder="Estado Civil" />
        </div>
        <div>
          <Input placeholder="Religião" />
        </div>
        <div>
          <Input placeholder="CPF" />
        </div>
        <div>
          <Input placeholder="RG" />
        </div>
        <div>
          <Input placeholder="Nacionalidade" />
        </div>
      </div>

      <div className="py-4">
        <p>Endereço</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Input placeholder="CEP" />
        </div>
        <div>
          <Input placeholder="Endereço" />
        </div>
        <div>
          <Input placeholder="Número" />
        </div>
        <div>
          <Input placeholder="Complemento" />
        </div>
        <div>
          <Input placeholder="Bairro" />
        </div>
        <div>
          <Input placeholder="Cidade" />
        </div>
        <div>
          <Input placeholder="Rua" />
        </div>
        <div>
          <Input className="País" />
        </div>
        <div>
          <Input placeholder="Nacionalidade" />
        </div>
      </div>
    </div>
  );
}
