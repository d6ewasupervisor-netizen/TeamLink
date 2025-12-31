import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  Bell,
  FileText,
  HeartHandshake,
  Home,
  LogOut,
  Siren,
  Users,
} from "lucide-react"
import type { User } from "@/lib/types"
import { Logo } from "@/components/icons"
import { Separator } from "@/components/ui/separator"
import { UserNav } from "@/components/user-nav"

const teammateNav = [
  { href: "#", icon: Home, label: "Dashboard" },
  { href: "#", icon: Siren, label: "My Impacts" },
  { href: "#", icon: HeartHandshake, label: "My Recognitions" },
  { href: "#", icon: FileText, label: "My CAFs" },
]

const supervisorNav = [
  { href: "#", icon: Home, label: "Dashboard" },
  { href: "#", icon: Users, label: "Team" },
  { href: "#", icon: Bell, label: "Alerts" },
]

export function AppSidebar({ user }: { user: User }) {
  const navItems = (user.role === 'supervisor' || user.role === 'lead' || user.role === 'admin' || user.role === 'hr') ? supervisorNav : teammateNav

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-primary" />
          <h1 className="font-headline text-2xl font-semibold">TAG</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton tooltip={item.label} isActive={index === 0}>
                <item.icon />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="hidden md:flex">
         <Separator className="my-2" />
        <UserNav user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
