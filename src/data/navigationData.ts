
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
      { title: "Sessions", path: "/school-management/sessions", icon: "sessions" },
      { title: "Settings", path: "/school-management/settings", icon: "settings" }
    ]
  },
  {
    title: "School",
    icon: "schools",
    children: [
      { title: "Dashboard", path: "/school/dashboard", icon: "dashboard" },
      { title: "Inquiries", path: "/school/inquiries", icon: "inquiries" },
      { title: "Settings", path: "/school/settings", icon: "settings" },
      { title: "Logs", path: "/school/logs", icon: "logs" }
    ]
  },
  {
    title: "Academic",
    icon: "classes",
    children: [
      { title: "Dashboard", path: "/academic/dashboard", icon: "dashboard" },
      { title: "Manage Class Sections", path: "/academic/class-sections", icon: "manage-class-sections" },
      { title: "Manage Medium", path: "/academic/medium", icon: "manage-medium" },
      { title: "Manage Student Type", path: "/academic/student-type", icon: "manage-student-type" },
      { title: "Subjects", path: "/academic/subjects", icon: "subjects" },
      { title: "Class Time Table", path: "/academic/timetable", icon: "class-time-table" },
      { title: "Attendance", path: "/academic/attendance", icon: "attendance" },
      { title: "Student Leaves", path: "/academic/student-leaves", icon: "student-leaves" },
      { title: "Study Materials", path: "/academic/materials", icon: "study-materials" },
      { title: "Homework", path: "/academic/homework", icon: "homework" },
      { title: "Noticeboard", path: "/academic/noticeboard", icon: "noticeboard" },
      { title: "Event", path: "/academic/events", icon: "event" },
      { title: "Live Classes", path: "/academic/live-classes", icon: "live-classes" },
      { title: "Staff Ratting", path: "/academic/staff-ratting", icon: "staff-ratting" },
      { title: "Student Birthdays", path: "/academic/birthdays", icon: "student-birthdays" }
    ]
  },
  {
    title: "Student",
    icon: "students",
    children: [
      { title: "Dashboard", path: "/student/dashboard", icon: "dashboard" },
      { title: "Admission", path: "/student/admission", icon: "admission" },
      { title: "Students", path: "/student/list", icon: "students" },
      { title: "ID Cards", path: "/student/id-cards", icon: "id-card" },
      { title: "Promote", path: "/student/promote", icon: "promote" },
      { title: "Transfer Student", path: "/student/transfer", icon: "transfer-student" },
      { title: "Certificates", path: "/student/certificates", icon: "certificates" },
      { title: "Notifications", path: "/student/notifications", icon: "notifications" }
    ]
  },
  {
    title: "Administrator",
    icon: "admins",
    children: [
      { title: "Dashboard", path: "/administrator/dashboard", icon: "dashboard" },
      { title: "Admins", path: "/administrator/admins", icon: "admins" },
      { title: "Roles", path: "/administrator/roles", icon: "roles" },
      { title: "Staff List", path: "/administrator/staff", icon: "staff-list" },
      { title: "Staff Attendance", path: "/administrator/staff-attendance", icon: "staff-attendance" },
      { title: "Staff Leaves", path: "/administrator/staff-leaves", icon: "staff-leaves" }
    ]
  },
  {
    title: "Accounting",
    icon: "income",
    children: [
      { title: "Dashboard", path: "/accounting/dashboard", icon: "dashboard" },
      { title: "Income", path: "/accounting/income", icon: "income" },
      { title: "Expenses", path: "/accounting/expenses", icon: "expenses" },
      { title: "Fee Invoices", path: "/accounting/fee-invoices", icon: "fee-invoices" },
      { title: "Collect Payments", path: "/accounting/collect-payments", icon: "collect-payments" },
      { title: "Fee Types", path: "/accounting/fee-types", icon: "fee-types" },
      { title: "Bulk Invoice Prints", path: "/accounting/bulk-invoices", icon: "bulk-invoice-prints" },
      { title: "Invoices Report", path: "/accounting/reports", icon: "invoices-report" }
    ]
  },
  {
    title: "Examination",
    icon: "manage-exams",
    children: [
      { title: "Dashboard", path: "/examination/dashboard", icon: "dashboard" },
      { title: "Manage Exams", path: "/examination/exams", icon: "manage-exams" },
      { title: "Manage Groups", path: "/examination/groups", icon: "manage-groups" },
      { title: "Admit Cards", path: "/examination/admit-cards", icon: "admit-cards" },
      { title: "Admit Cards Bulk Print", path: "/examination/admit-cards-bulk", icon: "admit-cards-bulk-print" },
      { title: "Exam Results", path: "/examination/results", icon: "exam-results" },
      { title: "Bulk Print Results", path: "/examination/bulk-results", icon: "bulk-print-results" },
      { title: "Academic Report", path: "/examination/academic-report", icon: "academic-report" }
    ]
  },
  {
    title: "Transportation",
    icon: "transportation",
    children: [
      { title: "Dashboard", path: "/transportation/dashboard", icon: "dashboard" },
      { title: "Vehicles", path: "/transportation/vehicles", icon: "vehicles" },
      { title: "Routes", path: "/transportation/routes", icon: "routes" },
      { title: "Report", path: "/transportation/report", icon: "report" }
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
      { title: "Rooms", path: "/hostel/rooms", icon: "rooms" }
    ]
  },
  {
    title: "Lessons",
    icon: "lessons",
    children: [
      { title: "Lessons", path: "/lessons/list", icon: "lessons" },
      { title: "Chapters", path: "/lessons/chapters", icon: "chapters" }
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
      { title: "All Books", path: "/library/books", icon: "all-books" },
      { title: "Books Issued", path: "/library/issued", icon: "books-issued" },
      { title: "Library Cards", path: "/library/cards", icon: "library-cards" }
    ]
  }
];
