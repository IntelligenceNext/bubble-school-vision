import { Users, BookOpen, Calendar, Award, CreditCard, School } from "lucide-react";
import DashboardCard from "@/components/DashboardCard";
import ModuleQuickLinks from "@/components/ModuleQuickLinks";
import ActivityCard from "@/components/ActivityCard";
import NoticeboardCard from "@/components/NoticeboardCard";

const activities = [
  { id: 1, user: "Admin", action: "Added new student 'John Doe'", time: "10 mins ago", status: "completed" as const },
  { id: 2, user: "Sarah", action: "Updated class schedule for 9th Grade", time: "30 mins ago", status: "completed" as const },
  { id: 3, user: "Daniel", action: "Uploaded exam results for 10th Grade", time: "1 hour ago", status: "pending" as const },
  { id: 4, user: "Emma", action: "Created new event 'Annual Sports Day'", time: "2 hours ago", status: "completed" as const }
];

const notices = [
  { id: 1, title: "Parent-Teacher Meeting", date: "May 25, 2025", category: "Meeting" },
  { id: 2, title: "Annual Sports Day", date: "June 5, 2025", category: "Event" },
  { id: 3, title: "Exam Schedule Released", date: "May 30, 2025", category: "Academic" },
  { id: 4, title: "School Holiday Announcement", date: "June 8, 2025", category: "Holiday" }
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-bubble-gray">Welcome to MySchool Management System</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        <DashboardCard 
          title="Total Students" 
          value="1,245" 
          icon={<Users size={20} />} 
          trend={2.5} 
        />
        <DashboardCard 
          title="Total Classes" 
          value="32" 
          icon={<BookOpen size={20} />} 
          color="blue" 
        />
        <DashboardCard 
          title="Today's Events" 
          value="3" 
          icon={<Calendar size={20} />} 
          color="gray" 
          trend={-1} 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        <DashboardCard 
          title="Upcoming Exams" 
          value="5" 
          icon={<Award size={20} />} 
          color="purple" 
        />
        <DashboardCard 
          title="Fee Collection" 
          value="$24,500" 
          icon={<CreditCard size={20} />} 
          color="blue" 
          trend={5.2} 
        />
        <DashboardCard 
          title="Total Schools" 
          value="3" 
          icon={<School size={20} />} 
          color="gray" 
        />
      </div>
      
      <div className="mb-6">
        <ModuleQuickLinks />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ActivityCard title="Recent Activities" activities={activities} />
        <NoticeboardCard notices={notices} />
      </div>
    </div>
  );
}
