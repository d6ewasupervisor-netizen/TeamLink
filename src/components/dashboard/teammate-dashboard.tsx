import type { User } from "@/lib/types";
import { mockCAFs, mockImpacts, mockRecognitions } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileSignature, Siren, Sparkles, TrendingUp } from "lucide-react";
import { format, formatDistanceToNow, parseISO } from "date-fns";

export function TeammateDashboard({ user }: { user: User }) {
  const pendingCAFs = mockCAFs.filter(caf => caf.userId === user.uid && caf.status === 'PENDING_ASSOCIATE_SIG');
  const myImpacts = mockImpacts.filter(i => i.userId === user.uid).slice(0, 3);
  const myRecognitions = mockRecognitions.filter(r => r.userId === user.uid && r.isApproved).slice(0, 3);

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'UNEXCUSED': return 'destructive';
      case 'EXCUSED': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="grid gap-6">
      {pendingCAFs.length > 0 && (
        <Card className="border-accent ring-4 ring-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <FileSignature className="text-accent" />
              Action Required
            </CardTitle>
            <CardDescription>You have Corrective Action Forms that require your signature.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingCAFs.map(caf => (
              <div key={caf.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div>
                  <h3 className="font-semibold">{caf.subject}</h3>
                  <p className="text-sm text-muted-foreground">Created {formatDistanceToNow(caf.createdAt, { addSuffix: true })}</p>
                </div>
                <Button>Review & Sign</Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Siren /> Recent Impacts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {myImpacts.length > 0 ? myImpacts.map(impact => (
              <div key={impact.id} className="flex items-start justify-between">
                <div>
                  <p className="font-semibold capitalize">{impact.reason.toLowerCase().replace(/_/g, ' ')} on {format(parseISO(impact.shiftDate + 'T00:00:00.000Z'), 'MMM d')}</p>
                  <p className="text-sm text-muted-foreground line-clamp-1">{impact.details}</p>
                </div>
                <Badge variant={getStatusVariant(impact.status)}>{impact.status}</Badge>
              </div>
            )) : <p className="text-muted-foreground text-sm">No recent impacts.</p>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Sparkles /> My Recognitions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {myRecognitions.length > 0 ? myRecognitions.map(rec => (
              <div key={rec.id} className="flex items-start justify-between">
                <div>
                  <p className="font-semibold capitalize">{rec.category.toLowerCase().replace(/_/g, ' ')}</p>
                  <p className="text-sm text-muted-foreground line-clamp-1">{rec.description}</p>
                </div>
                 <Badge variant="secondary">{rec.tier}</Badge>
              </div>
            )) : <p className="text-muted-foreground text-sm">No recognitions yet. Keep up the great work!</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
