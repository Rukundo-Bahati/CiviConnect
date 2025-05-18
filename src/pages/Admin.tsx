"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import StatusBadge from "@/components/StatusBadge"
import { mockComplaints, departments, statusLabels, analyticalData } from "@/utils/mockData"
import { Search, Filter } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

const Admin = () => {
  const [filter, setFilter] = useState<{
    status: string
    category: string
    search: string
  }>({
    status: "all",
    category: "all",
    search: "",
  })

  const [selectedComplaint, setSelectedComplaint] = useState<string | null>(null)
  const [responseText, setResponseText] = useState("")

  const filteredComplaints = mockComplaints.filter((complaint) => {
    const matchesStatus =
      filter.status === "all" || complaint.status === filter.status
    const matchesCategory =
      filter.category === "all" || complaint.category === filter.category
    const matchesSearch =
      filter.search === "" ||
      complaint.title.toLowerCase().includes(filter.search.toLowerCase()) ||
      complaint.description.toLowerCase().includes(filter.search.toLowerCase()) ||
      complaint.location.toLowerCase().includes(filter.search.toLowerCase())

    return matchesStatus && matchesCategory && matchesSearch
  })

  const handleSendResponse = () => {
    console.log("Sending response:", {
      complaintId: selectedComplaint,
      response: responseText,
    })
    setResponseText("")
    setSelectedComplaint(null)
  }

  return (
    <div className="container-custom py-6 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-gray-600">Manage and respond to citizen complaints</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base sm:text-lg">Total</CardTitle>
            <CardDescription>All complaints</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold">{mockComplaints.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base sm:text-lg">Pending</CardTitle>
            <CardDescription>Require attention</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold">
              {mockComplaints.filter((c) => c.status === "pending").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base sm:text-lg">In Progress</CardTitle>
            <CardDescription>Being addressed</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold">
              {mockComplaints.filter((c) => c.status === "in-progress").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base sm:text-lg">Resolved</CardTitle>
            <CardDescription>Successfully addressed</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold">
              {mockComplaints.filter((c) => c.status === "resolved").length}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="complaints" className="space-y-4 sm:space-y-6">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="complaints" className="text-sm sm:text-base">Manage Complaints</TabsTrigger>
          <TabsTrigger value="analytics" className="text-sm sm:text-base">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="complaints" className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search complaints..."
                className="pl-8 w-full sm:w-80"
                value={filter.search}
                onChange={(e) =>
                  setFilter({ ...filter, search: e.target.value })
                }
              />
            </div>
            <div className="flex gap-2 flex-col sm:flex-row">
              <Select
                value={filter.category}
                onValueChange={(value) =>
                  setFilter({ ...filter, category: value })
                }
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>Category</span>
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
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>Status</span>
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
              <div className="overflow-x-auto">
                <Table className="min-w-[800px] lg:min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">#</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead className="hidden sm:table-cell">Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Submission Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
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
                          <div className="text-sm text-gray-500 line-clamp-1">
                            {complaint.description}
                          </div>
                          <div className="sm:hidden mt-1">
                            <Badge variant="outline">
                              {departments[complaint.category]}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge variant="outline">
                            {departments[complaint.category]}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <StatusBadge status={complaint.status} />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
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
                                <span className="sr-only sm:not-sr-only">View Details</span>
                                <span className="sm:hidden">View</span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>Complaint Details</DialogTitle>
                                <DialogDescription>
                                  Review and respond to this complaint
                                </DialogDescription>
                              </DialogHeader>
                              
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                  <div className="space-y-1 sm:col-span-3">
                                    <h3 className="font-semibold text-lg">{complaint.title}</h3>
                                    <StatusBadge status={complaint.status} />
                                  </div>
                                  <div className="text-right">
                                    <Select defaultValue={complaint.status}>
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
                                    Description
                                  </div>
                                  <p>{complaint.description}</p>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                      Category
                                    </div>
                                    <p>{departments[complaint.category]}</p>
                                  </div>
                                  <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                      Location
                                    </div>
                                    <p>{complaint.location}</p>
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                      Submission Date
                                    </div>
                                    <p>{new Date(complaint.createdAt).toLocaleDateString()}</p>
                                  </div>
                                  <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                      Last Updated
                                    </div>
                                    <p>{new Date(complaint.updatedAt).toLocaleDateString()}</p>
                                  </div>
                                </div>
                                
                                {complaint.response && (
                                  <div className="border p-4 rounded-md">
                                    <div className="text-sm text-muted-foreground mb-1">
                                      Previous Response
                                    </div>
                                    <p className="mb-2">{complaint.response.text}</p>
                                    <p className="text-sm text-muted-foreground">
                                      By {complaint.response.respondentName}, {complaint.response.respondentTitle} on {new Date(complaint.response.timestamp).toLocaleDateString()}
                                    </p>
                                  </div>
                                )}
                                
                                <div>
                                  <div className="text-sm text-muted-foreground mb-2">
                                    Send Response
                                  </div>
                                  <Textarea
                                    placeholder="Type your response to the citizen here..."
                                    className="min-h-32"
                                    value={responseText}
                                    onChange={(e) => setResponseText(e.target.value)}
                                  />
                                </div>
                              </div>

                              <DialogFooter>
                                <Button 
                                  variant="outline" 
                                  onClick={() => {
                                    setSelectedComplaint(null)
                                    setResponseText("")
                                  }}
                                >
                                  Cancel
                                </Button>
                                <Button onClick={handleSendResponse}>
                                  Send Response
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Complaints by Category</CardTitle>
                <CardDescription>
                  Distribution of complaints across different departments
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] sm:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analyticalData.complaintsByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {analyticalData.complaintsByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complaints by Status</CardTitle>
                <CardDescription>
                  Current status of all complaints in the system
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] sm:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analyticalData.complaintsByStatus}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {analyticalData.complaintsByStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Response Time Analysis</CardTitle>
                <CardDescription>
                  Average time taken to respond to complaints
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] sm:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={analyticalData.responseTime}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" name="Number of Complaints" fill="#0088FE" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Admin