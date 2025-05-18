import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/utils/translations";
import { Search, Mail, Phone, MapPin, FileText } from "lucide-react";

// Mock citizens data (English + Kinyarwanda)
const mockCitizens = [
  {
    id: 1,
    name: {
      en: "Alice Mukamana",
      rw: "Alice Mukamana"
    },
    email: "alice@example.com",
    phone: "+250788123456",
    address: "Kigali, Rwanda",
    submissionsCount: 5,
    verified: true,
    status: {
      en: "Active",
      rw: "Akora"
    },
    joinDate: "2024-01-15"
  },
  {
    id: 2,
    name: {
      en: "Jean Pierre",
      rw: "Jean Pierre"
    },
    email: "jpierre@example.com",
    phone: "+250788654321",
    address: "Gisenyi, Rwanda",
    submissionsCount: 2,
    verified: false,
    status: {
      en: "Inactive",
      rw: "Ntakoze"
    },
    joinDate: "2023-11-03"
  },
  {
    id: 3,
    name: {
      en: "Claire Uwase",
      rw: "Claire Uwase"
    },
    email: "claireu@example.com",
    phone: "+250788987654",
    address: "Butare, Rwanda",
    submissionsCount: 8,
    verified: true,
    status: {
      en: "Active",
      rw: "Akora"
    },
    joinDate: "2022-08-22"
  }
];

// Mock complaints data (English + Kinyarwanda)
const mockCitizenComplaints = [
  {
    id: 101,
    citizenId: 1,
    title: {
      en: "Delayed garbage collection",
      rw: "Gutinda gukusanya imyanda"
    },
    description: {
      en: "Garbage has not been collected for 2 weeks in our neighborhood.",
      rw: "Imyanda ntiyakusanyijwe mu byumweru bibiri mu gace kacu."
    },
    category: "Sanitation",
    status: "pending",
    submissionDate: "2024-04-10"
  },
  {
    id: 102,
    citizenId: 1,
    title: {
      en: "Broken street light",
      rw: "Itara ryo ku muhanda ryangiritse"
    },
    description: {
      en: "The street light near my house is not working.",
      rw: "Itara ryo ku muhanda hafi y'inzu yanjye ntirikorera."
    },
    category: "Infrastructure",
    status: "resolved",
    submissionDate: "2023-12-05"
  },
  {
    id: 103,
    citizenId: 2,
    title: {
      en: "Water supply interruption",
      rw: "Guhagarara kwa serivisi y'amazi"
    },
    description: {
      en: "Water has been cut off for 3 days in our area.",
      rw: "Amazi yacitseho iminsi itatu mu gace kacu."
    },
    category: "Utilities",
    status: "in-progress",
    submissionDate: "2024-03-20"
  },
  {
    id: 104,
    citizenId: 3,
    title: {
      en: "Noise pollution",
      rw: "Ibitotsi byinshi biva mu gace"
    },
    description: {
      en: "Excessive noise from a nearby factory during night hours.",
      rw: "Urusaku rwinshi ruvuye mu ruganda ruri hafi mu masaha y'ijoro."
    },
    category: "Environment",
    status: "pending",
    submissionDate: "2024-02-15"
  }
];

