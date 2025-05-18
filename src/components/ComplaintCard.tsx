
import { Complaint, departments } from "@/utils/mockData";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import { useTranslation } from "@/utils/translations";

interface ComplaintCardProps {
  complaint: Complaint;
  showActions?: boolean;
  onViewDetails?: () => void;
}

const ComplaintCard = ({ complaint, showActions = false, onViewDetails }: ComplaintCardProps) => {
  const formattedDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch (e) {
      return dateString;
    }
  };
  
  const { t } = useTranslation();

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground">
              {departments[complaint.category]}
            </p>
            <h3 className="font-semibold text-lg mt-1">{complaint.title}</h3>
          </div>
          <StatusBadge status={complaint.status} />
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 mb-4">{complaint.description}</p>
        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
          <div className="flex items-center">
            <MapPin className="mr-1 h-3.5 w-3.5" />
            <span>{complaint.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-1 h-3.5 w-3.5" />
            <span>Submitted: {formattedDate(complaint.createdAt)}</span>
          </div>
        </div>
      </CardContent>
      {complaint.response && (
        <div className="px-6 py-3 bg-muted mt-2 border-t">
          <p className="text-sm font-medium mb-1">Official Response:</p>
          <p className="text-sm">{complaint.response.text}</p>
          <p className="text-xs text-gray-500 mt-2">
            {complaint.response.respondentName}, {complaint.response.respondentTitle}
          </p>
        </div>
      )}
      {showActions && (
        <CardFooter className="bg-gray-50 px-6 py-3 flex justify-end">
          <div className="flex gap-2">
            <button 
              className="text-xs text-primary font-medium"
              onClick={onViewDetails}
            >
              {t('admin.viewDetails')}
            </button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ComplaintCard;
