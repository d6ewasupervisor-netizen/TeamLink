"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserNav } from "@/components/user-nav";
import type { User } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { FilePlus, Plus, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react";

interface HeaderProps {
  user: User;
  setRole: (role: User['role']) => void;
}

export function Header({ user, setRole }: HeaderProps) {
  const isSupervisor = user.role === 'supervisor' || user.role === 'lead' || user.role === 'admin' || user.role === 'hr';

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <h1 className="font-headline text-2xl">
          {isSupervisor ? 'Team Pulse' : 'My Impact'}
        </h1>
      </div>

      <div className="flex w-full items-center justify-end gap-4">
         {/* Role switcher for demo */}
        <div className="w-[180px]">
          <Select onValueChange={(value: User['role']) => setRole(value)} defaultValue={user.role}>
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teammate">Teammate</SelectItem>
              <SelectItem value="supervisor">Supervisor</SelectItem>
              <SelectItem value="lead">Lead</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isSupervisor ? (
            <Button>
              <FilePlus />
              New CAF
            </Button>
        ) : (
          <>
            <Button variant="outline">
              <Sparkles />
              Give Recognition
            </Button>
            <Button>
              <Plus />
              Report Impact
            </Button>
          </>
        )}
        <div className="md:hidden">
            <UserNav user={user} />
        </div>
      </div>
    </header>
  );
}
