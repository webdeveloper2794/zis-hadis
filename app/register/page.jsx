"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
export default function Register() {
  const router = useRouter(); // Hook to programmatically navigate the user
  const [email, setEmail] = useState(""); // State to store the email
  const [password, setPassword] = useState(""); // State to store the password
  const [role, setRole] = useState(""); // State to store the role
  const [loading, setLoading] = useState(false); // State to manage loading state
  
  

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Set loading state to true while making the API request

    try {
      // Make the API request to register the user
      const response = await axios.post("/api/register", {
        email,
        password,
        role,
      });

      if (response.status === 201) {
        toast.success("User registered successfully!"); // Show success toast message
        router.push("/login"); // Redirect the user to the login page
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed!"); // Show error toast message
    } finally {
      setLoading(false); // Set loading state to false after the API request
    }
  };

  return (
    <main className="flex w-full md:w-1/3 flex-col items-center pt-20 p-2">
      <h1 className="text-2xl text-green-900 font-bold mb-6">Register</h1>
      <form
        className="flex flex-wrap justify-between w-full mb-4 border-solid p-6 rounded-md shadow-xl bg-white/75"
        onSubmit={handleRegister}
      >
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
       
          {/* <input
            type="text"
            placeholder="Role"
            className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          /> */}
   

        <button
          className={`shadow-lg m-2 btn btn-outline btn-success bg-green-500 ${
            loading ? "loading" : ""
          }`}
          style={{ color: "white" }}
          type="submit"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
       
      </form>
      <button className="btn btn-success btn-outline group">
      <Link href="/login" className="text-gray-800  group-hover:text-white">Login</Link>
      </button>
      
    </main>
  );
}
