
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { navigationData } from "@/data/navigationData";

type QuickLinkProps = {
  title: string;
  path: string;
  icon?: string;
};

const QuickLink = ({ title, path, icon }: QuickLinkProps) => {
  return (
    <Link 
      to={path} 
      className="bubble flex flex-col items-center justify-center p-4 text-center hover:translate-y-[-5px] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bubble-purple to-bubble-blue mb-3 flex items-center justify-center text-white">
        {icon?.charAt(0).toUpperCase()}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </Link>
  );
};

export default function ModuleQuickLinks() {
  // Get some key modules from navigation data
  const quickLinks: QuickLinkProps[] = [
    { title: "Students", path: "/student/list", icon: "S" },
    { title: "Classes", path: "/academic/class-sections", icon: "C" },
    { title: "Attendance", path: "/academic/attendance", icon: "A" },
    { title: "Exams", path: "/examination/exams", icon: "E" },
    { title: "Fee Invoices", path: "/accounting/fee-invoices", icon: "F" },
    { title: "Reports", path: "/examination/academic-report", icon: "R" },
  ];

  return (
    <div className="bubble-card">
      <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {quickLinks.map((link, index) => (
          <QuickLink
            key={index}
            title={link.title}
            path={link.path}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  );
}
