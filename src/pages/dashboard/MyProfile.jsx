import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useProfile } from "../../hooks/useProfile";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import ProgressBar from "../../components/ui/ProgressBar";
import Badge from "../../components/ui/Badge";
import Toast from "../../components/Toast";

export default function MyProfile() {
  const { user, updateProfile } = useAuth();
  const {
    profile, saveProfile,
    addEducation, removeEducation,
    addExperience, removeExperience,
    addSkill, removeSkill,
    addLanguage, removeLanguage,
    addCertificate, removeCertificate,
    addProject, removeProject,
    uploadResume, uploadPhoto,
  } = useProfile(user?.id);

  const [toast, setToast] = useState(null);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const handleSaveDetails = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd);
    saveProfile(data);
    updateProfile({ firstName: data.firstName, lastName: data.lastName, phone: data.phone });
    showToast("Profile updated!");
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadPhoto(file).then(() => showToast("Photo updated!"));
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadResume(file).then(() => showToast("Resume uploaded!"));
    }
  };

  const handleAdd = (type) => {
    setEditing(type);
    setForm({});
  };

  const handleSubmitItem = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd);

    switch (editing) {
      case "education":
        addEducation(data);
        break;
      case "experience":
        addExperience({ ...data, current: data.current === "on" });
        break;
      case "skill":
        addSkill(data);
        break;
      case "language":
        addLanguage(data);
        break;
      case "certificate":
        addCertificate(data);
        break;
      case "project":
        addProject(data);
        break;
    }
    setEditing(null);
    showToast(`${editing} added!`);
  };

  const SectionHeader = ({ title, onAdd }) => (
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      {onAdd && (
        <Button size="sm" variant="outline" onClick={onAdd}>+ Add</Button>
      )}
    </div>
  );

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your professional profile</p>
      </div>

      <Card>
        <div className="mb-4">
          <ProgressBar value={profile.completionPct || 0} />
        </div>
        <form onSubmit={handleSaveDetails}>
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mx-auto mb-2">
                {profile.avatar ? (
                  <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </div>
                )}
              </div>
              <label className="text-xs text-[#0261a6] hover:underline cursor-pointer">
                Change Photo
                <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
              </label>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
                <input name="firstName" defaultValue={user?.firstName} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
                <input name="lastName" defaultValue={user?.lastName} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input value={user?.email} disabled className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                <input name="phone" defaultValue={user?.phone || profile.phone} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">Professional Headline</label>
                <input name="headline" defaultValue={profile.headline || ""} placeholder="e.g. Senior React Developer at TechCorp" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">Bio / Summary</label>
                <textarea name="bio" defaultValue={profile.bio || ""} rows={3} placeholder="Write a short summary about yourself..." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Expected Salary (Min)</label>
                <input name="expected_salary_min" type="number" defaultValue={profile.expected_salary_min || ""} placeholder="e.g. 50000" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Location</label>
                <input name="preferred_location" defaultValue={profile.preferred_location || ""} placeholder="e.g. Kathmandu, Lalitpur" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">LinkedIn URL</label>
                <input name="linkedin_url" defaultValue={profile.linkedin_url || ""} placeholder="https://linkedin.com/in/..." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">GitHub URL</label>
                <input name="github_url" defaultValue={profile.github_url || ""} placeholder="https://github.com/..." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6] focus:ring-1 focus:ring-[#0261a6]" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="primary">Save Changes</Button>
          </div>
        </form>
      </Card>

      <Card>
        <SectionHeader title="Education" onAdd={() => handleAdd("education")} />
        {profile.education?.length > 0 ? (
          <div className="space-y-3">
            {profile.education.map((edu) => (
              <div key={edu.id} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{edu.degree} in {edu.field}</p>
                  <p className="text-xs text-gray-500">{edu.institution} • {edu.startYear} - {edu.endYear || "Present"}</p>
                </div>
                <button onClick={() => { removeEducation(edu.id); showToast("Education removed"); }} className="text-xs text-red-500 hover:underline cursor-pointer">Remove</button>
              </div>
            ))}
          </div>
        ) : <p className="text-sm text-gray-400 py-2">No education added yet.</p>}

        {editing === "education" && (
          <form onSubmit={handleSubmitItem} className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2"><input name="degree" placeholder="Degree (e.g. B.Sc. CS)" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" required /></div>
              <div className="col-span-2"><input name="institution" placeholder="Institution" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" required /></div>
              <div><input name="field" placeholder="Field of Study" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              <div className="grid grid-cols-2 gap-2">
                <input name="startYear" placeholder="Start Year" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                <input name="endYear" placeholder="End Year" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" size="sm" onClick={() => setEditing(null)}>Cancel</Button>
              <Button type="submit" size="sm">Save</Button>
            </div>
          </form>
        )}
      </Card>

      <Card>
        <SectionHeader title="Experience" onAdd={() => handleAdd("experience")} />
        {profile.experience?.length > 0 ? (
          <div className="space-y-3">
            {profile.experience.map((exp) => (
              <div key={exp.id} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{exp.jobTitle} at {exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.startYear} - {exp.current ? "Present" : exp.endYear}</p>
                </div>
                <button onClick={() => { removeExperience(exp.id); showToast("Experience removed"); }} className="text-xs text-red-500 hover:underline cursor-pointer">Remove</button>
              </div>
            ))}
          </div>
        ) : <p className="text-sm text-gray-400 py-2">No experience added yet.</p>}

        {editing === "experience" && (
          <form onSubmit={handleSubmitItem} className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div><input name="jobTitle" placeholder="Job Title" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" required /></div>
              <div><input name="company" placeholder="Company" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" required /></div>
              <div className="grid grid-cols-2 gap-2">
                <input name="startYear" placeholder="Start Year" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                <input name="endYear" placeholder="End Year" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="current" id="currentExp" className="rounded border-gray-300" />
                <label htmlFor="currentExp" className="text-xs text-gray-600">I currently work here</label>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" size="sm" onClick={() => setEditing(null)}>Cancel</Button>
              <Button type="submit" size="sm">Save</Button>
            </div>
          </form>
        )}
      </Card>

      <Card>
        <SectionHeader title="Skills" onAdd={() => handleAdd("skill")} />
        {profile.skills?.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill.id} variant="primary" className="!pr-1 gap-1">
                {skill.name}
                <button onClick={() => { removeSkill(skill.id); showToast("Skill removed"); }} className="ml-1 text-blue-300 hover:text-blue-700 cursor-pointer">×</button>
              </Badge>
            ))}
          </div>
        ) : <p className="text-sm text-gray-400 py-2">No skills added.</p>}

        {editing === "skill" && (
          <form onSubmit={handleSubmitItem} className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="flex gap-3">
              <input name="name" placeholder="Skill name (e.g. React)" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm" required />
              <select name="proficiency" className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" size="sm" onClick={() => setEditing(null)}>Cancel</Button>
              <Button type="submit" size="sm">Add</Button>
            </div>
          </form>
        )}
      </Card>

      <Card>
        <SectionHeader title="Languages" onAdd={() => handleAdd("language")} />
        {profile.languages?.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {profile.languages.map((lang) => (
              <Badge key={lang.id} variant="teal" className="!pr-1 gap-1">
                {lang.name} - {lang.proficiency}
                <button onClick={() => { removeLanguage(lang.id); showToast("Language removed"); }} className="ml-1 text-teal-300 hover:text-teal-700 cursor-pointer">×</button>
              </Badge>
            ))}
          </div>
        ) : <p className="text-sm text-gray-400 py-2">No languages added.</p>}

        {editing === "language" && (
          <form onSubmit={handleSubmitItem} className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="flex gap-3">
              <input name="name" placeholder="Language (e.g. Nepali)" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm" required />
              <select name="proficiency" className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Native">Native</option>
              </select>
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" size="sm" onClick={() => setEditing(null)}>Cancel</Button>
              <Button type="submit" size="sm">Add</Button>
            </div>
          </form>
        )}
      </Card>

      <Card>
        <SectionHeader title="Certificates" onAdd={() => handleAdd("certificate")} />
        {profile.certificates?.length > 0 ? (
          <div className="space-y-2">
            {profile.certificates.map((cert) => (
              <div key={cert.id} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{cert.name}</p>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                </div>
                <button onClick={() => { removeCertificate(cert.id); showToast("Certificate removed"); }} className="text-xs text-red-500 hover:underline cursor-pointer">Remove</button>
              </div>
            ))}
          </div>
        ) : <p className="text-sm text-gray-400 py-2">No certificates added.</p>}

        {editing === "certificate" && (
          <form onSubmit={handleSubmitItem} className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2"><input name="name" placeholder="Certificate Name" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" required /></div>
              <div><input name="issuer" placeholder="Issuer" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              <div><input name="url" placeholder="Credential URL" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" size="sm" onClick={() => setEditing(null)}>Cancel</Button>
              <Button type="submit" size="sm">Save</Button>
            </div>
          </form>
        )}
      </Card>

      <Card>
        <SectionHeader title="Projects" onAdd={() => handleAdd("project")} />
        {profile.projects?.length > 0 ? (
          <div className="space-y-2">
            {profile.projects.map((proj) => (
              <div key={proj.id} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{proj.title}</p>
                  {proj.url && <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#0261a6] hover:underline">View Project</a>}
                </div>
                <button onClick={() => { removeProject(proj.id); showToast("Project removed"); }} className="text-xs text-red-500 hover:underline cursor-pointer">Remove</button>
              </div>
            ))}
          </div>
        ) : <p className="text-sm text-gray-400 py-2">No projects added.</p>}

        {editing === "project" && (
          <form onSubmit={handleSubmitItem} className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2"><input name="title" placeholder="Project Title" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" required /></div>
              <div className="col-span-2"><textarea name="description" placeholder="Description" rows={2} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              <div className="col-span-2"><input name="url" placeholder="Project URL" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" size="sm" onClick={() => setEditing(null)}>Cancel</Button>
              <Button type="submit" size="sm">Save</Button>
            </div>
          </form>
        )}
      </Card>

      <Card>
        <SectionHeader title="Resume" />
        <div className="flex flex-col items-center py-4">
          {profile.resume_url ? (
            <div className="w-full">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg mb-3">
                <span className="text-3xl">📄</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900">{profile.resume_name || "Resume"}</p>
                  <p className="text-xs text-gray-500">Uploaded</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => window.open(profile.resume_url, "_blank")}>Preview</Button>
                <label className="cursor-pointer">
                  <Button variant="primary" size="sm" as="span">Replace</Button>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleResumeUpload} />
                </label>
              </div>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-3xl">📄</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Upload your resume (PDF, DOC, DOCX)</p>
              <label className="cursor-pointer">
                <Button variant="primary">Upload Resume</Button>
                <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleResumeUpload} />
              </label>
            </>
          )}
        </div>
      </Card>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
