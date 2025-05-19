
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: number;
  color?: "purple" | "blue" | "gray";
  className?: string;
};

export default function DashboardCard({ 
  title, 
  value, 
  icon, 
  trend, 
  color = "purple",
  className
}: DashboardCardProps) {
  const getColorClass = () => {
    switch (color) {
      case "blue":
        return "bg-bubble-blue bg-opacity-10 text-bubble-blue";
      case "gray":
        return "bg-bubble-gray bg-opacity-10 text-bubble-gray-dark";
      case "purple":
      default:
        return "bg-bubble-purple bg-opacity-10 text-bubble-purple";
    }
  };

  const getTrendClass = () => {
    if (!trend) return "";
    return trend > 0 
      ? "text-green-500" 
      : "text-red-500";
  };

  return (
    <div className={cn("bubble-card animate-fade-in", className)}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-bubble-gray mb-1">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">{value}</span>
            {trend !== undefined && (
              <span className={cn("text-sm font-medium", getTrendClass())}>
                {trend > 0 ? "+" : ""}{trend}%
              </span>
            )}
          </div>
        </div>
        {icon && (
          <div className={cn("rounded-full p-3", getColorClass())}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
