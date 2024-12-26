"use client";

import type { CardProps } from "@nextui-org/react";

import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  ScrollShadow,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

import NotificationItem from "./DemoHeaderNav-notification-item";

// Expanded Notification type
type Notification = {
  id: string;
  isRead?: boolean;
  avatar: string;
  description: string;
  name: string;
  time: string;
  type?: "default" | "settlement" | "file" | "lawsuit";
  company?: string;
  industry?: string;
  fineAmount?: string;
  details?: string;
};

const notifications: Notification[] = [
  {
    id: "1",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026701d",
    description: "Meta fined $1.3 billion for GDPR violations.",
    name: "Meta Lawsuit",
    time: "May 2023",
    type: "lawsuit",
    company: "Meta Platforms",
    industry: "Social Media",
    fineAmount: "$1.3 billion",
    details: "Ireland's DPC fined Meta for GDPR violations related to EU-US data transfers.",
  },
  {
    id: "2",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702d",
    description: "Didi fined $1.19 billion for data security violations.",
    name: "Didi Global Lawsuit",
    time: "July 2022",
    type: "lawsuit",
    company: "Didi Global",
    industry: "Ride-Hailing",
    fineAmount: "$1.19 billion",
    details: "China's Cyberspace Administration fined Didi for violating data security and personal information protection laws.",
  },
  {
    id: "3",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
    description: "Amazon fined $877 million for GDPR violations.",
    name: "Amazon Lawsuit",
    time: "2021",
    type: "lawsuit",
    company: "Amazon",
    industry: "E-commerce",
    fineAmount: "$877 million",
    details: "Luxembourg's data protection authority fined Amazon for processing personal data in violation of GDPR.",
  },
  {
    id: "4",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    description: "Equifax fined $575 million for a 2017 data breach.",
    name: "Equifax Settlement",
    time: "2017",
    type: "settlement",
    company: "Equifax",
    industry: "Credit Reporting",
    fineAmount: "$575 million",
    details: "Equifax settled with the FTC after a data breach exposed personal information of nearly 150 million people.",
  },
  {
    id: "5",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    description: "Marriott fined $24.3 million for data breaches.",
    name: "Marriott Settlement",
    time: "October 2020",
    type: "settlement",
    company: "Marriott International",
    industry: "Hospitality",
    fineAmount: "$24.3 million",
    details: "The UK's ICO fined Marriott for failing to protect personal data of approximately 339 million guests.",
  },
  {
    id: "6",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    description: "Meta fined $356 million for a 2018 data breach.",
    name: "Meta 2018 Data Breach",
    time: "December 2024",
    type: "lawsuit",
    company: "Meta Platforms",
    industry: "Social Media",
    fineAmount: "$356 million",
    details: "Ireland's DPC fined Meta for a 2018 breach compromising 29 million accounts.",
  },
  {
    id: "7",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
    description: "Uber fined $324 million for improper data transfer.",
    name: "Uber GDPR Violation",
    time: "August 2024",
    type: "lawsuit",
    company: "Uber Technologies",
    industry: "Ride-Hailing",
    fineAmount: "$324 million",
    details: "The Dutch DPA fined Uber for transferring drivers' personal data to the U.S. without proper safeguards.",
  },
  {
    id: "8",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026708d",
    description: "Clearview AI fined $33.7 million for GDPR violations.",
    name: "Clearview AI Fined",
    time: "September 2024",
    type: "lawsuit",
    company: "Clearview AI",
    industry: "Facial Recognition Technology",
    fineAmount: "$33.7 million",
    details: "The Dutch DPA fined Clearview AI for illegally scraping photos from social media without consent.",
  },
  {
    id: "9",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026709d",
    description: "TikTok fined $379 million for mishandling children's data.",
    name: "TikTok GDPR Breach",
    time: "September 2023",
    type: "lawsuit",
    company: "TikTok",
    industry: "Social Media",
    fineAmount: "$379 million",
    details: "Ireland's DPC fined TikTok for GDPR violations related to age verification and account settings.",
  },
  {
    id: "10",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026710d",
    description: "T-Mobile fined $31.5 million for data breaches.",
    name: "T-Mobile Settlement",
    time: "September 2024",
    type: "settlement",
    company: "T-Mobile",
    industry: "Telecommunications",
    fineAmount: "$31.5 million",
    details: "T-Mobile settled with the FCC over breaches affecting tens of millions of U.S. consumers.",
  },
  {
    id: "11",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026711d",
    description: "Meta fined $1.4 billion for collecting biometric data.",
    name: "Meta Biometric Settlement",
    time: "July 2024",
    type: "lawsuit",
    company: "Meta Platforms",
    industry: "Social Media",
    fineAmount: "$1.4 billion",
    details: "Meta paid Texas $1.4 billion to settle claims of collecting users' biometric data without consent.",
  },
  {
    id: "12",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026712d",
    description: "Google fined $57 million for insufficient user transparency.",
    name: "Google GDPR Fine",
    time: "January 2019",
    type: "lawsuit",
    company: "Google",
    industry: "Technology",
    fineAmount: "$57 million",
    details: "France's CNIL fined Google for failing to inform users adequately about its data collection practices.",
  },
  {
    id: "13",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026713d",
    description: "British Airways fined $26 million for data breaches.",
    name: "British Airways Fine",
    time: "October 2020",
    type: "lawsuit",
    company: "British Airways",
    industry: "Aviation",
    fineAmount: "$26 million",
    details: "The UK's ICO fined British Airways for failing to protect personal data of over 400,000 customers.",
  },
  {
    id: "14",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026714d",
    description: "Marriott fined $23.8 million for cybersecurity failures.",
    name: "Marriott Cybersecurity Breach",
    time: "October 2020",
    type: "lawsuit",
    company: "Marriott International",
    industry: "Hospitality",
    fineAmount: "$23.8 million",
    details: "The UK's ICO fined Marriott for failing to protect data of approximately 339 million guests.",
  },
  {
    id: "15",
    isRead: false,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026715d",
    description: "H&M fined $41 million for employee surveillance.",
    name: "H&M Employee Privacy Breach",
    time: "October 2020",
    type: "lawsuit",
    company: "H&M",
    industry: "Retail",
    fineAmount: "$41 million",
    details: "The Hamburg DPA fined H&M for illegally surveilling employees and recording extensive details about their private lives.",
  },
];


export default function NotificationCard(props: CardProps) {
  return (
    <Card
      className="w-full max-w-[420px] bg-purple-100 shadow-md rounded-lg"
      {...props}
    >
      {/* Header Section */}
      <CardHeader className="bg-purple-200 px-4 py-2 rounded-t-lg">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-lg font-semibold text-gray-800">Notifications</h4>
          <Chip size="sm" variant="flat" className="bg-transparent text-purple-700">
            {notifications.length}
          </Chip>
        </div>
      </CardHeader>

      {/* Body Section */}
      <CardBody className="bg-purple-100">
        <ScrollShadow className="h-[300px] overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationItem key={notification.id} {...notification} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Icon icon="solar:bell-off-outline" width={40} className="text-gray-500" />
              <p className="text-sm text-gray-500">No notifications found.</p>
            </div>
          )}
        </ScrollShadow>
      </CardBody>

      {/* Footer Section */}
      <div className="bg-purple-200 flex justify-end px-4 py-2 rounded-b-lg">
        <Button
          variant="flat"
          size="sm"
          className="bg-blue text-purple-700 hover:bg-purple-300"
        >
          Settings
        </Button>
      </div>
    </Card>
  );
}

