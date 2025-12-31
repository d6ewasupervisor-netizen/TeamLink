"use client";

import { useState } from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Header } from '@/components/layout/header';
import { TeammateDashboard } from '@/components/dashboard/teammate-dashboard';
import { SupervisorDashboard } from '@/components/dashboard/supervisor-dashboard';
import { mockUsers } from '@/lib/mock-data';
import type { User } from '@/lib/types';

export function DashboardPage() {
  const [currentUserRole, setCurrentUserRole] = useState<User['role']>('supervisor');

  const currentUser = mockUsers.find(u => u.role === currentUserRole) || mockUsers[0];

  return (
    <div className="bg-background">
      <SidebarProvider>
        <AppSidebar user={currentUser} />
        <SidebarInset>
          <Header user={currentUser} setRole={setCurrentUserRole} />
          <main className="p-4 sm:p-6 lg:p-8">
            {(currentUser.role === 'supervisor' || currentUser.role === 'lead' || currentUser.role === 'admin' || currentUser.role === 'hr') ? (
              <SupervisorDashboard user={currentUser} />
            ) : (
              <TeammateDashboard user={currentUser} />
            )}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
