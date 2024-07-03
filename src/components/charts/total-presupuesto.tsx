"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader } from "../ui/card";
import { format } from "date-fns";
import { dataPajaportes as data } from "@/data";

const TotalPresupuesto = ({ height }: { height: string }) => {
  const variacion = "mucho";
  const total = 3672;
  return (
    <Card className="w-full h-full bg-neutral-800 text-primary ">
      <CardHeader>
        <p className="text-sm">
          Presupuesto del Ministerio de Transformación Tigital
        </p>
        <p className="font-extrabold text-2xl">
          {new Intl.NumberFormat(undefined).format(total)} millones de euros
        </p>
        <p className="font-light text-xs">{variacion} % más que mes pasado</p>
      </CardHeader>
      <CardContent
        className={`w-full`}
        style={{
          height,
        }}
      >
        <div className="text-sm">
          <p>
            <span className="text-primary/50">
              Digitalización e Innovación:{" "}
            </span>
            1350 millones de euros I+D+i
          </p>
          <p>
            <span className="text-primary/50">Digitalización: </span>1322
            millones de euros
          </p>
          <p>
            <span className="text-primary/50">Función Pública: </span>500
            millones de euros
          </p>
          <p>
            <span className="text-primary/50">
              Sociedad de la Información:{" "}
            </span>
            300 millones de euros
          </p>
          <p>
            <span className="text-primary/50">Telecomunicaciones: </span>200
            millones de euros
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalPresupuesto;
