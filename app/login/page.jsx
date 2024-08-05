"use client";

// pages/login.js
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Login successful!");
        router.push("/admin"); // Redirect to home page for regular users
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex w-full md:w-1/3 flex-col items-center pt-20 p-2">
      <h1 className="text-2xl text-green-900 font-bold mb-6">Login</h1>
      <form
        className="flex flex-wrap justify-between w-full mb-4 border-solid p-6 rounded-md shadow-xl bg-white/75"
        onSubmit={handleLogin}
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
        <button
          className={`shadow-lg m-2 btn btn-outline btn-success bg-green-500 ${
            loading ? "loading" : ""
          }`}
          style={{ color: "white" }}
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <button className="btn btn-success btn-outline group">
        <Link
          href="/register"
          className="text-gray-800 group-hover:text-white "
        >
          Register
        </Link>
      </button>
    </main>
  );
}
