import { useState, useEffect } from "react";
import type { User, CallOut, Recognition, CAF } from "@/lib/types";
import { api } from "@/services/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileSignature, Siren, Sparkles, Plus } from "lucide-react";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ImpactForm } from "@/components/forms/impact-form";
import { useToast } from "@/hooks/use-toast";

export function TeammateDashboard({ user }: { user: User }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [cafs, setCafs] = useState<CAF[]>([]);
  const [impacts, setImpacts] = useState<CallOut[]>([]);
  const [recognitions, setRecognitions] = useState<Recognition[]>([]);
  const [isImpactOpen, setIsImpactOpen] = useState(false);

  const fetchData = async () => {
    try {
      const [fetchedCAFs, fetchedImpacts, fetchedRecognitions] = await Promise.all([
        api.getCAFs(),
        api.getImpacts(),
        api.getRecognitions()
      ]);
      setCafs(fetchedCAFs);
      setImpacts(fetchedImpacts);
      setRecognitions(fetchedRecognitions);
    } catch (error) {
      console.error("Failed to fetch data", error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user.uid]);

  const pendingCAFs = cafs.filter(caf => caf.userId === user.uid && caf.status === 'PENDING_ASSOCIATE_SIG');
  const myImpacts = impacts.filter(i => i.userId === user.uid).sort((a,b) => new Date(b.shiftDate).getTime() - new Date(a.shiftDate).getTime()).slice(0, 3);
  const myRecognitions = recognitions.filter(r => r.userId === user.uid && r.isApproved).sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3);

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'UNEXCUSED': return 'destructive';
      case 'EXCUSED': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="grid gap-6">
      <div className="flex justify-end">
        <Dialog open={isImpactOpen} onOpenChange={setIsImpactOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Report Impact
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Report Impact</DialogTitle>
                    <DialogDescription>
                        Report a schedule impact or absence for your upcoming shift.
                    </DialogDescription>
                </DialogHeader>
                <ImpactForm 
                    userId={user.uid} 
                    userName={user.displayName}
                    onSuccess={() => { setIsImpactOpen(false); fetchData(); }} 
                />
            </DialogContent>
        </Dialog>
      </div>

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
                  <h3 className="font-semibold">{caf.subject.replace(/_/g, ' ')}</h3>
                  <p className="text-sm text-muted-foreground">Created {formatDistanceToNow(parseISO(caf.createdAt), { addSuffix: true })}</p>
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
                  <p className="font-semibold capitalize">{impact.reason.toLowerCase().replace(/_/g, ' ')} on {format(parseISO(impact.shiftDate), 'MMM d')}</p>
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
