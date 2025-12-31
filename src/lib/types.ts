// User Roles
export type Role = 'teammate' | 'lead' | 'supervisor' | 'hr' | 'admin';

// Enums from PRD
export enum CallOutReason {
  SICK = 'SICK',
  FAMILY_EMERGENCY = 'FAMILY_EMERGENCY',
  CAR_TROUBLE = 'CAR_TROUBLE',
  MEDICAL_APPOINTMENT = 'MEDICAL_APPOINTMENT',
  PERSONAL = 'PERSONAL',
  WEATHER = 'WEATHER',
  OTHER = 'OTHER'
}

export enum CallOutStatus {
  SUBMITTED = 'SUBMITTED',
  ACKNOWLEDGED = 'ACKNOWLEDGED',
  EXCUSED = 'EXCUSED',
  UNEXCUSED = 'UNEXCUSED',
  RECLASSIFIED = 'RECLASSIFIED'
}

export enum InfractionType {
  LATE_ARRIVAL = 'LATE_ARRIVAL',
  NO_CALL_NO_SHOW = 'NO_CALL_NO_SHOW',
  LEFT_EARLY = 'LEFT_EARLY',
  IMPROPER_CALLOFF = 'IMPROPER_CALLOFF',
  UNPROFESSIONAL_BEHAVIOR = 'UNPROFESSIONAL_BEHAVIOR',
  CELL_PHONE_USE = 'CELL_PHONE_USE',
  APPEARANCE_ISSUE = 'APPEARANCE_ISSUE',
  INSUBORDINATION = 'INSUBORDINATION',
  WALK_OFF = 'WALK_OFF',
  OTHER = 'OTHER'
}

export enum InfractionStatus {
  PENDING = 'PENDING',
  CAF_CREATED = 'CAF_CREATED',
  RESOLVED = 'RESOLVED',
  DISMISSED = 'DISMISSED'
}

export enum CAFSubject {
  ATTENDANCE_NO_CALL_NO_SHOW = 'ATTENDANCE_NO_CALL_NO_SHOW',
  ATTENDANCE_LATE_ARRIVAL = 'ATTENDANCE_LATE_ARRIVAL',
  ATTENDANCE_LEAVING_EARLY = 'ATTENDANCE_LEAVING_EARLY',
  ATTENDANCE_IMPROPER_CALLOFF = 'ATTENDANCE_IMPROPER_CALLOFF',
  UNPROFESSIONAL_BEHAVIOR = 'UNPROFESSIONAL_BEHAVIOR',
  CELL_PHONE_DEVICES = 'CELL_PHONE_DEVICES',
  APPEARANCE_GROOMING = 'APPEARANCE_GROOMING',
  OTHER = 'OTHER'
}

export enum CAFStatus {
  DRAFT = 'DRAFT',
  PENDING_SUPERVISOR_SIG = 'PENDING_SUPERVISOR_SIG',
  PENDING_ASSOCIATE_SIG = 'PENDING_ASSOCIATE_SIG',
  COMPLETED = 'COMPLETED',
  PENDING_WITNESS = 'PENDING_WITNESS',
  REFUSED = 'REFUSED'
}

export enum RecognitionCategory {
  QUALITY_EXCELLENCE = 'QUALITY_EXCELLENCE',
  CUSTOMER_STORE_RELATIONS = 'CUSTOMER_STORE_RELATIONS',
  TEAMWORK_COLLABORATION = 'TEAMWORK_COLLABORATION',
  ATTENDANCE_RELIABILITY = 'ATTENDANCE_RELIABILITY',
  PROBLEM_SOLVING = 'PROBLEM_SOLVING',
  SAFETY_COMPLIANCE = 'SAFETY_COMPLIANCE',
  LEADERSHIP_INITIATIVE = 'LEADERSHIP_INITIATIVE',
  TRAINING_MENTORING = 'TRAINING_MENTORING',
  EFFICIENCY_PRODUCTIVITY = 'EFFICIENCY_PRODUCTIVITY',
  OTHER = 'OTHER'
}

export enum RecognitionTier {
  VERBAL = 'VERBAL',
  WRITTEN = 'WRITTEN',
  AWARD_NOMINATION = 'AWARD_NOMINATION',
  PERFORMANCE_BONUS = 'PERFORMANCE_BONUS'
}

// Interfaces

export interface User {
  uid: string; // PRD: id
  employeeId: string;
  displayName: string; // PRD: name
  email: string;
  role: Role;
  supervisorId: string;
  location?: string;
  photoURL?: string;
  isActive: boolean;
  metadata: {
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface CallOut {
  id: string;
  userId: string; // PRD: employeeId
  userName: string; // Denormalized
  shiftDate: string; // Date string YYYY-MM-DD
  shiftStart?: string; // Time string HH:mm
  shiftEnd?: string; // Time string HH:mm
  reason: CallOutReason;
  details?: string;
  status: CallOutStatus;
  submittedAt: string; // ISO String
  acknowledgedByUid?: string;
  acknowledgedAt?: string;
  reclassifiedToId?: string;
  supervisorNotes?: string;
  // Reported for others
  reportedByUid?: string; // If null, self-reported
}

// Alias for backward compatibility if needed, though we should prefer CallOut
export type Impact = CallOut; 

export interface Infraction {
  id: string;
  userId: string; // PRD: employeeId
  userName: string;
  reportedByUid: string; // PRD: reportedById
  reportedByName: string;
  type: InfractionType;
  occurredAt: string; // ISO String
  location?: string;
  details: string;
  status: InfractionStatus;
  cafId?: string;
  resolvedByUid?: string;
  resolvedAt?: string;
  resolutionNotes?: string;
  reportedAt: string; // ISO String
}

export interface CorrectiveAction {
  id: string;
  userId: string; // PRD: employeeId
  userName: string;
  supervisorId: string;
  supervisorName: string;
  discussionDate: string; // YYYY-MM-DD
  location?: string;
  subject: CAFSubject;
  specificDetails: string;
  policyExpectations?: string;
  requiredImprovement: string;
  associateComments?: string;
  status: CAFStatus;
  supervisorSignedAt?: string; // ISO String
  associateSignedAt?: string; // ISO String
  createdAt: string; // ISO String
  updatedAt: string; // ISO String
}

export type CAF = CorrectiveAction;

export interface Recognition {
  id: string;
  userId: string; // PRD: employeeId
  submittedByUid: string;
  submittedByName?: string; // Added for convenience
  category: RecognitionCategory;
  tier: RecognitionTier;
  description: string;
  impactStatement?: string;
  isApproved: boolean; // Derived from pending = false
  approvedByUid?: string;
  approvedAt?: string;
  createdAt: string; // ISO String
  location?: string;
}

export interface Notification {
  id: string;
  recipientUid: string;
  type: 'PATTERN_ALERT' | 'CAF_SIGNATURE' | 'RECOGNITION_APPROVED';
  message: string;
  read: boolean;
  createdAt: string; // ISO String
  link?: string;
}
