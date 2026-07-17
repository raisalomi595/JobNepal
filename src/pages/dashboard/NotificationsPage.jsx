import { useAuth } from "../../context/AuthContext";
import { useApp } from "../../context/AppContext";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import EmptyState from "../../components/ui/EmptyState";
import { formatDateRelative, formatDate } from "../../utils/helpers";
import { NOTIFICATION_TYPES } from "../../utils/constants";

export default function NotificationsPage() {
  const { user } = useAuth();
  const { notifications, markNotificationRead, markAllNotificationsRead } = useApp();

  const userNotifs = notifications
    .filter((n) => n.userId === user?.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const unreadCount = userNotifs.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-sm text-gray-500 mt-1">
            {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : "No unread notifications"}
          </p>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={markAllNotificationsRead}>
            Mark All Read
          </Button>
        )}
      </div>

      {userNotifs.length > 0 ? (
        <div className="space-y-2">
          {userNotifs.map((n) => (
            <Card key={n.id} padding={false}>
              <button
                onClick={() => markNotificationRead(n.id)}
                className={`w-full text-left p-4 flex items-start gap-3 transition-colors cursor-pointer ${
                  n.isRead ? "" : "bg-blue-50/50"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${
                  n.isRead ? "bg-gray-100" : "bg-blue-100"
                }`}>
                  {n.type === "application_update" ? "📝" :
                   n.type === "interview_reminder" ? "🎯" :
                   n.type === "message_received" ? "💬" :
                   n.type === "new_job" ? "🆕" :
                   n.type === "company_followed" ? "🏢" :
                   n.type === "deadline_reminder" ? "⏰" : "🔔"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-sm ${n.isRead ? "text-gray-600" : "text-gray-900 font-semibold"}`}>
                      {n.title}
                    </p>
                    {!n.isRead && <span className="w-2 h-2 bg-[#0261a6] rounded-full shrink-0" />}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{n.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{formatDateRelative(n.createdAt)}</p>
                </div>
              </button>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          icon="🔔"
          title="No notifications yet"
          description="You'll see notifications here when employers review your applications or when new jobs are posted."
        />
      )}
    </div>
  );
}
