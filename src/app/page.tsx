import TotalPajeros from "@/components/charts/total-pajeros";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ArrowRight, ExternalLink, Newspaper } from "lucide-react";
import Image from "next/image";
import { fileURLToPath } from "url";

// Get the current file URL and convert it to a file path
const __filename = fileURLToPath(import.meta.url);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center p-24 bg-neutral-900 text-white">
      <Image src="/pajo-metro.svg" width="1200" height="800" alt="pajometro" />

      <div className="w-full grid grid-cols-6 grid-rows-6 gap-5">
        <div className="col-span-6 sm:col-span-3 sm:row-span-3">
          <TotalPajeros height="180px" />
        </div>
        <div className="col-span-6 sm:col-span-3 sm:row-span-2 ">
          <TotalPajeros height="70px" />
        </div>
        <div className="col-span-6 sm:col-span-3 sm:row-span-3 ">
          <TotalPajeros height="180px" />
        </div>
        <div className="col-span-6 sm:col-span-3 sm:row-span-2 ">
          <TotalPajeros height="70px" />
        </div>
      </div>

      <div className="h-[200px] sm:h-[300px] w-full border border-primary p-4"></div>
      <div id="main content" className="grid gap-4 max-w-96">
        <span>
          {/* <Twitter className="w-4 h-4" /> */}
          <i>
            <a
              href="https://x.com/MiguelCamba/status/1807798237828432297"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'"'}pronto vamos a poder tener un ranking por DNI de los
              campeones de España.{'"'}
            </a>
          </i>
        </span>
        <span>
          {/* <Newspaper className="w-4 h-4" /> */}
          <a
            href="https://www.20minutos.es/noticia/5526647/0/app-gobierno-para-verificar-edad-webs-porno-emitira-un-pack-credenciales-para-30-dias-estara-lista-finales-verano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            La app del Gobierno para verificar la edad en webs porno emitirá un
            pack de credenciales para 30 días y estará lista a finales de verano
          </a>
        </span>
      </div>
      <h1 className="font-2xl">
        Recibe una notificación cuando tengamos los datos disponibles. 👇
      </h1>
      <form
        className="flex gap-2 items-end"
        action="https://submit-form.com/ZWyiPE6e"
      >
        <div className="grid gap-2">
          {/* <Label htmlFor="email">Email</Label> */}
          <Input name="email" type="email" className="" placeholder="Email" />
        </div>
        <Button className=" ">Enviar</Button>
      </form>
    </main>
  );
}
