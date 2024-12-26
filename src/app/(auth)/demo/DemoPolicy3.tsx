"use client";

import type {CardProps} from "@nextui-org/react";

import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Link,
  Form,
  cn,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";

export default function DemoPolicy3(props: CardProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("handleSubmit");
  };

  const content = isOpen ? (
    <div className="h-full w-full items-start justify-center overflow-scroll px-4 pb-24 pt-20 bg-gray-900 text-white">
      <div className="flex flex-col gap-2">
      </div>
      <Divider className="mb-8 mt-10" />
      <ul className="flex flex-col gap-1">
        <li>
          <Link className="text-default-400" href="#" size="sm">
          SQL Matching & Joins: Aggregation often occurs after joins to ensure individual data points aren’t exposed (e.g., total sales by region instead of sales by customer).
          </Link>
        </li>
        <br/>
        <li>
          <Link className="text-default-400" href="#" size="sm">
          Privacy vs. Granularity Trade-off: Stricter aggregation policies reduce detail, which may limit certain types of analyses but enhance security.
          </Link>
        </li>
        <br/>
        <li>
          <Link className="text-default-400" href="#" size="sm">
          Query Constraints: SQL queries may require specific conditions (e.g., group size thresholds) to prevent outputs that reveal too much detail about small cohorts.
          </Link>
        </li>
        <br/>
      </ul>
    </div>
  ) : (
    <ul>
      <li className="flex items-center gap-1">
        <Icon className="text-default-600" icon="ci:check" width={24} />
        <p className="text-small text-default-500">Anonymity Guarantees</p>
      </li>
      <li className="flex items-center gap-1">
        <Icon className="text-default-600" icon="ci:check" width={24} />
        <p className="text-small text-default-500">Differential Privacy</p>
      </li>
    </ul>
  );

  return (
    <Card {...props} className="relative w-full max-w-[400px] pb-[120px]">
      <Button
        className="absolute right-4 top-8 z-10"
        isIconOnly={isOpen}
        radius="full"
        size="sm"
        onPress={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <Icon icon="ci:close-sm" width={24} /> : "IMPACT"}
      </Button>
      <CardBody className="relative min-h-[300px] bg-gradient-to-br from-content1 to-default-100/50 p-8 before:inset-0 before:h-full before:w-full before:content-['']">
        <h1 className="mb-4 text-default-400">FOUNDATION #3</h1>
        <h3 className="inline bg-gradient-to-br from-purple-500 to-purple-300 bg-clip-text text-6xl font-semibold tracking-tight text-transparent dark:to-purple-200">
         Aggregation
          <br />
          Policies
        </h3>
      </CardBody>
      <CardFooter
        className={cn(
          "absolute bottom-0 h-[120px] overflow-visible bg-content1 px-6 duration-300 ease-in-out transition-height",
          {
            "h-full": isOpen,
            "border-t-1 border-default-100": !isOpen,
          }
        )}
      >
        {content}
      </CardFooter>
    </Card>
  );
}
