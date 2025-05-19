
import { cn } from "@/lib/utils";

type Activity = {
  id: number;
  user: string;
  action: string;
  time: string;
  status?: "completed" | "pending" | "failed";
};

type ActivityCardProps = {
  title: string;
  activities: Activity[];
  className?: string;
};

export default function ActivityCard({ title, activities, className }: ActivityCardProps) {
  const getStatusClass = (status?: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className={cn("bubble-card h-full", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
            <div className="w-8 h-8 rounded-full bg-bubble-purple bg-opacity-20 text-bubble-purple flex items-center justify-center">
              {activity.user.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">{activity.user}</p>
                <span className="text-xs text-bubble-gray">{activity.time}</span>
              </div>
              <p className="text-sm text-bubble-gray-dark">{activity.action}</p>
              {activity.status && (
                <span className={cn("text-xs px-2 py-1 rounded-full inline-block mt-1", getStatusClass(activity.status))}>
                  {activity.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
