import { StudentForm } from "@/components/student-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function StudentsPage({
  params,
}: {
  params: Promise<{ studentId: string }>;
}) {
  const slug = (await params).studentId;
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-4 border-b pb-4  px-4">
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-3xl">João Victor</h3>
      </div>
      <div>
        <Tabs defaultValue="all" className="w-full mt-3">
          <TabsList className="h-[60px] bg-transparent">
            <TabsTrigger
              value="all"
              className="h-[60px] bg-transparent shadow-none"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="class" className="h-[60px]">
              Turma
            </TabsTrigger>
            <TabsTrigger value="payment" className="h-[60px]">
              Pagamentos
            </TabsTrigger>
            <TabsTrigger value="notes" className="h-[60px]">
              Notas
            </TabsTrigger>
            <TabsTrigger value="contract" className="h-[60px]">
              Contrato
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="p-4">
            <Card>
              <CardContent>
                <StudentForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="class" className="p-4">
            <Card>
              <CardHeader>Turma</CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
