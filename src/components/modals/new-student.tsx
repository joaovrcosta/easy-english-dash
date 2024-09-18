import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

export function NewStudentModalContent() {
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Cadastrar novo estudante</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </div>
  );
}
