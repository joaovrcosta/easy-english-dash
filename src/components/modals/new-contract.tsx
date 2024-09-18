import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

export function NewContractModalContent() {
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Criar novo contrato</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </div>
  );
}
