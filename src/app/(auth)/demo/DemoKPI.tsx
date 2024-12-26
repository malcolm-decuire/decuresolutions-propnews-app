"use client";

import type { ButtonProps, CardProps } from "@nextui-org/react";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Label } from "recharts";
import {
  Card,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  cn,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

type ChartData = {
  name: string;
  value: number;
};

type CircleChartProps = {
  title: string;
  total: number;
  unit?: string;
  color: ButtonProps["color"];
  categories: string[];
  chartData: ChartData[];
};

const data: CircleChartProps[] = [
  {
    title: "Traffic Sources",
    total: 224000,
    unit: "Visitors",
    categories: ["Search", "Direct", "Social", "Referral"],
    color: "primary",
    chartData: [
      { name: "Search", value: 400 },
      { name: "Direct", value: 300 },
      { name: "Social", value: 300 },
      { name: "Referral", value: 200 },
    ],
  },
  {
    title: "Device Usage",
    total: 4500,
    unit: "Devices",
    categories: ["Mobile", "Desktop", "Tablet", "Smart TV"],
    color: "danger",
    chartData: [
      { name: "Mobile", value: 450 },
      { name: "Desktop", value: 300 },
      { name: "Tablet", value: 250 },
      { name: "Smart TV", value: 200 },
    ],
  },
  {
    title: "Channel Usage",
    total: 4500,
    unit: "Devices",
    categories: ["DSPN AM", "DSPN NITE", "DSPN ANIME", "DSPN KIDS"],
    color: "warning",
    chartData: [
      { name: "DSPN AM", value: 450 },
      { name: "DSPN NITE", value: 300 },
      { name: "DSPN ANIME", value: 250 },
      { name: "DSPN KIDS", value: 200 },
    ],
  },
  {
    title: "Browser Usage",
    total: 8790,
    unit: "Devices",
    categories: ["Chrome", "Safari", "Firefox", "Edge"],
    color: "secondary",
    chartData: [
      { name: "Chrome", value: 350 },
      { name: "Safari", value: 280 },
      { name: "Firefox", value: 220 },
      { name: "Edge", value: 150 },
    ],
  },
];

const colorMapping: Record<string, string[]> = {
  primary: ["#5B2C6F", "#7D3C98", "#9B59B6", "#AF7AC5"],
  secondary: ["#C39BD3", "#D7BDE2", "#EBDEF0", "#F4ECF7"],
  warning: ["#3498DB", "#5DADE2", "#85C1E9", "#AED6F1"],
  danger: ["#21618C", "#2874A6", "#2E86C1", "#5499C7"],
};

export default function DemoKPI() {
  return (
    <div className="container mx-auto px-4">
      <dl
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {data.map((item, index) => (
          <CircleChartCard key={index} {...item} />
        ))}
      </dl>
    </div>
  );
}

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total.toString();
};

const CircleChartCard = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, "children"> & CircleChartProps
>(({ className, title, total, unit, categories, color, chartData, ...props }, ref) => {
  const colorArray = colorMapping[color as keyof typeof colorMapping] || ["#CCCCCC", "#AAAAAA", "#888888", "#666666"];

  return (
    <Card
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-between h-full w-full border shadow-md overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-y-4 p-4 text-center">
        <div className="flex justify-between w-full items-center">
          <h3 className="text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </h3>
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly radius="full" size="sm" variant="light">
                <Icon height={20} icon="solar:menu-dots-bold" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="details">View Details</DropdownItem>
              <DropdownItem key="export">Export Data</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Tooltip
              content={({ payload }) => (
                <div className="p-2 bg-white rounded shadow">
                  {payload?.map((p) => (
                    <div key={p.name} className="flex items-center justify-between gap-x-2">
                      <span className="text-default-500">{p.name}</span>
                      <span className="font-bold">{p.value}</span>
                    </div>
                  ))}
                </div>
              )}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius="70%"
              outerRadius="90%"
              paddingAngle={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colorArray[index % colorArray.length]} />
              ))}
              <Label
                value={formatTotal(total)}
                position="center"
                className="text-base font-semibold text-default-800"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p className="text-sm text-center">
          Total: {formatTotal(total)} {unit}
        </p>
      </div>
    </Card>
  );
});

CircleChartCard.displayName = "CircleChartCard";
