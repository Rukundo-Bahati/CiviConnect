import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ComplaintCard from "@/components/ComplaintCard";
import {
  mockComplaints,
  departments,
  statusLabels,
} from "@/utils/mockData";
import { Link } from "react-router-dom";
import { Search, Plus, Filter, Menu } from "lucide-react";
import ComplaintDetailsModal from "@/components/ComplaintDetailsModal";
import { useTranslation } from "@/utils/translations";

const Dashboard = () => {
  const { t } = useTranslation();

  const [filter, setFilter] = useState({
    status: "all",
    category: "all",
    search: "",
  });

  const [selectedComplaint, setSelectedComplaint] = useState<string | null>(
    null
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const userComplaints = mockComplaints.filter((c) => c.citizenId === "user1");

  const filteredComplaints = userComplaints.filter((c) => {
    const matchStatus = filter.status === "all" || c.status === filter.status;
    const matchCategory =
      filter.category === "all" || c.category === filter.category;
    const matchSearch =
      filter.search === "" ||
      c.title.toLowerCase().includes(filter.search.toLowerCase()) ||
      c.description.toLowerCase().includes(filter.search.toLowerCase()) ||
      c.location.toLowerCase().includes(filter.search.toLowerCase());
    return matchStatus && matchCategory && matchSearch;
  });

  const complaintToShow = selectedComplaint
    ? userComplaints.find((c) => c.id === selectedComplaint) || null
    : null;

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-screen w-64 bg-muted/30 border-r p-6 space-y-6 pt-20 
          transition-all duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-500 uppercase">
              {t("dashboard.activity")}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/dashboard"
                className="text-sm font-medium hover:text-primary transition"
              >
                {t("nav.dashboard")}
              </Link>
              <Link
                to="/submit"
                className="text-sm font-medium hover:text-primary transition"
              >
                {t("nav.submit")}
              </Link>
            </nav>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase">
              {t("dashboard.notifications")}
            </h3>
            <p className="text-sm text-gray-600">You have 2 new updates</p>
            <Button variant="link" className="text-sm px-0">
              {t("dashboard.seeAll")}
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-40 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu />
        <span className="sr-only">{t("dashboard.toggleSidebar")}</span>
      </Button>

      {/* Main Content Area */}
      <div className="flex flex-col min-h-screen w-full pl-64">
        {/* Scrollable page content */}
        <main className="flex-grow p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold">{t("dashboard.welcome")}</h1>
                <p className="text-gray-600">{t("dashboard.summary")}</p>
              </div>
              <Button asChild>
                <Link to="/submit">
                  <Plus className="mr-2 h-4 w-4" />
                  {t("nav.submit")}
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("dashboard.complaints")}</CardTitle>
                  <CardDescription>{t("dashboard.summary")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{userComplaints.length}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("dashboard.pending")}</CardTitle>
                  <CardDescription>{t("dashboard.summary")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {
                      userComplaints.filter((c) =>
                        ["in-progress", "under-review"].includes(c.status)
                      ).length
                    }
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("dashboard.resolved")}</CardTitle>
                  <CardDescription>{t("dashboard.summary")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {userComplaints.filter((c) => c.status === "resolved").length}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="all" className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <TabsList>
                  <TabsTrigger value="all">{t("dashboard.complaints")}</TabsTrigger>
                  <TabsTrigger value="active">{t("dashboard.pending")}</TabsTrigger>
                  <TabsTrigger value="resolved">{t("dashboard.resolved")}</TabsTrigger>
                </TabsList>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      placeholder={t("admin.search")}
                      className="pl-8 w-full"
                      value={filter.search}
                      onChange={(e) =>
                        setFilter({ ...filter, search: e.target.value })
                      }
                    />
                  </div>

                  <Select
                    value={filter.category}
                    onValueChange={(value) => setFilter({ ...filter, category: value })}
                  >
                    <SelectTrigger className="w-[180px]">
                      <Filter className="mr-2 h-4 w-4" />
                      <span>{t("admin.category")}</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {Object.entries(departments).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select
                    value={filter.status}
                    onValueChange={(value) => setFilter({ ...filter, status: value })}
                  >
                    <SelectTrigger className="w-[180px]">
                      <Filter className="mr-2 h-4 w-4" />
                      <span>{t("admin.status")}</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      {Object.entries(statusLabels).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {["all", "active", "resolved"].map((tab) => (
                <TabsContent value={tab} key={tab}>
                  {filteredComplaints.filter((c) =>
                    tab === "all"
                      ? true
                      : tab === "active"
                      ? ["pending", "in-progress", "under-review"].includes(c.status)
                      : c.status === "resolved"
                  ).length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {filteredComplaints
                        .filter((c) =>
                          tab === "all"
                            ? true
                            : tab === "active"
                            ? ["pending", "in-progress", "under-review"].includes(c.status)
                            : c.status === "resolved"
                        )
                        .map((complaint) => (
                          <ComplaintCard
                            key={complaint.id}
                            complaint={complaint}
                            showActions
                            onViewDetails={() => setSelectedComplaint(complaint.id)}
                          />
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium mb-2">
                        {t("dashboard.noComplaints")}
                      </h3>
                      <p className="text-gray-600 mb-6">{t("dashboard.submit")}</p>
                      <Button asChild>
                        <Link to="/submit">{t("dashboard.submit")}</Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </main>
      
      </div>

      <ComplaintDetailsModal
        complaint={complaintToShow}
        isOpen={!!selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
      />
    </div>
  );
};

export default Dashboard;
