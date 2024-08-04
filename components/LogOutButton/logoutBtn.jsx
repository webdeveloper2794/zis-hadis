// /admin/components/LogoutButton.js
'use client'
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Make a request to the logout API
      await axios.post('/api/logout');

      // Remove the token from local storage (if used)
      localStorage.removeItem('token');

      // Redirect to the login page
      router.push('/login');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
}
