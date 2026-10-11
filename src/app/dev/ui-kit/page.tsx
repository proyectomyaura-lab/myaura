"use client";

import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/ConfirmDialog";

import {
  Plus,
  ArrowRight,
  LoaderCircle,
  Pencil,
  Trash2,
  X,
  Check,
} from "lucide-react";

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

        <section className="space-y-8 py-10">
          <div>
            <h2 className="text-xl font-semibold">
              Componentes
            </h2>

            <p className="mt-2 text-muted-foreground">
              Aquí construiremos y validaremos los componentes
              reutilizables de Aura.
            </p>
          </div>

          {/* Variantes de botones */}
          <div className="flex flex-wrap items-center gap-4">
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

            <ConfirmDialog
              trigger={
                <Button variant="destructive">
                  Eliminar
                </Button>
              }
              title="¿Eliminar este elemento?"
              description="Esta acción no se puede deshacer."
              confirmLabel="Eliminar"
              variant="destructive"
              onConfirm={() => {}}
            />

            <Button disabled>
              Deshabilitado
            </Button>
          </div>

          {/* Tamaños */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Tamaños de botones
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Pequeño</Button>
              <Button size="default">Normal</Button>
              <Button size="lg">Grande</Button>
            </div>
          </div>

          {/* Iconos y carga */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Botones con iconos y carga
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              <Button>
                <Plus />
                Crear Aura
              </Button>

              <Button>
                Continuar
                <ArrowRight />
              </Button>

              <Button disabled>
                <LoaderCircle className="animate-spin" />
                Procesando...
              </Button>
            </div>
          </div>

          {/* Solo iconos */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Botones de solo icono
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="icon" aria-label="Editar">
                <Pencil />
              </Button>

              <ConfirmDialog
                trigger={
                  <Button
                    size="icon"
                    variant="destructive"
                    aria-label="Eliminar"
                  >
                    <Trash2 />
                  </Button>
                }
                title="¿Eliminar este elemento?"
                description="Esta acción no se puede deshacer."
                confirmLabel="Eliminar"
                variant="destructive"
                onConfirm={() => {}}
              />

              <Button
                size="icon"
                variant="outline"
                aria-label="Cerrar"
              >
                <X />
              </Button>
            </div>
          </div>

          {/* Botón adaptable */}
          <div className="space-y-3 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Botón adaptable
            </h3>

            <Button
              size="lg"
              className="h-16 w-full max-w-sm text-base"
            >
              Activar mi Aura
            </Button>

            <p className="text-sm text-muted-foreground">
              Ancho completo en celular y máximo de 384 px
              en pantallas grandes.
            </p>
          </div>

          {/* Confirmaciones */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Modales de confirmación
            </h3>

            <div className="flex flex-wrap gap-4">
              <ConfirmDialog
                trigger={
                  <Button variant="destructive">
                    <Trash2 />
                    Eliminar elemento
                  </Button>
                }
                title="¿Eliminar este elemento?"
                description="Esta acción no se puede deshacer."
                confirmLabel="Eliminar"
                variant="destructive"
                onConfirm={() => {}}
              />

              <ConfirmDialog
                trigger={
                  <Button>
                    <Check />
                    Aceptar condiciones
                  </Button>
                }
                title="¿Aceptar las condiciones?"
                description="Confirma que has leído y aceptas las condiciones indicadas."
                confirmLabel="Aceptar"
                onConfirm={() => {}}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