const CitizensAdmin = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCitizen, setSelectedCitizen] = useState<any>(null);

  const filteredCitizens = mockCitizens.filter((citizen) =>
    citizen.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    citizen.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    citizen.id.toString().includes(searchTerm.toLowerCase())
  );

  const getCitizenComplaints = (citizenId: number) => {
    return mockCitizenComplaints.filter(complaint => complaint.citizenId === citizenId);
  };

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-display">
          {t("citizens.title")}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t("citizens.subtitle")}
        </p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("citizens.searchPlaceholder")}
          className="pl-8 w-full max-w-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("citizens.table.id")}</TableHead>
                <TableHead>{t("citizens.table.name")}</TableHead>
                <TableHead>{t("citizens.table.email")}</TableHead>
                <TableHead>{t("citizens.table.submissions")}</TableHead>
                <TableHead>{t("citizens.table.status")}</TableHead>
                <TableHead>{t("citizens.table.joinDate")}</TableHead>
                <TableHead className="text-right">{t("citizens.table.actions")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCitizens.map((citizen) => (
                <TableRow key={citizen.id}>
                  <TableCell className="font-medium">{citizen.id}</TableCell>
                  <TableCell>{citizen.name.en}</TableCell>
                  <TableCell>{citizen.email}</TableCell>
                  <TableCell>{citizen.submissionsCount}</TableCell>
                  <TableCell>
                    {citizen.verified ? (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        {citizen.status.en}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-amber-800 border-amber-800 dark:text-amber-400 dark:border-amber-400">
                        {citizen.status.en}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{new Date(citizen.joinDate).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setSelectedCitizen(citizen)}
                        >
                          {t("actions.viewDetails")}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{t("dialog.title")}</DialogTitle>
                          <DialogDescription>{t("dialog.description")}</DialogDescription>
                        </DialogHeader>

                        {selectedCitizen && (
                          <Tabs defaultValue="profile" className="mt-4">
                            <TabsList className="mb-4">
                              <TabsTrigger value="profile">{t("tabs.profile")}</TabsTrigger>
                              <TabsTrigger value="submissions">{t("tabs.submissions")}</TabsTrigger>
                            </TabsList>

                            <TabsContent value="profile">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div>
                                    <h3 className="text-lg font-semibold">{selectedCitizen.name.en}</h3>
                                    <p className="text-sm text-muted-foreground">ID: {selectedCitizen.id}</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <span>{selectedCitizen.email}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <span>{selectedCitizen.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                    <span>{selectedCitizen.address}</span>
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <div className="p-4 border rounded-md bg-muted/20">
                                    <h4 className="font-medium mb-2">{t("account.details")}</h4>
                                    <ul className="space-y-2">
                                      <li className="flex justify-between">
                                        <span className="text-muted-foreground">{t("account.joinDate")}</span>
                                        <span>{new Date(selectedCitizen.joinDate).toLocaleDateString()}</span>
                                      </li>
                                      <li className="flex justify-between">
                                        <span className="text-muted-foreground">{t("account.status")}</span>
                                        <Badge className={selectedCitizen.verified ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}>
                                          {selectedCitizen.verified ? t("status.verified") : t("status.pending")}
                                        </Badge>
                                      </li>
                                      <li className="flex justify-between">
                                        <span className="text-muted-foreground">{t("account.totalSubmissions")}</span>
                                        <span>{selectedCitizen.submissionsCount}</span>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline">{t("actions.sendMessage")}</Button>
                                    {!selectedCitizen.verified && <Button>{t("actions.verifyAccount")}</Button>}
                                  </div>
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="submissions">
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-semibold">{t("submissions.title")}</h3>
                                  <Button variant="outline" size="sm" className="gap-2">
                                    <FileText className="h-4 w-4" />
                                    {t("actions.export")}
                                  </Button>
                                </div>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>{t("submissions.table.id")}</TableHead>
                                      <TableHead>{t("submissions.table.title")}</TableHead>
                                      <TableHead>{t("submissions.table.category")}</TableHead>
                                      <TableHead>{t("submissions.table.status")}</TableHead>
                                      <TableHead>{t("submissions.table.date")}</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    {getCitizenComplaints(selectedCitizen.id).map((complaint) => (
                                      <TableRow key={complaint.id}>
                                        <TableCell>{complaint.id}</TableCell>
                                        <TableCell>{complaint.title.en}</TableCell>
                                        <TableCell>
                                          <Badge variant="outline">{complaint.category}</Badge>
                                        </TableCell>
                                        <TableCell>
                                          <Badge
                                            className={
                                              complaint.status === "resolved"
                                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                                : complaint.status === "in-progress"
                                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                                : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                                            }
                                          >
                                            {complaint.status}
                                          </Badge>
                                        </TableCell>
                                        <TableCell>{new Date(complaint.submissionDate).toLocaleDateString()}</TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                                {getCitizenComplaints(selectedCitizen.id).length === 0 && (
                                  <div className="p-8 text-center">
                                    <p className="text-muted-foreground">{t("submissions.noData")}</p>
                                  </div>
                                )}
                              </div>
                            </TabsContent>
                          </Tabs>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
              {filteredCitizens.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    {t("citizens.noResults")}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CitizensAdmin;