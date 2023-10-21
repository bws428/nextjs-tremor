"use client";

import { Card, AreaChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan",
    "This year": 45,
    "2022": 27,
  },
  {
    Month: "Feb",
    "This year": 68,
    "2022": 37,
  },
  {
    Month: "Mar",
    "This year": 62,
    "2022": 45,
  },
  {
    Month: "Apr",
    "This year": 45,
    "2022": 27,
  },
  {
    Month: "May",
    "This year": 68,
    "2022": 37,
  },
  {
    Month: "Jun",
    "This year": 62,
    "2022": 45,
  },
];

export default function FlightTimeChart() {
  return (
    <Card className="mb-8 gap-6">
      <Title>Flight Time</Title>
      <Text>Monthly totals for this year and 2022</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["This year", "2022"]}
        index="Month"
        colors={["indigo", "fuchsia"]}
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat("us").format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
