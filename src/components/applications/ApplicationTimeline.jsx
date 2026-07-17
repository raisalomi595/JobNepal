import { formatDateRelative } from "../../utils/helpers";
import { APPLICATION_STATUSES } from "../../utils/constants";

export default function ApplicationTimeline({ statusHistory = [] }) {
  if (statusHistory.length === 0) {
    return <p className="text-sm text-gray-400">No status updates yet.</p>;
  }

  return (
    <div className="relative">
      {statusHistory.map((item, index) => {
        const config = APPLICATION_STATUSES.find((s) => s.value === item.status);
        const isLast = index === statusHistory.length - 1;

        return (
          <div key={index} className="flex gap-3 pb-4 relative">
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full border-2 shrink-0 ${
                isLast ? "bg-[#0261a6] border-[#0261a6]" : "bg-white border-gray-300"
              }`} />
              {!isLast && <div className="w-0.5 flex-1 bg-gray-200 mt-1" />}
            </div>
            <div className="pb-2">
              <p className="text-sm font-medium text-gray-900">
                {config?.label || item.status}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {formatDateRelative(item.date)}
              </p>
              {item.note && (
                <p className="text-xs text-gray-500 mt-1 italic">{item.note}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
