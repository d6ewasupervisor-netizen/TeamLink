import { 
  mockUsers, 
  mockImpacts as initialImpacts, 
  mockInfractions as initialInfractions, 
  mockCAFs as initialCAFs, 
  mockRecognitions as initialRecognitions, 
  mockNotifications as initialNotifications 
} from '@/lib/mock-data';
import { 
  User, 
  CallOut, 
  Infraction, 
  CAF, 
  Recognition, 
  Notification,
  CallOutStatus,
  InfractionStatus,
  CAFStatus,
  RecognitionTier,
  CallOutReason,
  InfractionType,
  CAFSubject,
  RecognitionCategory
} from '@/lib/types';

// In-memory store
let users = [...mockUsers];
let impacts = [...initialImpacts];
let infractions = [...initialInfractions];
let cafs = [...initialCAFs];
let recognitions = [...initialRecognitions];
let notifications = [...initialNotifications];

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Users
  getUsers: async (): Promise<User[]> => {
    await delay(300);
    return [...users];
  },

  getUser: async (uid: string): Promise<User | undefined> => {
    await delay(200);
    return users.find(u => u.uid === uid);
  },

  // Impacts (Call-Outs)
  getImpacts: async (): Promise<CallOut[]> => {
    await delay(300);
    return [...impacts];
  },

  createImpact: async (impact: Omit<CallOut, 'id' | 'submittedAt' | 'status'>): Promise<CallOut> => {
    await delay(500);
    const newImpact: CallOut = {
      ...impact,
      id: crypto.randomUUID(),
      status: CallOutStatus.SUBMITTED,
      submittedAt: new Date().toISOString(),
    };
    impacts = [newImpact, ...impacts];
    return newImpact;
  },

  updateImpactStatus: async (id: string, status: CallOutStatus, notes?: string): Promise<CallOut> => {
    await delay(400);
    const index = impacts.findIndex(i => i.id === id);
    if (index === -1) throw new Error('Impact not found');

    const updated = { ...impacts[index], status, supervisorNotes: notes };
    if (status === CallOutStatus.EXCUSED || status === CallOutStatus.UNEXCUSED) {
      updated.acknowledgedAt = new Date().toISOString();
      // In a real app, we'd set acknowledgedByUid from context
    }
    impacts[index] = updated;
    return updated;
  },

  // Infractions
  getInfractions: async (): Promise<Infraction[]> => {
    await delay(300);
    return [...infractions];
  },

  createInfraction: async (infraction: Omit<Infraction, 'id' | 'reportedAt' | 'status'>): Promise<Infraction> => {
    await delay(500);
    const newInfraction: Infraction = {
      ...infraction,
      id: crypto.randomUUID(),
      status: InfractionStatus.PENDING,
      reportedAt: new Date().toISOString(),
    };
    infractions = [newInfraction, ...infractions];
    return newInfraction;
  },

  // CAFs
  getCAFs: async (): Promise<CAF[]> => {
    await delay(300);
    return [...cafs];
  },

  createCAF: async (caf: Omit<CAF, 'id' | 'createdAt' | 'updatedAt' | 'status'>): Promise<CAF> => {
    await delay(800);
    const newCAF: CAF = {
      ...caf,
      id: crypto.randomUUID(),
      status: CAFStatus.DRAFT,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    cafs = [newCAF, ...cafs];
    return newCAF;
  },

  signCAFAsSupervisor: async (id: string): Promise<CAF> => {
    await delay(500);
    const index = cafs.findIndex(c => c.id === id);
    if (index === -1) throw new Error('CAF not found');

    const updated = { 
      ...cafs[index], 
      status: CAFStatus.PENDING_ASSOCIATE_SIG,
      supervisorSignedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    cafs[index] = updated;
    return updated;
  },
  
  signCAFAsAssociate: async (id: string, comments?: string): Promise<CAF> => {
      await delay(500);
      const index = cafs.findIndex(c => c.id === id);
      if (index === -1) throw new Error('CAF not found');
  
      const updated = { 
        ...cafs[index], 
        status: CAFStatus.COMPLETED,
        associateComments: comments,
        associateSignedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      cafs[index] = updated;
      return updated;
    },

  // Recognitions
  getRecognitions: async (): Promise<Recognition[]> => {
    await delay(300);
    return [...recognitions];
  },

  createRecognition: async (rec: Omit<Recognition, 'id' | 'createdAt' | 'isApproved'>): Promise<Recognition> => {
    await delay(500);
    const isSupervisor = false; // Logic needed: if submitter is supervisor, auto-approve. Passed in data?
    // For now assuming pending unless otherwise specified logic upstream or passed in
    const newRec: Recognition = {
      ...rec,
      id: crypto.randomUUID(),
      isApproved: false, // Default to pending
      createdAt: new Date().toISOString(),
    };
    recognitions = [newRec, ...recognitions];
    return newRec;
  },

  approveRecognition: async (id: string, approverUid: string): Promise<Recognition> => {
    await delay(400);
    const index = recognitions.findIndex(r => r.id === id);
    if (index === -1) throw new Error('Recognition not found');

    const updated = { 
      ...recognitions[index], 
      isApproved: true,
      approvedByUid: approverUid,
      approvedAt: new Date().toISOString()
    };
    recognitions[index] = updated;
    return updated;
  },

  // Notifications
  getNotifications: async (userId: string): Promise<Notification[]> => {
    await delay(200);
    return notifications.filter(n => n.recipientUid === userId);
  },
  
  markNotificationRead: async (id: string): Promise<void> => {
      await delay(200);
      const index = notifications.findIndex(n => n.id === id);
      if (index !== -1) {
          notifications[index] = { ...notifications[index], read: true };
      }
  }
};
