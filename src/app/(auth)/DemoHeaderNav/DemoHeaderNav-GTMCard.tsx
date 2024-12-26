"use client"
import React from "react";

import ActionCard from "./DemoHeaderNav-GTMCard-radio";

export default function Component() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <ActionCard
        description="15 Examples of how a lack of/disregard for data governance can cost millions 💵"
        icon="solar:shield-warning-line-duotone"
        title="Cautionary Tales"
        color="primary"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="Ireland's Data Protection Commission fined Meta €1.2 billion ($1.3 billion) for transferring personal data without adequate safeguards, violating GDPR."
        icon="solar:document-add-linear"
        title="CASE STUDY 1"
        color="primary"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="China's Cyberspace Administration fined Didi Global 8.026 billion yuan ($1.19 billion) for illegally collecting user data over seven years."
        icon="solar:document-add-linear"
        title="CASE STUDY 2"
        color="secondary"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="Luxembourg's data protection authority fined Amazon €746 million ($877 million) for GDPR violations related to targeted advertising."
        icon="solar:document-add-linear"
        title="CASE STUDY 3"
        color="warning"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="Equifax was fined at least $575 million by the U.S. FTC for a 2017 data breach exposing personal information of nearly 150 million people."
        icon="solar:document-add-linear"
        title="CASE STUDY 4"
        color="danger"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="The UK's Information Commissioner's Office fined Marriott £18.4 million ($24.3 million) for failing to protect the personal data of 339 million guests."
        icon="solar:document-add-linear"
        title="CASE STUDY 5"
        color="primary"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="Ireland's Data Protection Commission fined Meta €251 million ($356 million) for a 2018 data breach affecting 29 million users."
        icon="solar:document-add-linear"
        title="CASE STUDY 6"
        color="secondary"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="The Dutch Data Protection Authority fined Uber €290 million ($324 million) for transferring European drivers' data without safeguards, violating GDPR."
        icon="solar:document-add-linear"
        title="CASE STUDY 7"
        color="warning"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="Clearview AI was fined €30.5 million ($33.7 million) for scraping social media photos without consent, violating GDPR."
        icon="solar:document-add-linear"
        title="CASE STUDY 8"
        color="danger"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="Ireland's Data Protection Commission fined TikTok €345 million ($379 million) for mishandling children's data and violating GDPR."
        icon="solar:document-add-linear"
        title="CASE STUDY 9"
        color="primary"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="T-Mobile settled with the FCC for $31.5 million over data breaches affecting tens of millions of U.S. consumers."
        icon="solar:document-add-linear"
        title="CASE STUDY 10"
        color="secondary"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="Meta agreed to pay Texas $1.4 billion to settle a lawsuit over collecting biometric data without consent, marking the largest state privacy-related settlement."
        icon="solar:document-add-linear"
        title="CASE STUDY 11"
        color="warning"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="France's CNIL fined Google €50 million ($57 million) for failing to inform users about data collection methods, violating GDPR."
        icon="solar:document-add-linear"
        title="CASE STUDY 12"
        color="danger"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="The UK's Information Commissioner's Office fined British Airways £20 million ($26 million) for a data breach affecting over 400,000 customers."
        icon="solar:document-add-linear"
        title="CASE STUDY 13"
        color="primary"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="The UK's Information Commissioner's Office fined Marriott £18.4 million ($23.8 million) for a 2014 cyberattack compromising 339 million guests' data."
        icon="solar:document-add-linear"
        title="CASE STUDY 14"
        color="secondary"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />
      <ActionCard
        description="The Hamburg Data Protection Authority fined H&M €35 million ($41 million) for illegally surveilling employees and recording private details, violating GDPR."
        icon="solar:document-add-linear"
        title="CASE STUDY 15"
        color="warning"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />

    </div>
  );
}


