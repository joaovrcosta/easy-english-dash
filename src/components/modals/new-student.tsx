import { CreateStudentForm } from '../create-student-form'
import { DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'

export function NewStudentModalContent() {
  return (
    <div>
      <div>
        <DialogHeader>
          <DialogTitle className="text-xl">
            Cadastrar novo estudante
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </div>
      <div>
        <CreateStudentForm />
      </div>
    </div>
  )
}
