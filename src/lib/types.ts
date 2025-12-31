export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'teammate' | 'lead' | 'supervisor' | 'hr' | 'admin';
  supervisorId: string;
  location: string;
  photoURL?: string;
  isActive: boolean;
  metadata: { createdAt: Date; updatedAt: Date };
}

export interface Impact {
  id: string;
  userId: string;
  userName: string;
  supervisorId: string;
  shiftDate: string; // ISO Date String (YYYY-MM-DD)
  reason: 'SICK' | 'EMERGENCY' | 'CAR_TROUBLE' | 'LATE' | 'OTHER';
  details: string;
  status: 'SUBMITTED' | 'EXCUSED' | 'UNEXCUSED' | 'RECLASSIFIED';
  reportedBy: string;
  method?: 'PHONE' | 'TEXT' | 'APP';
  history: Array<{ action: string; timestamp: Date; actorId: string }>;
  createdAt: Date;
}

export interface Infraction {
  id: string;
  userId: string;
  reportedByUid: string;
  type: 'NO_CALL_NO_SHOW' | 'LATE_ARRIVAL' | 'UNPROFESSIONAL' | 'DRESS_CODE' | 'OTHER';
  occurredAt: Date;
  details: string;
  status: 'PENDING' | 'CAF_CREATED' | 'DISMISSED';
  linkedCafId?: string;
  location: string;
}

export interface CAF {
  id: string;
  userId: string;
  supervisorId: string;
  status: 'DRAFT' | 'PENDING_ASSOCIATE_SIG' | 'COMPLETED' | 'REFUSED';
  subject: string;
  policyText: string;
  specificDetails: string;
  requiredImprovement: string;
  supervisorSignatureUrl?: string;
  supervisorSignedAt?: Date;
  associateSignatureUrl?: string;
  associateSignedAt?: Date;
  associateComments?: string;
  linkedInfractionIds: string[];
  createdAt: Date;
}

export interface Recognition {
  id: string;
  userId: string;
  submittedByUid: string;
  category: 'QUALITY' | 'CUSTOMER_SERVICE' | 'TEAMWORK' | 'SAFETY';
  tier: 'VERBAL' | 'WRITTEN' | 'AWARD';
  description: string;
  isApproved: boolean;
  approvedByUid?: string;
  approvedAt?: Date;
  createdAt: Date;
}

export interface Notification {
  id: string;
  recipientUid: string;
  type: 'SIGNATURE_REQ' | 'PATTERN_ALERT' | 'RECOGNITION' | 'STATUS_CHANGE';
  message: string;
  linkPath: string;
  read: boolean;
  createdAt: Date;
}
