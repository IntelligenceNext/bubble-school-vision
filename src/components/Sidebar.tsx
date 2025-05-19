
import { useState } from "react";
import { NavItem, navigationData } from "@/data/navigationData";
import { cn } from "@/lib/utils";
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X,
  LayoutDashboard,
  School,
  Landmark,
  GraduationCap,
  Users,
  BarChart3,
  BookOpen,
  Bus,
  Activity,
  Home,
  MessageSquare,
  Library,
  Settings
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Mapping for icon names to Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  "dashboard": <LayoutDashboard size={18} />,
  "schools": <School size={18} />,
  "classes": <Landmark size={18} />,
  "students": <GraduationCap size={18} />,
  "admins": <Users size={18} />,
  "income": <BarChart3 size={18} />,
  "manage-exams": <BookOpen size={18} />,
  "transportation": <Bus size={18} />,
  "activities": <Activity size={18} />,
  "hostels": <Home size={18} />,
  "lessons": <BookOpen size={18} />,
  "tickets": <MessageSquare size={18} />,
  "library": <Library size={18} />,
  "settings": <Settings size={18} />
};

// Custom dynamic icon component that maps icon names to Lucide icons
const DynamicIcon = ({ name }: { name: string }) => {
  return iconMap[name] || (
    <div className="w-5 h-5 flex items-center justify-center">
      <span className="block w-2 h-2 rounded-full bg-current"></span>
    </div>
  );
};

const NavItemComponent = ({ item, isOpen, toggleOpen }: { 
  item: NavItem; 
  isOpen: boolean; 
  toggleOpen: () => void;
}) => {
  const location = useLocation();
  const isActive = item.path && location.pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="w-full">
      <div 
        onClick={hasChildren ? toggleOpen : undefined}
        className={cn(
          "flex items-center py-2 px-3 rounded-xl cursor-pointer gap-2 my-1 transition-colors",
          isActive 
            ? "bg-primary text-white" 
            : "hover:bg-bubble-purple hover:bg-opacity-10 text-bubble-gray-dark"
        )}
      >
        <span className="text-inherit">
          {item.icon && <DynamicIcon name={item.icon} />}
        </span>
        <span className="flex-grow text-sm font-medium">
          {hasChildren ? (
            <span>{item.title}</span>
          ) : (
            <Link to={item.path || "#"} className="block w-full">{item.title}</Link>
          )}
        </span>
        {hasChildren && (
          <span className="text-inherit">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </div>
      
      {hasChildren && isOpen && (
        <div className="pl-5 animate-slide-in">
          {item.children!.map((child, idx) => (
            <Link 
              key={idx} 
              to={child.path || "#"}
              className={cn(
                "flex items-center py-2 px-3 rounded-xl gap-2 my-1 text-sm transition-colors",
                location.pathname === child.path 
                  ? "bg-bubble-purple bg-opacity-10 text-bubble-purple" 
                  : "hover:bg-bubble-purple hover:bg-opacity-5 text-bubble-gray"
              )}
            >
              <span className="text-current w-4 h-4">
                {child.icon && <DynamicIcon name={child.icon} />}
              </span>
              <span>{child.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
      <div className="fixed lg:hidden top-4 left-4 z-50">
        <button 
          onClick={toggleSidebar} 
          className="bubble p-2 text-bubble-purple"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={cn(
        "fixed top-0 left-0 h-full z-40 transition-all duration-300 bg-white shadow-lg",
        isSidebarOpen ? "w-64" : "w-0 -translate-x-full lg:w-16 lg:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b">
            {isSidebarOpen ? (
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-bubble-purple to-bubble-blue flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <h1 className="ml-2 text-xl font-bold bg-gradient-to-r from-bubble-purple to-bubble-blue bg-clip-text text-transparent">
                  MySchool
                </h1>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-bubble-purple to-bubble-blue flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
            )}
          </div>
          
          {/* Nav Items */}
          <div className="flex-1 overflow-y-auto p-3">
            {navigationData.map((item, idx) => (
              <NavItemComponent 
                key={idx} 
                item={item} 
                isOpen={expandedItems[item.title] || false} 
                toggleOpen={() => toggleItem(item.title)} 
              />
            ))}
          </div>
          
          {/* User Profile */}
          <div className="p-3 border-t">
            <div className="flex items-center gap-2 p-2">
              <div className="w-8 h-8 rounded-full bg-bubble-purple text-white flex items-center justify-center text-sm font-medium">
                A
              </div>
              {isSidebarOpen && (
                <div className="flex-grow">
                  <div className="text-sm font-medium">Admin User</div>
                  <div className="text-xs text-bubble-gray">admin@myschool.com</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      <div 
        className={cn(
          "fixed inset-0 bg-black transition-opacity lg:hidden z-30",
          isSidebarOpen ? "opacity-30 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />
    </>
  );
}
