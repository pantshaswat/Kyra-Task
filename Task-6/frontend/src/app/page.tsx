"use client";

import { useState } from "react";

type Consent = {
  consent_type: string
status: string
updated_at: string
};

type User = {
  id: number
name: string
email: string
consents: Consent[]
};

export default function ConsentPage() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUserConsents = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch(
  `http://localhost:5000/api/users?email=${encodeURIComponent(email)}`
      );
      if (!res.ok) {
    alert("User not found");
    setUser(null);
      setLoading(false);
return;
      }
  const data = await res.json();
      setUser(data); 
    } catch (err) {
      console.error("Error fetching user:", err);
    setUser(null);
    }
    setLoading(false);
  };

  const withdrawConsent = async (consentType: string) => {
    if (!user) return;

    const confirmed = confirm(
      `Are you sure you want to withdraw consent for "${consentType}"?`
    );
    if (!confirmed) return;

   const res = await fetch("http://localhost:5000/api/consent/delete", {
  method: "POST",
    headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ user_id: user.id, consent_type: consentType }),
    });

  if (res.ok) {
    alert(`Consent for "${consentType}" withdrawn successfully.`)
  setUser({
       ...user,
        consents: user.consents.map((c) =>
          c.consent_type === consentType ? { ...c, status: "withdrawn" } : c
        ),
      });
    } else {
      alert("Failed to withdraw consent.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Consent Lookup</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="email" placeholder="Enter your email"
          value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 p-2 border rounded"/>
        <button
          onClick={fetchUserConsents} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Show Consents
        </button>
      </div>



      {loading && <p>Loading consents...</p>}

      {user && (
        <div className="p-4 border rounded shadow">
     <h2 className="text-lg font-semibold mb-2">
{user.name} ({user.email})
       </h2>

       {user.consents.length === 0 ? (
            <p>No consents found for this user.</p>
     ) : (
            <ul className="space-y-3">
              {user.consents.map((c) => (
                <li
                  key={c.consent_type}
                  className="flex justify-between items-center p-3 border rounded">
                  <div>


         <p className="font-medium">{c.consent_type}</p>
            <p
                className={
        c.status === "withdrawn"
                   ? "text-red-500 text-sm"
                          : "text-green-500 text-sm"
                      } >
                      {c.status}
              </p>
              </div>


        {c.status !== "withdrawn" && (
                    <button
                      onClick={() => withdrawConsent(c.consent_type)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                 >
                      Withdraw
                    </button>
        )}
       </li>
              ))}</ul>
          )}
        </div>)}</div>);}

