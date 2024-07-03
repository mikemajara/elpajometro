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
import { data } from "@/data";

const TotalPajeros = ({ height }: { height: string }) => {
  const variacion = Math.round(
    (data[data.length - 2].total / data[data.length - 1].total) * 100
  );
  return (
    <Card className="w-full h-full bg-neutral-800 text-primary ">
      <CardHeader>
        <p className="text-sm">Total pajeros</p>
        <p className="font-extrabold text-2xl">{data[data.length - 1].total}</p>
        <p className="font-light text-xs">{variacion}% más que mes pasado</p>
      </CardHeader>
      <CardContent
        className={`w-full`}
        style={{
          height,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={100}
            data={data}
            className="stroke-orange-400"
          >
            <Tooltip
              labelFormatter={(value, p) => {
                console.log(value);
                console.log(p);
                return p.length > 0
                  ? format(new Date(p[0].payload.date), "MMM yy")
                  : "";
                // return format(new Date(data[value].date), "MMM yy");
              }}
              contentStyle={{
                borderRadius: "10px",
                background: "#fafafa",
              }}
            />
            {/* <XAxis
              dataKey="date"
              tickFormatter={(timeStr) => format(timeStr, "MMM yy")}
              type="number"
              name="Date"
              domain={["auto", "auto"]}
            /> */}
            {/* <YAxis dataKey="total" name="Total" /> */}

            <Line
              className="stroke-ph-orange-500"
              type="monotone"
              dataKey="total"
              stroke=""
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TotalPajeros;
