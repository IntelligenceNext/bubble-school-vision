
// Define the structure for navigation items
export interface NavItem {
  title: string;
  icon?: string;
  children?: NavItem[];
  path?: string;
}

// Navigation data structure
export const navigationData: NavItem[] = [
  {
    title: "School Management",
    icon: "dashboard",
    children: [
      { title: "Dashboard", path: "/school-management/dashboard", icon: "dashboard" },
      { title: "Schools", path: "/school-management/schools", icon: "schools" },
      { title: "Classes", path: "/school-management/classes", icon: "classes" },
      { title: "Sessions", path: "/school-management/sessions", icon: "dashboard" },
      { title: "Settings", path: "/school-management/settings", icon: "settings" }
    ]
  },
  {
    title: "School",
    icon: "schools",
    children: [
      { title: "Dashboard", path: "/school/dashboard", icon: "dashboard" },
      { title: "Inquiries", path: "/school/inquiries", icon: "dashboard" },
      { title: "Settings", path: "/school/settings", icon: "settings" },
      { title: "Logs", path: "/school/logs", icon: "dashboard" }
    ]
  },
  {
    title: "Academic",
    icon: "classes",
    children: [
      { title: "Dashboard", path: "/academic/dashboard", icon: "dashboard" },
      { title: "Manage Class Sections", path: "/academic/class-sections", icon: "classes" },
      { title: "Manage Medium", path: "/academic/medium", icon: "dashboard" },
      { title: "Manage Student Type", path: "/academic/student-type", icon: "dashboard" },
      { title: "Subjects", path: "/academic/subjects", icon: "dashboard" },
      { title: "Class Time Table", path: "/academic/timetable", icon: "dashboard" },
      { title: "Attendance", path: "/academic/attendance", icon: "dashboard" },
      { title: "Student Leaves", path: "/academic/student-leaves", icon: "dashboard" },
      { title: "Study Materials", path: "/academic/materials", icon: "dashboard" },
      { title: "Homework", path: "/academic/homework", icon: "dashboard" },
      { title: "Noticeboard", path: "/academic/noticeboard", icon: "dashboard" },
      { title: "Event", path: "/academic/events", icon: "dashboard" },
      { title: "Live Classes", path: "/academic/live-classes", icon: "dashboard" },
      { title: "Staff Ratting", path: "/academic/staff-ratting", icon: "dashboard" },
      { title: "Student Birthdays", path: "/academic/birthdays", icon: "dashboard" }
    ]
  },
  {
    title: "Student",
    icon: "students",
    children: [
      { title: "Dashboard", path: "/student/dashboard", icon: "dashboard" },
      { title: "Admission", path: "/student/admission", icon: "dashboard" },
      { title: "Students", path: "/student/list", icon: "students" },
      { title: "ID Cards", path: "/student/id-cards", icon: "dashboard" },
      { title: "Promote", path: "/student/promote", icon: "dashboard" },
      { title: "Transfer Student", path: "/student/transfer", icon: "dashboard" },
      { title: "Certificates", path: "/student/certificates", icon: "dashboard" },
      { title: "Notifications", path: "/student/notifications", icon: "dashboard" }
    ]
  },
  {
    title: "Administrator",
    icon: "admins",
    children: [
      { title: "Dashboard", path: "/administrator/dashboard", icon: "dashboard" },
      { title: "Admins", path: "/administrator/admins", icon: "admins" },
      { title: "Roles", path: "/administrator/roles", icon: "dashboard" },
      { title: "Staff List", path: "/administrator/staff", icon: "dashboard" },
      { title: "Staff Attendance", path: "/administrator/staff-attendance", icon: "dashboard" },
      { title: "Staff Leaves", path: "/administrator/staff-leaves", icon: "dashboard" }
    ]
  },
  {
    title: "Accounting",
    icon: "income",
    children: [
      { title: "Dashboard", path: "/accounting/dashboard", icon: "dashboard" },
      { title: "Income", path: "/accounting/income", icon: "income" },
      { title: "Expenses", path: "/accounting/expenses", icon: "dashboard" },
      { title: "Fee Invoices", path: "/accounting/fee-invoices", icon: "dashboard" },
      { title: "Collect Payments", path: "/accounting/collect-payments", icon: "dashboard" },
      { title: "Fee Types", path: "/accounting/fee-types", icon: "dashboard" },
      { title: "Bulk Invoice Prints", path: "/accounting/bulk-invoices", icon: "dashboard" },
      { title: "Invoices Report", path: "/accounting/reports", icon: "dashboard" }
    ]
  },
  {
    title: "Examination",
    icon: "manage-exams",
    children: [
      { title: "Dashboard", path: "/examination/dashboard", icon: "dashboard" },
      { title: "Manage Exams", path: "/examination/exams", icon: "manage-exams" },
      { title: "Manage Groups", path: "/examination/groups", icon: "dashboard" },
      { title: "Admit Cards", path: "/examination/admit-cards", icon: "dashboard" },
      { title: "Admit Cards Bulk Print", path: "/examination/admit-cards-bulk", icon: "dashboard" },
      { title: "Exam Results", path: "/examination/results", icon: "dashboard" },
      { title: "Bulk Print Results", path: "/examination/bulk-results", icon: "dashboard" },
      { title: "Academic Report", path: "/examination/academic-report", icon: "dashboard" }
    ]
  },
  {
    title: "Transportation",
    icon: "transportation",
    children: [
      { title: "Dashboard", path: "/transportation/dashboard", icon: "dashboard" },
      { title: "Vehicles", path: "/transportation/vehicles", icon: "dashboard" },
      { title: "Routes", path: "/transportation/routes", icon: "dashboard" },
      { title: "Report", path: "/transportation/report", icon: "dashboard" }
    ]
  },
  {
    title: "Activities",
    icon: "activities",
    path: "/activities"
  },
  {
    title: "Hostel",
    icon: "hostels",
    children: [
      { title: "Dashboard", path: "/hostel/dashboard", icon: "dashboard" },
      { title: "Hostels", path: "/hostel/list", icon: "hostels" },
      { title: "Rooms", path: "/hostel/rooms", icon: "dashboard" }
    ]
  },
  {
    title: "Lessons",
    icon: "lessons",
    children: [
      { title: "Lessons", path: "/lessons/list", icon: "lessons" },
      { title: "Chapters", path: "/lessons/chapters", icon: "dashboard" }
    ]
  },
  {
    title: "Tickets",
    icon: "tickets",
    children: [
      { title: "Dashboard", path: "/tickets/dashboard", icon: "dashboard" },
      { title: "Tickets", path: "/tickets/list", icon: "tickets" }
    ]
  },
  {
    title: "Library",
    icon: "library",
    children: [
      { title: "Dashboard", path: "/library/dashboard", icon: "dashboard" },
      { title: "All Books", path: "/library/books", icon: "library" },
      { title: "Books Issued", path: "/library/issued", icon: "dashboard" },
      { title: "Library Cards", path: "/library/cards", icon: "dashboard" }
    ]
  }
];
