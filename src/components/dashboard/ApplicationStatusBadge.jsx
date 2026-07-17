import Badge from "../ui/Badge";
import { APPLICATION_STATUSES } from "../../utils/constants";

export default function ApplicationStatusBadge({ status }) {
  const config = APPLICATION_STATUSES.find((s) => s.value === status);
  if (!config) return <Badge>{status}</Badge>;

  const variantMap = {
    applied: "default",
    under_review: "warning",
    shortlisted: "purple",
    interview: "indigo",
    rejected: "danger",
    selected: "success",
    offer_sent: "teal",
    joined: "success",
  };

  return <Badge variant={variantMap[status] || "default"}>{config.label}</Badge>;
}
