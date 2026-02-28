"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="text-center py-8">
      <div className="w-12 h-12 mx-auto mb-4 text-gray-600">
        {icon}
      </div>
      <p className="text-gray-400 mb-4">{title}</p>
      <p className="text-gray-500 text-sm mb-6">{description}</p>
      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
