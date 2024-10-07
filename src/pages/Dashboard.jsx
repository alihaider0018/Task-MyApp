import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Dashboard
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Welcome, {user.name} This is your private dashboard.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Account Overview
        </h2>
        <p className="text-gray-700">
          Here you can manage your account and check your stats.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
