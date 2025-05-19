
import { cn } from "@/lib/utils";

type Notice = {
  id: number;
  title: string;
  date: string;
  category: string;
};

type NoticeboardCardProps = {
  notices: Notice[];
  className?: string;
};

export default function NoticeboardCard({ notices, className }: NoticeboardCardProps) {
  return (
    <div className={cn("bubble-card h-full", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Noticeboard</h3>
        <button className="text-sm text-bubble-purple">View All</button>
      </div>
      <div className="space-y-3">
        {notices.map((notice) => (
          <div key={notice.id} className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <h4 className="font-medium">{notice.title}</h4>
              <span className="text-xs bg-bubble-purple bg-opacity-10 text-bubble-purple px-2 py-1 rounded-full">
                {notice.category}
              </span>
            </div>
            <p className="text-xs text-bubble-gray mt-1">{notice.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
