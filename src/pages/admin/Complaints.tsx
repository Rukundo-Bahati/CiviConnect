
import { useState } from "react";
import { mockComplaints, departments, statusLabels } from "@/utils/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import StatusBadge from "@/components/StatusBadge";
import { Menu, Search, Filter } from "lucide-react";
import { useTranslation } from "@/utils/translations";
import { useToast } from "@/hooks/use-toast";

const ComplaintsAdmin = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [filter, setFilter] = useState<{
    status: string;
    category: string;
    search: string;
  }>({
    status: "all",
    category: "all",
    search: "",
  });

  const [selectedComplaint, setSelectedComplaint] = useState<string | null>(null);
  const [responseText, setResponseText] = useState("");
  const [isSendingResponse, setIsSendingResponse] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredComplaints = mockComplaints.filter((complaint) => {
    const matchesStatus =
      filter.status === "all" || complaint.status === filter.status;
    const matchesCategory =
      filter.category === "all" || complaint.category === filter.category;
    const matchesSearch =
      filter.search === "" ||
      complaint.title.toLowerCase().includes(filter.search.toLowerCase()) ||
      complaint.description.toLowerCase().includes(filter.search.toLowerCase()) ||
      complaint.location.toLowerCase().includes(filter.search.toLowerCase());

    return matchesStatus && matchesCategory && matchesSearch;
  });

  const handleSendResponse = () => {
    if (!responseText.trim()) {
      toast({
        title: "Response required",
        description: "Please enter a response before sending",
        variant: "destructive"
      });
      return;
    }
    
    setIsSendingResponse(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSendingResponse(false);
      setResponseText("");
      setSelectedComplaint(null);
      
      toast({
        title: "Response sent",
        description: "Your response has been sent to the citizen",
      });
    }, 1000);
  };

  const getComplaintById = (id: string | null) => {
    if (!id) return null;
    return mockComplaints.find(c => c.id === id) || null;
  };

  const selectedComplaintData = getComplaintById(selectedComplaint);

  return (
    <div className="flex">
      {/* Sidebar Toggle Button for Mobile */}
      <Button 
        variant="outline" 
        size="icon" 
        className="fixed bottom-4 right-4 z-40 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu />
        <span className="sr-only">{t('dashboard.toggleSidebar')}</span>
      </Button>
      {/* Main Content */}
      <div className="flex-grow p-6">
        <div className="container-custom max-w-7xl py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight font-display">{t('admin.complaints')}</h1>
            <p className="text-muted-foreground mt-2">{t('admin.reviewRespond')}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-between mb-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('admin.search')}
                className="pl-8 w-full sm:w-80"
                value={filter.search}
                onChange={(e) =>
                  setFilter({ ...filter, search: e.target.value })
                }
              />
            </div>
            <div className="flex gap-2">
              <Select
                value={filter.category}
                onValueChange={(value) =>
                  setFilter({ ...filter, category: value })
                }
              >
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>{t('admin.category')}</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {Object.entries(departments).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={filter.status}
                onValueChange={(value) =>
                  setFilter({ ...filter, status: value })
                }
              >
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>{t('admin.status')}</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  {Object.entries(statusLabels).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>{t('admin.title')}</TableHead>
                    <TableHead>{t('admin.category')}</TableHead>
                    <TableHead>{t('admin.status')}</TableHead>
                    <TableHead>{t('admin.submissionDate')}</TableHead>
                    <TableHead className="text-right">{t('admin.actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredComplaints.map((complaint) => (
                    <TableRow key={complaint.id}>
                      <TableCell className="font-medium">
                        {complaint.id}
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{complaint.title}</div>
                        <div className="text-sm text-muted-foreground truncate max-w-72">
                          {complaint.description}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {departments[complaint.category]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={complaint.status} />
                      </TableCell>
                      <TableCell>
                        {new Date(complaint.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedComplaint(complaint.id)}
                            >
                              {t('admin.viewDetails')}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>{t('admin.complaintDetails')}</DialogTitle>
                              <DialogDescription>
                                {t('admin.reviewRespond')}
                              </DialogDescription>
                            </DialogHeader>
                            
                            {selectedComplaintData && (
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 gap-4">
                                  <div className="space-y-1 col-span-3">
                                    <h3 className="font-semibold text-lg">{selectedComplaintData.title}</h3>
                                    <StatusBadge status={selectedComplaintData.status} />
                                  </div>
                                  <div className="text-right">
                                    <Select defaultValue={selectedComplaintData.status}>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Update Status" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {Object.entries(statusLabels).map(([key, value]) => (
                                          <SelectItem key={key} value={key}>
                                            {value}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                
                                <div className="border p-4 rounded-md bg-muted/50">
                                  <div className="text-sm text-muted-foreground mb-1">
                                    {t('admin.description')}
                                  </div>
                                  <p>{selectedComplaintData.description}</p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                      {t('admin.category')}
                                    </div>
                                    <p>{departments[selectedComplaintData.category]}</p>
                                  </div>
                                  <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                      {t('admin.location')}
                                    </div>
                                    <p>{selectedComplaintData.location}</p>
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                      {t('admin.submissionDate')}
                                    </div>
                                    <p>{new Date(selectedComplaintData.createdAt).toLocaleDateString()}</p>
                                  </div>
                                  <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                      {t('admin.lastUpdated')}
                                    </div>
                                    <p>{new Date(selectedComplaintData.updatedAt).toLocaleDateString()}</p>
                                  </div>
                                </div>
                                
                                {selectedComplaintData.response && (
                                  <div className="border p-4 rounded-md">
                                    <div className="text-sm text-muted-foreground mb-1">
                                      {t('admin.previousResponse')}
                                    </div>
                                    <p className="mb-2">{selectedComplaintData.response.text}</p>
                                    <p className="text-sm text-muted-foreground">
                                      By {selectedComplaintData.response.respondentName}, {selectedComplaintData.response.respondentTitle} on {new Date(selectedComplaintData.response.timestamp).toLocaleDateString()}
                                    </p>
                                  </div>
                                )}
                                
                                <div>
                                  <div className="text-sm text-muted-foreground mb-2">
                                    {t('admin.sendResponse')}
                                  </div>
                                  <Textarea
                                    placeholder={t('admin.responsePrompt')}
                                    className="min-h-32"
                                    value={responseText}
                                    onChange={(e) => setResponseText(e.target.value)}
                                  />
                                </div>
                              </div>
                            )}

                            <DialogFooter>
                              <Button 
                                variant="outline" 
                                onClick={() => {
                                  setSelectedComplaint(null);
                                  setResponseText("");
                                }}
                              >
                                {t('admin.cancel')}
                              </Button>
                              <Button 
                                onClick={handleSendResponse}
                                disabled={isSendingResponse}
                              >
                                {isSendingResponse ? "Sending..." : t('admin.send')}
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsAdmin;
