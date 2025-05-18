
import { ComplaintStatus, statusLabels, statusColors } from "@/utils/mockData";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: ComplaintStatus;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <span className={cn(
      "px-2.5 py-0.5 rounded-full text-xs font-medium", 
      statusColors[status],
      className
    )}>
      {statusLabels[status]}
    </span>
  );
};

export default StatusBadge;
