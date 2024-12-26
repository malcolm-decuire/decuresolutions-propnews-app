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
  value: string;
  changeType?: "positive" | "neutral" | "negative";
  changePercentage?: number;
  unit?: string;
  color: keyof typeof customColors;
  categories: string[];
  chartData: ChartData[];
};

const data: CircleChartProps[] = [
  {
    title: "Campaign-A Report",
    value: "$47,483",
    unit: "avg.",
    changePercentage: 12.5,
    changeType: "positive",
    categories: ["Social Media", "Display Ads", "Email", "Organic Search"],
    color: "primary",
    chartData: [
      { name: "Social Media", value: 12000 },
      { name: "Display Ads", value: 14000 },
      { name: "Email", value: 11000 },
      { name: "Organic Search", value: 10500 },
    ],
  },
  {
    title: "Campaign-B Report",
    value: "$55,450",
    unit: "avg.",
    changePercentage: 20.0,
    changeType: "negative",
    categories: ["Social Media", "Display Ads", "Email", "Organic Search"],
    color: "primary",
    chartData: [
      { name: "Social Media", value: 12000 },
      { name: "Display Ads", value: 14000 },
      { name: "Email", value: 11000 },
      { name: "Organic Search", value: 18450 },
    ],
  },
  {
    title: "Summary Metrics",
    value: "$102,300",
    unit: "total",
    changePercentage: 8.2,
    changeType: "positive",
    categories: ["Clicks", "Impressions", "Conversions"],
    color: "secondary",
    chartData: [
      { name: "Clicks", value: 23000 },
      { name: "Impressions", value: 73000 },
      { name: "Conversions", value: 6300 },
    ],
  },
  {
    title: "Cost Distribution",
    value: "$29,900",
    unit: "total",
    changePercentage: -4.3,
    changeType: "negative",
    categories: ["Media Cost", "Advertiser Cost"],
    color: "warning",
    chartData: [
      { name: "Media Cost", value: 16000 },
      { name: "Advertiser Cost", value: 13900 },
    ],
  },
];

const customColors: Record<string, string[]> = {
  primary: ["#6a1b9a", "#8e24aa", "#9c27b0", "#ba68c8"],
  secondary: ["#ce93d8", "#e1bee7", "#f3e5f5", "#f8bbd0"],
  warning: ["#42a5f5", "#64b5f6", "#90caf9", "#bbdefb"],
  danger: ["#283593", "#303f9f", "#3949ab", "#5c6bc0"],
};

export default function Component() {
  return (
    <div className="container mx-auto px-6">
      <dl
        className="grid gap-8"
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

const CircleChartCard = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, "children"> & CircleChartProps
>(
  (
    {
      className,
      title,
      value,
      unit,
      categories,
      changePercentage,
      color,
      chartData,
      changeType,
      ...props
    },
    ref
  ) => {
    const colorArray = customColors[color] || ["#CCCCCC", "#AAAAAA", "#888888", "#666666"];

    return (
      <Card
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-between h-full w-full border shadow-md overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-y-4 p-5 text-center">
          <div className="flex justify-between w-full items-center">
            <h3 className="text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-[240px]">
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
          <dd className="flex items-baseline gap-x-1 mt-2">
            <span className="text-lg font-semibold text-default-900">{value}</span>
            <span className="text-sm font-medium text-default-500">{unit}</span>
          </dd>
        </div>
        <ResponsiveContainer height={200} width="100%">
          <PieChart>
            <Tooltip
              content={({ payload }) => (
                <div className="p-2 bg-white rounded shadow-md">
                  {payload?.map((p) => (
                    <div key={p?.name || "unknown"} className="flex flex-col gap-y-1">
                      <span className="text-xs font-medium text-default-500">{p?.name || "N/A"}</span>
                      <span className="font-bold text-default-800">{p?.value || 0}</span>
                    </div>
                  ))}
                </div>
              )}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius="65%"
              outerRadius="85%"
              paddingAngle={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colorArray[index % colorArray.length]} />
              ))}
              <Label
                position="center"
                className="text-sm font-semibold text-default-800"
                value={value}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap justify-center gap-3 px-4 pb-4 text-xs text-default-500">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: colorArray[index % colorArray.length] }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </Card>
    );
  }
);

CircleChartCard.displayName = "CircleChartCard";
