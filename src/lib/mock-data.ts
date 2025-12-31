import type { User, CallOut, Recognition, CAF, Notification, Infraction } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { 
  Role, 
  CallOutReason, 
  CallOutStatus, 
  InfractionType, 
  InfractionStatus, 
  CAFSubject, 
  CAFStatus, 
  RecognitionCategory, 
  RecognitionTier 
} from './types';

export const mockUsers: User[] = [
  {
    uid: 'user-teammate-1',
    employeeId: 'EMP-001',
    email: 'teammate1@example.com',
    displayName: 'Alex Ray',
    role: 'teammate',
    supervisorId: 'user-supervisor-1',
    location: 'STORE-001',
    photoURL: PlaceHolderImages.find(img => img.id === 'user-1')?.imageUrl,
    isActive: true,
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  },
  {
    uid: 'user-supervisor-1',
    employeeId: 'SUP-001',
    email: 'supervisor1@example.com',
    displayName: 'Jordan Lee',
    role: 'supervisor',
    supervisorId: 'user-admin-1',
    location: 'STORE-001',
    photoURL: PlaceHolderImages.find(img => img.id === 'user-2')?.imageUrl,
    isActive: true,
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  },
  {
    uid: 'user-teammate-2',
    employeeId: 'EMP-002',
    email: 'teammate2@example.com',
    displayName: 'Casey Jordan',
    role: 'teammate',
    supervisorId: 'user-supervisor-1',
    location: 'STORE-001',
    photoURL: PlaceHolderImages.find(img => img.id === 'user-3')?.imageUrl,
    isActive: true,
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  },
   {
    uid: 'user-lead-1',
    employeeId: 'LEAD-001',
    email: 'lead1@example.com',
    displayName: 'Taylor Morgan',
    role: 'lead',
    supervisorId: 'user-supervisor-1',
    location: 'STORE-001',
    photoURL: PlaceHolderImages.find(img => img.id === 'user-4')?.imageUrl,
    isActive: true,
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  },
];

export const mockImpacts: CallOut[] = [
  {
    id: 'impact-1',
    userId: 'user-teammate-1',
    userName: 'Alex Ray',
    shiftDate: '2024-07-20',
    reason: CallOutReason.SICK,
    details: 'Feeling unwell, flu-like symptoms.',
    status: CallOutStatus.SUBMITTED,
    submittedAt: '2024-07-20T06:00:00Z',
  },
  {
    id: 'impact-2',
    userId: 'user-teammate-2',
    userName: 'Casey Jordan',
    shiftDate: '2024-07-21',
    reason: CallOutReason.OTHER, // LATE mapped to OTHER or maybe needs specific reason. PRD has SICK, FAMILY_EMERGENCY, CAR_TROUBLE, MEDICAL_APPOINTMENT, PERSONAL, WEATHER, OTHER. Late is usually an infraction or impact? PRD says "Running late" is an example of Impact. I'll use OTHER for now as "LATE" isn't in CallOutReason enum.
    details: 'Stuck in traffic, will be 15 minutes late. [Reported via TEXT]',
    status: CallOutStatus.SUBMITTED,
    submittedAt: '2024-07-21T08:45:00Z',
    reportedByUid: 'user-teammate-2',
  },
  {
    id: 'impact-3',
    userId: 'user-teammate-1',
    userName: 'Alex Ray',
    shiftDate: '2024-07-15',
    reason: CallOutReason.FAMILY_EMERGENCY,
    details: 'Family emergency, need to leave immediately. [Reported via PHONE]',
    status: CallOutStatus.EXCUSED,
    submittedAt: '2024-07-15T14:00:00Z',
    acknowledgedByUid: 'user-supervisor-1',
    acknowledgedAt: '2024-07-15T15:00:00Z',
    reportedByUid: 'user-supervisor-1', 
  },
];

export const mockRecognitions: Recognition[] = [
  {
    id: 'rec-1',
    userId: 'user-teammate-1',
    submittedByUid: 'user-supervisor-1',
    category: RecognitionCategory.CUSTOMER_STORE_RELATIONS,
    tier: RecognitionTier.WRITTEN,
    description: 'Alex received a glowing review from a customer for going above and beyond to help them find a product.',
    isApproved: true,
    approvedByUid: 'user-supervisor-1',
    approvedAt: new Date().toISOString(),
    createdAt: '2024-07-19T10:00:00Z',
  },
  {
    id: 'rec-2',
    userId: 'user-teammate-2',
    submittedByUid: 'user-lead-1',
    category: RecognitionCategory.TEAMWORK_COLLABORATION,
    tier: RecognitionTier.VERBAL,
    description: 'Casey stayed late to help the closing team catch up after a busy day. Great team player!',
    isApproved: false,
    createdAt: '2024-07-22T09:00:00Z',
  },
];

export const mockCAFs: CAF[] = [
  {
    id: 'caf-1',
    userId: 'user-teammate-1',
    userName: 'Alex Ray',
    supervisorId: 'user-supervisor-1',
    supervisorName: 'Jordan Lee',
    discussionDate: '2024-07-19',
    status: CAFStatus.PENDING_ASSOCIATE_SIG,
    subject: CAFSubject.ATTENDANCE_NO_CALL_NO_SHOW,
    specificDetails: 'Alex had a No-Call-No-Show on 2024-07-18.',
    requiredImprovement: 'Must adhere to call-out procedures for all future absences.',
    supervisorSignedAt: '2024-07-19T11:00:00Z',
    createdAt: '2024-07-19T11:00:00Z',
    updatedAt: '2024-07-19T11:00:00Z',
  },
];

export const mockInfractions: Infraction[] = [
  {
    id: 'inf-1',
    userId: 'user-teammate-1',
    userName: 'Alex Ray',
    reportedByUid: 'user-supervisor-1',
    reportedByName: 'Jordan Lee',
    type: InfractionType.NO_CALL_NO_SHOW,
    occurredAt: '2024-07-18T09:00:00Z',
    details: 'Did not show up for scheduled shift and did not contact leadership.',
    status: InfractionStatus.CAF_CREATED,
    cafId: 'caf-1',
    location: 'STORE-001',
    reportedAt: '2024-07-18T09:00:00Z',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    recipientUid: 'user-supervisor-1',
    type: 'PATTERN_ALERT',
    message: 'Alex Ray has 3 unexcused impacts in the last 30 days.',
    read: false,
    createdAt: '2024-07-21T10:00:00Z',
  },
  {
    id: 'notif-2',
    recipientUid: 'user-supervisor-1',
    type: 'PATTERN_ALERT',
    message: 'Casey Jordan has 2 Late Arrivals in the last 30 days.',
    read: true,
    createdAt: '2024-07-20T10:00:00Z',
  },
  {
    id: 'notif-3',
    recipientUid: 'user-teammate-1',
    type: 'CAF_SIGNATURE',
    message: 'You have a Corrective Action Form requiring your signature.',
    read: false,
    createdAt: '2024-07-19T11:05:00Z',
  },
];
