import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Badge from "./Badge";

const integrations = [
  {
    title: "Notion integration",
    description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    href: "/",
    iconSrc: "/icons/notion.svg",
    iconAlt: "Notion icon",
  },
  {
    title: "Slack integration",
    description: "Work faster and smarter by integrating directly with Slack, right in the app.",
    href: "/",
    iconSrc: "/icons/slack.svg",
    iconAlt: "Slack icon",
  },
  {
    title: "Google Drive integration",
    description: "Work faster and smarter by integrating directly with Google Drive, right in the app.",
    href: "/",
    iconSrc: "/icons/google-drive.svg",
    iconAlt: "Google Drive icon",
  },
  {
    title: "Intercom integration",
    description: "Work faster and smarter by integrating directly with Intercom, right in the app.",
    href: "/",
    iconSrc: "/icons/intercom.svg",
    iconAlt: "Intercom icon",
  },
  {
    title: "Jira integration",
    description: "Work faster and smarter by integrating directly with Jira, right in the app.",
    href: "/",
    iconSrc: "/icons/jira.svg",
    iconAlt: "Jira icon",
  },
  {
    title: "Dropbox integration",
    description: "Work faster and smarter by integrating directly with Dropbox, right in the app.",
    href: "/",
    iconSrc: "/icons/dropbox.svg",
    iconAlt: "Dropbox icon",
  },
];

const IntegrationSection: React.FC = () => (
  <section className="py-20 md:px-32 px-2">
    <div className="max-w-3xl mx-auto text-center space-y-4 px-4">
      <Badge
        text="Integrations"
      />
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        Get more value from your tools
      </h2>
      <p className="text-gray-600 text-lg">
        Connect your tools, connect your teams. With over 100 apps already
        available in our directory, your team’s favourite tools are just a
        click away.
      </p>
    </div>

    <div className="mt-12 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {integrations.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="flex items-center justify-center bg-white rounded-xl">
            <Image
              src={item.iconSrc}
              alt={item.iconAlt}
              width={54}
              height={54}
              className="ring-1 ring-gray-200 rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <Link
            href={item.href}
            className="inline-flex items-center text-primary-500 hover:text-primary-800 font-medium space-x-1"
          >
            <span className="">View integration</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default IntegrationSection;
