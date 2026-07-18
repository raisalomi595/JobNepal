import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useApp } from "../../context/AppContext";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import EmptyState from "../../components/ui/EmptyState";
import Toast from "../../components/Toast";
import { formatDateRelative } from "../../utils/helpers";

export default function SavedSearches() {
  const { user } = useAuth();
  const { savedSearches, deleteSavedSearch } = useApp();
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  const searches = savedSearches.filter((s) => s.userId === user?.id);

  const handleDelete = (id) => {
    deleteSavedSearch(id);
    setToast({ message: "Search deleted", type: "success" });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Saved Searches</h1>
        <p className="text-sm text-gray-500 mt-1">Quick access to your frequent searches</p>
      </div>

      {searches.length > 0 ? (
        <div className="space-y-2">
          {searches.map((search) => (
            <Card key={search.id}>
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{search.query || "All Jobs"}</p>
                  {search.filters && (
                    <p className="text-xs text-gray-500 mt-0.5">{Object.entries(search.filters).filter(([,v]) => v).map(([k, v]) => `${k}: ${v}`).join(", ")}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-0.5">Saved {formatDateRelative(search.createdAt)}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => navigate(`/find-job?keyword=${encodeURIComponent(search.query || "")}`)}>Search</Button>
                  <Button size="sm" variant="ghost" onClick={() => handleDelete(search.id)}>Delete</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState icon="🔍" title="No saved searches" description="Save your job searches to quickly access them later." />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
