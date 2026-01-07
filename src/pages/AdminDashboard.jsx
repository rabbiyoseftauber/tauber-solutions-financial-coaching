import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, FileText, Settings, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const currentUser = await base44.auth.me();
      if (currentUser.role !== 'admin') {
        base44.auth.redirectToLogin(window.location.pathname);
        return;
      }
      setUser(currentUser);
    } catch (error) {
      base44.auth.redirectToLogin(window.location.pathname);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#C2983B]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-[#1a2b4b] mb-2">
            Admin <span className="font-normal text-[#C2983B]">Dashboard</span>
          </h1>
          <p className="text-gray-600">Welcome back, {user?.full_name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to={createPageUrl('AdminCoaches')}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-[#C2983B]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#C2983B]/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#C2983B]" />
                  </div>
                  <span>Manage Coaches</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Add, edit, and manage coach profiles and information
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to={createPageUrl('AdminResources')}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-[#C2983B]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#C2983B]/10 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#C2983B]" />
                  </div>
                  <span>Manage Resources</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Upload and manage downloadable resources for all currencies
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to={createPageUrl('AdminSettings')}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-[#C2983B]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#C2983B]/10 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6 text-[#C2983B]" />
                  </div>
                  <span>Site Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Update footer contact information and addresses
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}