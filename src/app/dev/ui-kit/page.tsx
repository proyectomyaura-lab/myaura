
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "UI Kit | myAura",
};

export default function UIKitPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-6xl">
        <header className="border-b border-border pb-8">
          <p className="text-sm font-semibold text-primary">
            AURA DESIGN SYSTEM
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            UI Kit
          </h1>

          <p className="mt-3 text-muted-foreground">
            Catálogo visual de componentes de myAura.
          </p>
        </header>

        <section className="py-10">
          <h2 className="text-xl font-semibold">
            Componentes
          </h2>

          <p className="mt-2 text-muted-foreground">
            Aquí construiremos y validaremos los componentes
            reutilizables de Aura.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
  <Button>Principal</Button>

  <Button variant="secondary">
    Secundario
  </Button>

  <Button variant="outline">
    Contorno
  </Button>

  <Button variant="ghost">
    Discreto
  </Button>

  <Button variant="destructive">
    Eliminar
  </Button>

  <Button disabled>
    Deshabilitado
  </Button>
</div>
    
        </section>
      </div>
    </main>
  );
}
