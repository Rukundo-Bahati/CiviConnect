
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Complaint, departments } from "@/utils/mockData";
import StatusBadge from "@/components/StatusBadge";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import { useTranslation } from "@/utils/translations";

interface ComplaintDetailsModalProps {
  complaint: Complaint | null;
  isOpen: boolean;
  onClose: () => void;
}

const ComplaintDetailsModal: React.FC<ComplaintDetailsModalProps> = ({ complaint, isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!complaint) {
    return null;
  }

  const formattedDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{t('dashboard.complaintDetails')}</DialogTitle>
          <DialogDescription>{complaint.title}</DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">
                {departments[complaint.category]}
              </p>
              <StatusBadge status={complaint.status} />
            </div>
            <div className="text-sm text-muted-foreground">
              <p>ID: {complaint.id}</p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <h4 className="text-sm font-medium mb-2">{t('admin.description')}</h4>
            <p className="text-sm">{complaint.description}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-1">{t('admin.location')}</h4>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                <span>{complaint.location}</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-1">{t('admin.submissionDate')}</h4>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-1 h-3.5 w-3.5" />
                <span>{formattedDate(complaint.createdAt)}</span>
              </div>
            </div>
            {complaint.updatedAt !== complaint.createdAt && (
              <div>
                <h4 className="font-medium mb-1">{t('admin.lastUpdated')}</h4>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-1 h-3.5 w-3.5" />
                  <span>{formattedDate(complaint.updatedAt)}</span>
                </div>
              </div>
            )}
          </div>

          {complaint.response && (
            <div className="border p-4 rounded-md bg-green-50">
              <h4 className="font-medium mb-2">{t('dashboard.viewOfficialResponse')}</h4>
              <p className="text-sm mb-2">{complaint.response.text}</p>
              <p className="text-xs text-muted-foreground">
                {complaint.response.respondentName}, {complaint.response.respondentTitle} • {formattedDate(complaint.response.timestamp)}
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button onClick={onClose}>{t('dashboard.close')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ComplaintDetailsModal;
