import { useMemo, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useApp } from "../../context/AppContext";
import { companies } from "../../data/companies";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import EmptyState from "../../components/ui/EmptyState";
import Toast from "../../components/Toast";

export default function SavedCompanies() {
  const { user } = useAuth();
  const { savedCompanies, toggleFollowCompany } = useApp();
  const [toast, setToast] = useState(null);

  const followed = useMemo(
    () => savedCompanies.filter((s) => s.userId === user?.id).map((s) => s.companyName),
    [savedCompanies, user?.id]
  );

  const followedCompanies = companies.filter((c) => followed.includes(c.name));

  const handleUnfollow = (name) => {
    toggleFollowCompany(user?.id, name);
    setToast({ message: `Unfollowed ${name}`, type: "success" });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Saved Companies</h1>
        <p className="text-sm text-gray-500 mt-1">Companies you're following</p>
      </div>

      {followedCompanies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {followedCompanies.map((company) => (
            <Card key={company.id}>
              <div className="flex items-start gap-3">
                <img src={company.logo} alt={company.name} className="w-12 h-12 rounded shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900">{company.name}</h3>
                  <p className="text-xs text-gray-500">{company.industry} • {company.location}</p>
                  <p className="text-xs text-gray-400 mt-1">{company.jobs_count} jobs posted</p>
                </div>
                <Button size="sm" variant="ghost" onClick={() => handleUnfollow(company.name)}>Unfollow</Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState icon="🏢" title="No companies followed" description="Follow companies to get updates on their job postings." />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
