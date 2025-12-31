import type { User } from "@/lib/types";
import { mockImpacts, mockNotifications, mockRecognitions, mockUsers } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Check, Clock, HeartHandshake, Users, X } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SupervisorDashboard({ user }: { user: User }) {
  const teamMembers = mockUsers.filter(u => u.supervisorId === user.uid);
  const pendingImpacts = mockImpacts.filter(i => i.supervisorId === user.uid && i.status === 'SUBMITTED');
  const pendingRecognitions = mockRecognitions.filter(r => !r.isApproved && teamMembers.some(tm => tm.uid === r.userId));
  const patternAlerts = mockNotifications.filter(n => n.recipientUid === user.uid && n.type === 'PATTERN_ALERT');
  
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('');

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{teamMembers.length}</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Impacts</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{pendingImpacts.length}</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Recognitions</CardTitle>
                <HeartHandshake className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{pendingRecognitions.length}</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pattern Alerts</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-destructive">{patternAlerts.filter(a => !a.read).length}</div>
                 <p className="text-xs text-muted-foreground">Active alerts</p>
            </CardContent>
        </Card>
      </div>

       <Tabs defaultValue="approvals">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
          <TabsTrigger value="alerts">Pattern Alerts</TabsTrigger>
          <TabsTrigger value="team">My Team</TabsTrigger>
        </TabsList>
        <TabsContent value="approvals" className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Impacts to Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingImpacts.map(impact => (
                <div key={impact.id} className="p-3 rounded-lg border bg-card space-y-3">
                   <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={teamMembers.find(t=>t.uid === impact.userId)?.photoURL} />
                        <AvatarFallback>{getInitials(impact.userName)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{impact.userName}</p>
                        <p className="text-sm text-muted-foreground">{impact.reason} on {format(new Date(impact.shiftDate), 'MMM d')}</p>
                    </div>
                  </div>
                   <p className="text-sm text-muted-foreground pl-13">{impact.details}</p>
                   <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm"><X className="h-4 w-4 mr-1"/> Unexcused</Button>
                    <Button variant="secondary" size="sm"><Check className="h-4 w-4 mr-1"/> Excuse</Button>
                  </div>
                </div>
              ))}
              {pendingImpacts.length === 0 && <p className="text-muted-foreground text-sm">No impacts to review.</p>}
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Recognitions to Approve</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingRecognitions.map(rec => (
                <div key={rec.id} className="p-3 rounded-lg border bg-card space-y-3">
                   <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={teamMembers.find(t=>t.uid === rec.userId)?.photoURL} />
                        <AvatarFallback>{getInitials(teamMembers.find(t=>t.uid === rec.userId)?.displayName || '?')}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{teamMembers.find(t=>t.uid === rec.userId)?.displayName}</p>
                        <p className="text-sm text-muted-foreground">Submitted by {mockUsers.find(u=>u.uid === rec.submittedByUid)?.displayName}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pl-13">{rec.description}</p>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm"><X className="h-4 w-4 mr-1"/> Reject</Button>
                    <Button size="sm"><Check className="h-4 w-4 mr-1"/> Approve</Button>
                  </div>
                </div>
              ))}
               {pendingRecognitions.length === 0 && <p className="text-muted-foreground text-sm">No recognitions to approve.</p>}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alerts">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Behavioral Pattern Alerts</CardTitle>
                    <CardDescription>Automated alerts based on recent team member activity.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    {patternAlerts.map(alert => (
                        <div key={alert.id} className={`flex items-center gap-4 p-3 rounded-lg border ${!alert.read ? 'bg-accent/10 border-accent' : 'bg-card'}`}>
                           <div className={`p-2 rounded-full ${!alert.read ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}>
                             <AlertTriangle className="h-5 w-5"/>
                           </div>
                           <div>
                                <p className={`font-semibold ${!alert.read ? 'text-accent-foreground' : ''}`}>{alert.message}</p>
                                <p className="text-sm text-muted-foreground">{formatDistanceToNow(alert.createdAt, { addSuffix: true })}</p>
                           </div>
                           <Button variant="ghost" size="sm" className="ml-auto">View Details</Button>
                        </div>
                    ))}
                    {patternAlerts.length === 0 && <p className="text-muted-foreground text-sm text-center py-8">No active alerts.</p>}
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="team">
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Team Overview</CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="space-y-4">
                     {teamMembers.map(member => (
                        <div key={member.uid} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                           <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={member.photoURL} />
                                    <AvatarFallback>{getInitials(member.displayName)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{member.displayName}</p>
                                    <p className="text-sm text-muted-foreground capitalize">{member.role}</p>
                                </div>
                           </div>
                           <Button variant="outline">View Profile</Button>
                        </div>
                     ))}
                   </div>
                </CardContent>
             </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
