"use client";

import type React from "react";
import { ArrowRight, Atom, Cpu, HardDrive, Calculator } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

function ServiceCard({
  title,
  description,
  icon,
  color,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      className={`relative flex h-full min-h-[280px] flex-col justify-between rounded-3xl p-8 ${color}`}
    >
      <div>
        <h3 className="mb-2 text-3xl font-bold text-slate-800 font-heading">
          {title}
        </h3>
        <p className="text-lg text-slate-700 font-body">{description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="text-6xl text-slate-800/20">{icon}</div>
        <button
          onClick={onClick}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white transition-transform hover:scale-105"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export function ServiceCards() {
  return (
    <div className="relative w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-rekora-light-blue -mt-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="SCIENCE"
            description="We challenge students with science experiments and encourage them to think and find solutions."
            icon={<Atom className="h-24 w-24" />}
            color="bg-yellow-200"
          />

          <ServiceCard
            title="TECH"
            description="You'll learn how to use basic coding tools, build simple, beautiful websites and webapps projects."
            icon={<Cpu className="h-24 w-24" />}
            color="bg-green-200"
          />

          <ServiceCard
            title="ENGINEERING"
            description="Here, you'll design and build fun projects and also learn how to fix problems when things don’t work."
            icon={<HardDrive className="h-24 w-24" />}
            color="bg-pink-200"
          />

          <ServiceCard
            title="MATH"
            description="We help you learn numbers, patterns and shapes by playing fun games and building things."
            icon={<Calculator className="h-24 w-24" />}
            color="bg-orange-200"
          />
        </div>
      </div>
    </div>
  );
}
