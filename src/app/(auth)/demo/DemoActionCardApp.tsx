
"use client";

import type {CardProps} from "@nextui-org/react";
import type {Key} from "react";

import React, { useState } from "react";
import {Card, CardBody, CardHeader, Listbox, ListboxItem, Progress} from "@nextui-org/react";
import {Icon} from "@iconify/react";

const initialItems = [
  {
    key: "setup-company",
    icon: "solar:buildings-linear",
    title: "Snowflake Admin",
    description: "Setup your Snowflake Provider & Consumer Accounts",
    isCompleted: true,
  },
  {
    key: "add-your-team",
    icon: "solar:user-plus-linear",
    title: "Add your team",
    description: "Invite your team members to your DCR.",
    isCompleted: true,
  },
  {
    key: "add-share-holders",
    icon: "solar:users-group-rounded-linear",
    title: "Add Collaborator",
    description:
      "Add Snowflake & non-Snowflake Collaborators.",
    isCompleted: true,
  },
  {
    key: "add-valuations",
    icon: "solar:graph-up-linear",
    title: "Upload Objects",
    description: "Add your DCR objects (e.g. impressions logs, audience segments)",
    isCompleted: false,
  },
  {
    key: "create-option-pool",
    icon: "solar:pie-chart-2-linear",
    title: "Create Data Clean Room",
    description: "Create a DCR for folks to start consuming",
    isCompleted: false,
  },
  {
    key: "create-send-offer",
    icon: "solar:plain-outline",
    title: "Invite Collaborators into DCR",
    description: "After creating a DCR you can share it w/ collaborators",
    isCompleted: false,
  },
];

export default function DemoActionCardApp(props: CardProps) {
  const [items, setItems] = useState(initialItems);
  const [progress, setProgress] = useState(() => calculateProgress(initialItems));

  function calculateProgress(items: typeof initialItems) {
    const completedCount = items.filter((item) => item.isCompleted).length;
    const totalItems = items.length;
    return Math.round((completedCount / totalItems) * 100);
  }

  const handleAction = (selectedKey: Key) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.key === selectedKey
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
      setProgress(calculateProgress(updatedItems));
      return updatedItems;
    });
  };

  return (
    <Card {...props} className="max-w-[520px] py-1 md:py-4">
      <CardHeader className="flex items-center gap-3 px-5 pb-0 pt-3 md:px-10 md:pt-5">
        <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br from-secondary-300 to-primary-500">
          <Icon className="text-white" icon="solar:skateboarding-line-duotone" width={30} />
        </div>
        <Progress
          showValueLabel
          value={progress}
          label="DSPN DCR OVERVIEW"
          classNames={{
            label: "font-medium",
            indicator: "bg-purple-500", // Set the progress bar color to purple
            value: "text-foreground/60",
          }}
        />
      </CardHeader>
      <CardBody className="px-2 pt-3 sm:px-3 md:px-6">
        <Listbox
          hideSelectedIcon
          aria-label="Onboarding checklist"
          items={items}
          variant="flat"
          onAction={handleAction}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              classNames={{
                base: "w-full px-2 md:px-4 min-h-[70px] gap-3",
                title: "text-medium font-medium",
                description: "text-small text-wrap",
              }}
              description={<p className="text-default-500">{item.description}</p>}
              endContent={
                <div className="flex flex-none">
                  {item.isCompleted ? (
                    <Icon className="text-purple-500" icon="solar:check-circle-bold" width={30} />
                  ) : (
                    <Icon
                      className="text-blue-700"
                      icon="solar:round-alt-arrow-right-bold"
                      width={30}
                    />
                  )}
                </div>
              }
              startContent={
                <div className="item-center flex rounded-medium border border-divider p-2">
                  <Icon
                    className={item.isCompleted ? "text-purple-500" : "text-blue-700"}
                    icon={item.icon}
                    width={24}
                  />
                </div>
              }
              title={item.title}
            />
          )}
        </Listbox>
      </CardBody>
    </Card>
  );
}
