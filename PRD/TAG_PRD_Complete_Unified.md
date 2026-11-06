# Team Accountability Gateway (TAG)
## Complete Product Requirements Document

**Version:** 4.0 (Unified)  
**Last Updated:** December 30, 2025  
**Author:** T (Supervisor, Retail Odyssey)  
**Status:** In Development - Core Features Implemented

---

## Document Overview

This PRD represents the complete vision and current implementation status of the Team Accountability Gateway (TAG). It merges:
- Original corrective action documentation requirements
- Attendance tracking and call-out notification expansion
- Positive recognition system
- Current implementation status as of December 2025
- All identified future enhancements and improvements

---

## Executive Summary

The Team Accountability Gateway (TAG) is a unified platform for team accountability that captures, documents, escalates, and archives all attendance, conduct, and performance-related events. The system digitizes the corrective action process while also enabling positive recognition of exceptional performance.

**TAG operates across four operational paths:**

1. **Impact Reporting (Call-Outs)** - Associate-initiated policy notifications and schedule impacts
2. **Infraction Reporting** - Lead/Supervisor-initiated missing associate and violation reports
3. **Corrective Actions** - Supervisor-initiated attendance exceptions and formal CAF documentation
4. **Recognition** - Lead/Supervisor-initiated positive performance documentation

**Key Achievements:**
- Eliminates informal texting chains and disconnected spreadsheets
- Provides structured, auditable records for every event
- Enables historical recall and pattern recognition
- Supports progressive discipline with documented history
- Recognizes and rewards exceptional performance
- Maintains legal compliance and defensible audit trails

---

## Problem Statement

### Current Challenges with Manual Processes:

**Documentation Issues:**
- Inefficiency: Manual form creation, physical signatures, and paper storage consume significant supervisor time
- Inconsistency: Policy expectations are often paraphrased incorrectly or omitted
- Tracking Gaps: Difficulty tracking prior notifications and progressive discipline
- Delayed Signatures: Associates working remotely or at different locations delay form completion
- Storage/Retrieval: Paper forms are difficult to search, prone to loss, and create compliance risks

**Visibility & Communication:**
- No Real-Time Visibility: Supervisors lack insight into pending actions across their teams
- Informal Communication: Critical attendance notifications happening through text messages
- Disconnected Records: Spreadsheets, texts, and paper forms create fragmented documentation
- Delayed Reporting: Issues not documented until days or weeks after occurrence

**Pattern Recognition:**
- Pattern Blindness: No systematic way to identify attendance patterns or repeat offenders
- Reactive Management: Problems only addressed after they become critical
- No Trend Analysis: Cannot identify team-wide or location-based issues

**Recognition Gaps:**
- Missing Recognition: No formal system to document and reward exceptional performance
- Inconsistent Acknowledgment: Outstanding work goes unrecognized or undocumented
- No Visibility: Positive contributions not tracked for performance reviews or promotions

---

## Solution Overview

TAG provides a unified platform that:

### For Teammates:
- Report absences and schedule impacts with policy compliance
- View personal attendance and conduct history
- Acknowledge corrective actions electronically
- View recognition received
- Edit pending impact reports before supervisor review

### For Team Leads:
- Document infractions and missing associates as they occur
- Submit positive recognition for team members
- View team call-out status in real-time
- Track resolution of reported issues
- Monitor submitted impacts and recognitions

### For Supervisors:
- Review and action all pending impacts (call-outs)
- Create and manage corrective action forms
- Electronically sign and distribute CAFs
- Track signature status and document completion
- Approve recognition submissions
- View pattern alerts and team analytics
- Generate PDF documentation for HR/legal compliance
- Access comprehensive team dashboards

### For HR/Compliance:
- Access finalized documentation
- Run compliance and trend reporting
- Audit policy consistency
- Export records for legal purposes

---

## Primary Objectives

1. ✅ **Capture every attendance and conduct-impacting event in real time** - Implemented
2. ✅ **Enforce policy-consistent classification** - Implemented with auto-populated policies
3. ✅ **Automate documentation and authorization workflows** - Implemented with electronic signatures
4. ✅ **Maintain a defensible audit trail** - Implemented with versioning and timestamps
5. 🔄 **Provide leadership with pattern intelligence** - Partially implemented (dashboards exist, pattern alerts needed)
6. ✅ **Eliminate duplicate data entry** - Implemented with pre-fill and linking
7. ✅ **Maintain associate transparency and confirmation** - Implemented with history views
8. ✅ **Enable positive recognition alongside corrective actions** - Implemented
9. ✅ **Support progressive discipline with historical context** - Implemented

**Legend:**
- ✅ Fully Implemented
- 🔄 Partially Implemented
- 📋 Planned
- 🚀 Future Enhancement

---

## User Roles & Permissions

### 1. Teammate (Associate)

**Description:** Front-line employee who must adhere to company attendance, conduct, and presentation policies.

**Current Capabilities:**
- ✅ Report within-policy absences or tardiness (call-outs/impacts)
- ✅ View personal attendance and conduct history ("My Impact")
- ✅ View recognition received ("My Recognition")
- ✅ Receive confirmations and document requests
- ✅ Acknowledge and sign corrective action forms electronically
- ✅ Add comments to CAFs before signing
- ✅ Edit pending impacts before supervisor review
- ✅ View personal infraction history ("My Infractions")
- ✅ View corrective action history ("My Corrective Actions")

**Future Capabilities:**
- 📋 View personal pattern summary
- 📋 Receive notifications via email/SMS
- 📋 Upload supporting documentation (doctor's notes, etc.)

**Restrictions:**
- Cannot view other employees' data
- Cannot create or modify CAFs
- Cannot report infractions
- Cannot issue recognition
- Cannot edit impacts after supervisor has actioned them

---

### 2. Team Lead

**Description:** Oversees day-to-day operations, first level of leadership.

**Current Capabilities (inherits all Teammate plus):**
- ✅ Report missing associates and infractions
- ✅ Submit positive recognition for teammates (requires supervisor approval)
- ✅ Report impacts for other team members (with report method tracking)
- ✅ Add on-site context to reports
- ✅ View infractions and recognitions they have submitted
- ✅ Select from CAF subject types when reporting impacts

**Future Capabilities:**
- 📋 View team member attendance patterns
- 📋 Receive pattern alerts for their direct reports
- 📋 Access simplified team dashboard

**Restrictions:**
- Cannot create CAFs (escalates to Supervisor)
- Cannot authorize or sign CAFs as supervisor
- Cannot dismiss infractions
- Recognition submissions require supervisor approval
- Cannot view other leads' team data

---

### 3. Supervisor

**Description:** Monitors, documents, and corrects team issues. Primary user for corrective action workflow.

**Current Capabilities (inherits all Team Lead plus):**
- ✅ View all infractions and recognitions for their team
- ✅ Create new Corrective Action Forms
- ✅ Create attendance exceptions
- ✅ Review and action pending impacts (excused, unexcused, reclassify)
- ✅ Reclassify associate notifications as policy violations
- ✅ Select infraction types with auto-populated policy expectations
- ✅ Document specific details and required improvements
- ✅ Sign CAFs as authorizing supervisor
- ✅ Send CAFs to associates for electronic signature
- ✅ Track CAF signature status
- ✅ View and manage all team call-outs
- ✅ Access historical CAF records
- ✅ Generate PDF copies of completed documents
- ✅ View team-wide dashboards (Impact, Infraction, CAF, Recognition)
- ✅ Approve recognition submissions from leads
- ✅ Create recognition entries directly (auto-approved)
- ✅ Create pre-populated CAFs from infractions
- ✅ Create pre-populated CAFs from call-outs (reclassification)
- ✅ Create infractions from call-outs

**Future Capabilities:**
- 📋 Mark CAFs as refused
- 📋 Link recognition to formal reward programs
- 📋 View pattern analysis and threshold alerts
- 📋 Receive automated escalation notifications
- 📋 Bulk action on pending impacts
- 📋 Schedule CAF discussions
- 📋 Request witness signatures

**Restrictions:**
- Can only view their own team's data
- Cannot modify completed/signed CAFs
- Cannot delete records (soft delete only)

---

### 4. HR / Compliance

**Description:** Corporate oversight and compliance management.

**Current Capabilities:**
- ✅ Read-only access to finalized documentation (via database queries)

**Future Capabilities:**
- 📋 Dedicated HR dashboard with read-only access
- 📋 Run compliance and trend reporting
- 📋 Audit policy consistency reports
- 📋 View recognition program metrics
- 📋 Export records for legal or compliance purposes
- 📋 Search across all employees/locations
- 📋 Generate company-wide analytics

**Restrictions:**
- Cannot create or modify records
- Cannot approve or sign documents
- Cannot access draft/pending documents
- Cannot view individual associate's personal data without cause

---

### 5. System Admin

**Description:** Technical administrator for system configuration.

**Current Capabilities:**
- ✅ Database access for user management
- ✅ Ability to view all records

**Future Capabilities:**
- 📋 Manage reason codes and categories
- 📋 Configure thresholds and escalation rules
- 📋 Manage user roles and permissions via UI
- 📋 Configure routing rules
- 📋 Maintain security and visibility settings
- 📋 Configure recognition categories and reward tiers
- 📋 Set up pattern recognition thresholds
- 📋 Manage notification templates
- 📋 Configure integrations

**Restrictions:**
- Should not routinely access employee data
- Changes should be audit-logged
- Major configuration changes require approval

---

## The Four Operational Paths

### Path 1: Impact Reporting (Call-Outs)

**Status:** ✅ Fully Implemented with Enhancements

**Trigger:** Associate reports future or same-day schedule impact.

**Examples:**
- Calling out sick
- Family emergency
- Car trouble
- Medical appointment
- Personal day
- Weather-related absence
- Running late

**Flow:**

**Self-Reporting (Associate):**
1. ✅ Associate logs in
2. ✅ Selects "Impact" → "New Impact"
3. ✅ Enters:
   - Affected shift date
   - Reason (dropdown from CallOutReason enum)
   - Optional details
4. ✅ System records:
   - Employee ID and name
   - Submission timestamp (UTC)
   - Status: SUBMITTED
5. ✅ Confirmation displayed to associate
6. ✅ Associate can view in "My Impact"
7. ✅ Associate can edit until supervisor actions it

**Report for Others (Lead/Supervisor):**
1. ✅ Lead/Supervisor selects "Impact" → "Report Impact"
2. ✅ Selects team member from dropdown
3. ✅ Selects "How was this reported to you?" (Phone, Email, Text, In Person, Other)
4. ✅ Selects "Report Type" from CAF subjects (e.g., "Attendance - Late Arrival")
5. ✅ Enters shift date, reason, and details
6. ✅ System appends reporter info and method to details
7. ✅ Impact logged with SUBMITTED status

**Supervisor Review:**
1. ✅ Supervisor views pending impacts in dashboard or review queue
2. ✅ Supervisor reviews details, history, patterns
3. ✅ Supervisor selects action:

**Option A: Accept as Excused**
- ✅ Mark as EXCUSED
- ✅ Record acknowledged by supervisor with timestamp
- ✅ No further action needed
- ✅ Associate notified

**Option B: Mark as Unexcused**
- ✅ Mark as UNEXCUSED
- ✅ Record in attendance history
- ✅ Associate notified
- 🔄 May trigger pattern alert if threshold met

**Option C: Reclassify as Violation**
- ✅ Mark as RECLASSIFIED
- ✅ Auto-generate pre-populated CAF
- ✅ CAF includes:
  - Call-out details
  - Shift date and reason
  - Reporter notes
  - Pre-filled subject (e.g., "Attendance - Improper Call Off")
- ✅ Supervisor completes CAF specifics
- ✅ CAF enters standard signature workflow

**Option D: Create Infraction (Future)**
- 📋 Convert to infraction record
- 📋 Link to original call-out
- 📋 Route to infraction review workflow

**Editability:**
- ✅ Associates can edit their own pending (SUBMITTED) impacts
- ✅ Editing appends version note with timestamp and editor name
- ✅ Once supervisor actions it, editing is locked
- ✅ Edit history preserved in details field

**Current Features:**
- ✅ Self-service call-out submission
- ✅ Report for others with method tracking
- ✅ Editable pending impacts
- ✅ Supervisor review dashboard
- ✅ Three-option action workflow
- ✅ Auto-generated CAF from reclassification
- ✅ UTC timestamp tracking
- ✅ Status flow (SUBMITTED → EXCUSED/UNEXCUSED/RECLASSIFIED)

**Future Enhancements:**
- 📋 Pattern detection (e.g., 3 unexcused in 30 days)
- 📋 Automated notifications to supervisors
- 📋 SMS/Email notifications to associates
- 📋 Attachment support (doctor's notes)
- 📋 Scheduled/future call-outs
- 📋 Bulk approval for supervisors
- 📋 Call-out calendar view
- 📋 Analytics on call-out trends

---

### Path 2: Infraction Reporting

**Status:** ✅ Fully Implemented

**Trigger:** Lead or Supervisor observes attendance or conduct violation.

**Examples:**
- Late arrival without notice
- No call/no show
- Left early without approval
- Improper call-off procedure
- Unprofessional behavior
- Cell phone use during work
- Appearance/grooming issue
- Insubordination
- Walking off job
- Other policy violations

**Flow:**

1. ✅ Lead/Supervisor selects "Infractions" → "Report Infraction" (if route added) or accesses from dashboard
2. ✅ Selects employee from dropdown
3. ✅ Selects infraction type from InfractionType enum:
   - LATE_ARRIVAL
   - NO_CALL_NO_SHOW
   - LEFT_EARLY
   - IMPROPER_CALLOFF
   - UNPROFESSIONAL_BEHAVIOR
   - CELL_PHONE_USE
   - APPEARANCE_ISSUE
   - INSUBORDINATION
   - WALK_OFF
   - OTHER
4. ✅ Enters:
   - Date/time occurred
   - Location
   - Detailed description
5. ✅ System records:
   - Reporter ID and name
   - Reported timestamp
   - Status: PENDING
6. ✅ Infraction appears in supervisor's "Infraction Dashboard"

**Supervisor Review:**
1. ✅ Supervisor reviews infraction in "Infraction Dashboard"
2. ✅ Supervisor can:
   - ✅ Create CAF directly from infraction (pre-populated)
   - 📋 Dismiss infraction with notes
   - 📋 Escalate to HR
   - 📋 Link to existing CAF

**CAF Creation from Infraction:**
1. ✅ Supervisor clicks "Create CAF" link in dashboard
2. ✅ System pre-populates CAF with:
   - Employee info
   - Subject mapped from infraction type (via INFRACTION_TO_SUBJECT)
   - Specific details including:
     - Infraction date
     - Type
     - Location
     - Reporter's notes
3. ✅ Supervisor completes remaining fields
4. ✅ CAF enters standard workflow
5. ✅ Infraction status updated to CAF_CREATED

**Alternative: Create Infraction from Call-Out:**
1. ✅ Supervisor viewing call-out can click "Create Infraction"
2. ✅ System pre-populates infraction with:
   - Employee info
   - Occurred date = call-out submitted date
   - Details from call-out
   - Suggested type: IMPROPER_CALLOFF
3. ✅ Supervisor completes and submits
4. ✅ Call-out remains separate record, linked

**Current Features:**
- ✅ Lead and supervisor reporting
- ✅ Comprehensive infraction type taxonomy
- ✅ Date/time and location tracking
- ✅ Reporter attribution
- ✅ Pending status workflow
- ✅ Link to CAF creation
- ✅ Create from call-out
- ✅ Infraction dashboard for supervisors
- ✅ Personal infraction view for associates

**Future Enhancements:**
- 📋 Photo attachment capability
- 📋 Witness statements
- 📋 Dismiss infraction workflow
- 📋 Escalate to HR workflow
- 📋 Pattern matching (repeated infraction types)
- 📋 Auto-notification to supervisor
- 📋 Infraction severity scoring
- 📋 Link multiple infractions to single CAF

---

### Path 3: Corrective Action Form (CAF)

**Status:** ✅ Core Features Implemented, Signature Enhancement Needed

**Trigger:** Violation identified requiring formal documentation.

**Examples:**
- Reclassified call-out (policy violation)
- Lead-reported infraction requiring documentation
- Supervisor-observed violation
- Pattern-triggered escalation
- Progressive discipline step

**CAF Subjects (Auto-Populated Policy Text):**

| Subject | Policy Expectation |
|---------|-------------------|
| Attendance - No Call No Show | Associates are expected to notify their supervisor at least 2 hours before a scheduled shift if they will be absent. Failure to call and failure to show for a scheduled shift is considered a No Call/No Show. |
| Attendance - Late Arrival | Associates must arrive on time for their scheduled shifts. Repeated tardiness may result in corrective action. |
| Attendance - Leaving Early | Associates must complete their full scheduled shift unless prior approval is granted. |
| Attendance - Improper Call Off | Call-outs must follow company policy. Improper call-offs include last-minute notifications without valid reason. |
| Unprofessional Behavior | All associates are expected to maintain professional conduct at all times, including respectful interaction with customers and team members. |
| Cell Phone/Electronic Devices | Personal cell phone use is prohibited during work hours except during approved breaks. |
| Appearance and Grooming | Associates must adhere to the company dress code and grooming standards at all times. |
| Other | Refer to specific policy as discussed. |

**Flow:**

**CAF Creation:**
1. ✅ Supervisor selects "Corrective Actions" → "Create Corrective Action"
2. ✅ Or clicks "Create CAF" from infraction/call-out
3. ✅ If from infraction/call-out:
   - ✅ Employee pre-selected
   - ✅ Subject pre-mapped
   - ✅ Specific details pre-filled
4. ✅ Supervisor completes form:
   - ✅ Employee (if not pre-filled)
   - ✅ Subject (dropdown from CAFSubject enum)
   - ✅ Specific Details (minimum 50 characters)
   - ✅ Required Improvement (minimum 25 characters)
5. ✅ System auto-populates:
   - ✅ Discussion Date (today)
   - ✅ Supervisor ID and name
   - ✅ Location
   - ✅ Policy Expectations (based on subject)
6. ✅ CAF saved with status: DRAFT
7. ✅ Supervisor redirected to view CAF

**Supervisor Signature:**
1. ✅ Supervisor views CAF in DRAFT status
2. ✅ Reviews all fields
3. ✅ Clicks "Sign as Supervisor"
4. ✅ System:
   - ✅ Records supervisor signature timestamp
   - ✅ Updates status to PENDING_ASSOCIATE_SIG
   - 📋 Future: Captures actual signature via canvas
5. ✅ CAF locked from supervisor edits
6. 📋 Future: Email sent to associate with link

**Associate Signature:**
1. ✅ Associate logs in
2. ✅ Sees notification (future) or navigates to "My Corrective Actions"
3. ✅ Views CAF with all details
4. ✅ Can add associate comments (optional)
5. ✅ Clicks "Acknowledge and Sign"
6. ✅ System:
   - ✅ Records associate signature timestamp
   - ✅ Saves associate comments
   - ✅ Updates status to COMPLETED
   - 📋 Future: Captures actual signature
7. ✅ CAF fully locked

**PDF Generation:**
1. ✅ Completed CAFs can be exported to PDF
2. ✅ PDF includes:
   - ✅ All CAF fields
   - ✅ Policy expectations
   - ✅ Associate comments
   - ✅ Signature timestamps
   - 📋 Future: Actual signature images
3. ✅ PDF downloaded with filename: CAF_{EmployeeName}_{DiscussionDate}.pdf

**CAF Status Flow:**

```
DRAFT 
  ↓ (Supervisor signs)
PENDING_ASSOCIATE_SIG
  ↓ (Associate signs)
COMPLETED

Alternative paths:
DRAFT → PENDING_WITNESS (future)
PENDING_ASSOCIATE_SIG → REFUSED (future)
```

**Current Features:**
- ✅ CAF creation from scratch
- ✅ CAF creation from infraction (pre-populated)
- ✅ CAF creation from call-out reclassification (pre-populated)
- ✅ Auto-populated policy text
- ✅ Supervisor electronic signature
- ✅ Associate electronic signature
- ✅ Associate comments
- ✅ Status workflow management
- ✅ PDF export of completed CAFs
- ✅ CAF dashboard for supervisors (last 10)
- ✅ My CAFs view for associates
- ✅ View CAF detail page
- ✅ Field validation (minimum character counts)

**Future Enhancements:**

**Signature Capture:**
- 📋 Replace button-based signature with actual signature drawing
- 📋 Use HTML5 canvas for signature capture
- 📋 Save signature as image in database
- 📋 Display signature images in view and PDF

**Workflow Enhancements:**
- 📋 Mark CAF as "Refused" with reason
- 📋 Request witness signature
- 📋 Schedule CAF discussion meeting
- 📋 Email notifications at each status change
- 📋 SMS reminders for pending signatures
- 📋 Expiration timer for pending signatures (7 days)
- 📋 Escalation workflow if associate doesn't sign

**Documentation:**
- 📋 Attach supporting documents (incident reports, photos)
- 📋 Link to prior CAFs for progressive discipline reference
- 📋 Auto-populate prior notification history
- 📋 Show pattern context when creating CAF

**Compliance:**
- 📋 Version control for edited drafts
- 📋 Full audit trail of all changes
- 📋 Batch export for HR/legal review
- 📋 Search by employee, date range, subject

---

### Path 4: Positive Recognition

**Status:** ✅ Fully Implemented with Approval Workflow

**Trigger:** Lead or Supervisor observes exceptional performance worthy of documentation.

**Examples:**
- Exceptional reset execution quality
- Going above and beyond for customer/store
- Helping struggling teammates
- Perfect attendance milestone
- Solving a difficult problem
- Outstanding professionalism
- Safety excellence
- Training/mentoring others
- Completing work ahead of schedule
- Positive store manager feedback
- Handling difficult situations with grace

**Recognition Categories:**

| Category | Description |
|----------|-------------|
| Quality Excellence | Outstanding work quality, attention to detail |
| Customer/Store Relations | Exceptional customer service, strong store partnerships |
| Teamwork & Collaboration | Helping others, team player attitude |
| Attendance & Reliability | Perfect attendance, always on time, dependable |
| Problem Solving | Creative solutions, handling challenges effectively |
| Safety & Compliance | Following safety protocols, preventing incidents |
| Leadership & Initiative | Taking charge, going beyond assigned duties |
| Training & Mentoring | Helping new team members, sharing knowledge |
| Efficiency & Productivity | Working quickly without sacrificing quality |
| Other | Other exceptional contributions |

**Recognition Tiers:**

| Tier | Description | Who Can Issue | Approval Required |
|------|-------------|---------------|-------------------|
| Verbal Recognition | Informal acknowledgment | Lead, Supervisor | Supervisor approval if from Lead |
| Written Recognition | Formal documented recognition | Supervisor | None |
| Award Nomination | Nomination for company award | Supervisor | None (supervisor creates directly) |
| Performance Bonus | Bonus recommendation | Supervisor | HR approval (future) |

**Flow:**

**Lead Submission:**
1. ✅ Lead selects "Recognition" → "New Recognition"
2. ✅ Selects team member from dropdown
3. ✅ Selects recognition category
4. ✅ Enters:
   - Recognition date (defaults to today)
   - Location
   - Description (minimum 50 characters)
   - Optional impact statement
5. ✅ System:
   - ✅ Records submitter ID and name
   - ✅ Sets tier to VERBAL
   - ✅ Sets status to pending = True
   - ✅ Saves with creation timestamp
6. ✅ Flash message: "Recognition submitted for supervisor approval"

**Supervisor Direct Submission:**
1. ✅ Supervisor selects "Recognition" → "New Recognition"
2. ✅ Completes same form as Lead
3. ✅ System:
   - ✅ Sets tier to WRITTEN
   - ✅ Sets status to pending = False (auto-approved)
   - ✅ Records supervisor as submitter
4. ✅ Flash message: "Recognition submitted and approved"
5. ✅ Immediately visible in associate's "My Recognition"

**Supervisor Approval:**
1. ✅ Supervisor navigates to "Recognition" → "Recognition Dashboard"
2. ✅ Views all pending recognitions submitted by leads
3. ✅ Table shows:
   - Employee name
   - Category
   - Submitted by (lead name)
   - Date
   - Description preview
4. ✅ Supervisor clicks "Approve" link
5. ✅ System:
   - ✅ Sets pending = False
   - ✅ Records supervisorApprovedAt timestamp
   - ✅ Flash message: "Recognition approved for {employee}"
6. ✅ Recognition now visible in associate's view

**Associate View:**
1. ✅ Associate selects "Recognition" → "My Recognition"
2. ✅ Views all approved recognitions (pending = False)
3. ✅ Table shows:
   - Date
   - Category
   - Submitted by
   - Tier
   - Description
   - Impact statement
4. ✅ Only approved recognitions displayed

**Current Features:**
- ✅ Lead submission with supervisor approval requirement
- ✅ Supervisor direct submission (auto-approved)
- ✅ Comprehensive category taxonomy
- ✅ Recognition tier system
- ✅ Pending approval workflow
- ✅ Recognition dashboard for supervisors
- ✅ Personal recognition view for associates
- ✅ Minimum character validation
- ✅ Impact statement field
- ✅ Location tracking
- ✅ Submitter attribution

**Future Enhancements:**

**Award Integration:**
- 📋 Link recognition to formal company reward programs
- 📋 Track award nominations and outcomes
- 📋 Monetary reward tracking
- 📋 Gift card/merchandise redemption

**Analytics:**
- 📋 Recognition frequency by employee
- 📋 Recognition distribution by category
- 📋 Most recognized employees
- 📋 Recognition trends over time
- 📋 Lead submission accuracy (approval rate)

**Notifications:**
- 📋 Email to associate when recognized
- 📋 Notification to lead when approved/denied
- 📋 Monthly recognition summary for supervisors

**Social Features:**
- 📋 Recognition feed (team visibility)
- 📋 Peer-to-peer recognition
- 📋 Recognition badges/achievements
- 📋 Anniversary recognition automation

**HR Integration:**
- 📋 Include recognitions in performance reviews
- 📋 Export recognition history for promotions
- 📋 Recognition metrics in annual reviews

---

## Complete Data Model

### Employee

**Table:** `employees`

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | String(36) | PK, UUID | Unique identifier |
| employeeId | String(50) | Unique, Not Null | Company employee ID |
| name | String(255) | Not Null | Full name |
| email | String(255) | Unique, Not Null | Email address |
| phone | String(20) | | Phone number |
| pin | String(255) | Not Null | Hashed PIN for login |
| role | Enum(Role) | Not Null | TEAMMATE, LEAD, SUPERVISOR, HR, ADMIN |
| supervisorId | String(36) | FK(employees.id) | Reports to supervisor |
| program | String(100) | | Program/division assignment |
| location | String(255) | | Primary work location |
| hireDate | Date | | Date of hire |
| isActive | Boolean | Default True | Employment status |
| createdAt | DateTime | Default UTC now | Record creation |
| updatedAt | DateTime | Default UTC now, auto-update | Last modification |

**Relationships:**
- supervisor → Employee (self-referencing)
- subordinates → [Employee] (inverse of supervisor)
- callouts → [CallOut]
- infractions_received → [Infraction] (as employeeId)
- infractions_reported → [Infraction] (as reportedById)
- cafs_received → [CorrectiveAction] (as employeeId)
- cafs_supervised → [CorrectiveAction] (as supervisorId)
- recognitions_received → [Recognition] (as employeeId)
- recognitions_submitted → [Recognition] (as submittedById)

**Status:** ✅ Fully Implemented

---

### CallOut (Impact)

**Table:** `callouts`

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | String(36) | PK, UUID | Unique identifier |
| employeeId | String(36) | FK(employees.id), Not Null | Employee who called out |
| employeeName | String(255) | Not Null | Employee name (denormalized) |
| shiftDate | Date | Not Null | Affected shift date |
| shiftStart | Time | | Scheduled shift start |
| shiftEnd | Time | | Scheduled shift end |
| reason | Enum(CallOutReason) | Not Null | SICK, FAMILY_EMERGENCY, CAR_TROUBLE, MEDICAL_APPOINTMENT, PERSONAL, WEATHER, OTHER |
| details | Text | | Additional context, includes reporter info if reported for others |
| status | Enum(CallOutStatus) | Not Null, Default SUBMITTED | SUBMITTED, ACKNOWLEDGED, EXCUSED, UNEXCUSED, RECLASSIFIED |
| submittedAt | DateTime | Default UTC now | When call-out was reported |
| acknowledgedById | String(36) | FK(employees.id) | Supervisor who reviewed |
| acknowledgedAt | DateTime | | When supervisor reviewed |
| reclassifiedToId | String(36) | | Link to CAF if reclassified |
| supervisorNotes | Text | | Supervisor's review notes |
| patternFlags | JSON | | Auto-detected patterns (future) |

**Relationships:**
- employee → Employee
- acknowledged_by → Employee

**Status:** ✅ Fully Implemented (patternFlags stubbed)

---

### Infraction

**Table:** `infractions`

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | String(36) | PK, UUID | Unique identifier |
| employeeId | String(36) | FK(employees.id), Not Null | Employee who committed infraction |
| employeeName | String(255) | Not Null | Employee name (denormalized) |
| reportedById | String(36) | FK(employees.id), Not Null | Lead/supervisor who reported |
| reportedByName | String(255) | Not Null | Reporter name (denormalized) |
| type | Enum(InfractionType) | Not Null | LATE_ARRIVAL, NO_CALL_NO_SHOW, LEFT_EARLY, IMPROPER_CALLOFF, UNPROFESSIONAL_BEHAVIOR, CELL_PHONE_USE, APPEARANCE_ISSUE, INSUBORDINATION, WALK_OFF, OTHER |
| occurredAt | DateTime | Not Null | When infraction occurred |
| location | String(255) | | Where it occurred |
| scheduledShift | String(255) | | Shift info if relevant |
| details | Text | Not Null | Detailed description |
| status | Enum(InfractionStatus) | Not Null, Default PENDING | PENDING, CAF_CREATED, RESOLVED, DISMISSED |
| cafId | String(36) | FK(corrective_actions.id) | Linked CAF if created |
| resolvedById | String(36) | FK(employees.id) | Supervisor who resolved |
| resolvedAt | DateTime | | When resolved |
| resolutionNotes | Text | | Resolution details |
| reportedAt | DateTime | Default UTC now | When infraction was reported |
| patternFlags | JSON | | Auto-detected patterns (future) |

**Relationships:**
- employee → Employee
- reported_by → Employee
- caf → CorrectiveAction
- resolved_by → Employee

**Status:** ✅ Fully Implemented (patternFlags stubbed, resolution workflow partially implemented)

---

### CorrectiveAction (CAF)

**Table:** `corrective_actions`

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | String(36) | PK, UUID | Unique identifier |
| employeeId | String(36) | FK(employees.id), Not Null | Employee receiving CAF |
| employeeName | String(255) | Not Null | Employee name (denormalized) |
| discussionDate | Date | Default today | Date of discussion |
| program | String(100) | | Program/division |
| supervisorId | String(36) | FK(employees.id), Not Null | Authorizing supervisor |
| supervisorName | String(255) | Not Null | Supervisor name (denormalized) |
| location | String(255) | | Location of discussion |
| subject | Enum(CAFSubject) | Not Null | ATTENDANCE_NO_CALL_NO_SHOW, ATTENDANCE_LATE_ARRIVAL, ATTENDANCE_LEAVING_EARLY, ATTENDANCE_IMPROPER_CALLOFF, UNPROFESSIONAL_BEHAVIOR, CELL_PHONE_DEVICES, APPEARANCE_GROOMING, OTHER |
| priorNotifications | JSON | | Prior CAF references (future) |
| specificDetails | Text | Not Null, Min 50 chars | Incident specifics |
| policyExpectations | Text | | Auto-populated policy text |
| requiredImprovement | Text | Not Null, Min 25 chars | Expected corrections |
| associateComments | Text | | Associate's response |
| status | Enum(CAFStatus) | Not Null, Default DRAFT | DRAFT, PENDING_SUPERVISOR_SIG, PENDING_ASSOCIATE_SIG, COMPLETED, PENDING_WITNESS, REFUSED |
| supervisorSignedAt | DateTime | | Supervisor signature timestamp |
| associateSignedAt | DateTime | | Associate signature timestamp |
| witnessSignedAt | DateTime | | Witness signature timestamp (future) |
| witnessName | String(255) | | Witness name (future) |
| createdAt | DateTime | Default UTC now | Record creation |
| updatedAt | DateTime | Default UTC now, auto-update | Last modification |

**Relationships:**
- employee → Employee
- supervisor → Employee
- infractions → [Infraction] (inverse via cafId)

**Status:** ✅ Core Implemented (witness workflow stubbed, signature images needed, prior notifications logic needed)

---

### Recognition

**Table:** `recognitions`

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | String(36) | PK, UUID | Unique identifier |
| employeeId | String(36) | FK(employees.id), Not Null | Employee being recognized |
| employeeName | String(255) | Not Null | Employee name (denormalized) |
| submittedById | String(36) | FK(employees.id), Not Null | Lead/supervisor who submitted |
| submittedByName | String(255) | Not Null | Submitter name (denormalized) |
| recognitionDate | Date | Default today | Date of recognized behavior |
| location | String(255) | Not Null | Where it occurred |
| category | Enum(RecognitionCategory) | Not Null | QUALITY_EXCELLENCE, CUSTOMER_STORE_RELATIONS, TEAMWORK_COLLABORATION, ATTENDANCE_RELIABILITY, PROBLEM_SOLVING, SAFETY_COMPLIANCE, LEADERSHIP_INITIATIVE, TRAINING_MENTORING, EFFICIENCY_PRODUCTIVITY, OTHER |
| description | Text | Not Null, Min 50 chars | What they did |
| impactStatement | Text | | Impact of their actions |
| tier | Enum(RecognitionTier) | | VERBAL, WRITTEN, AWARD_NOMINATION, PERFORMANCE_BONUS |
| awardLink | String(255) | | Link to award system (future) |
| supervisorApprovedAt | DateTime | | Supervisor approval timestamp |
| pending | Boolean | Default True | Awaiting supervisor approval (False if submitted by supervisor) |
| createdAt | DateTime | Default UTC now | Record creation |
| updatedAt | DateTime | Default UTC now, auto-update | Last modification |

**Relationships:**
- employee → Employee
- submitted_by → Employee

**Status:** ✅ Fully Implemented (award integration stubbed)

---

## User Interface Structure

### Navigation Menu (Dropdown Style)

**Implemented:** ✅ Fully Functional

**All Users:**
```
Impact (Dropdown)
├── New Impact
├── My Impact
├── Report Impact (Lead/Supervisor only)
└── Edit Impact (redirects to My Impact list)

Infractions (Dropdown)
├── My Infractions
└── Infraction Dashboard (Supervisor only)

Corrective Actions (Dropdown)
├── My Corrective Actions
├── Create Corrective Action (Supervisor only)
└── CAF Dashboard (Supervisor only)

Recognition (Dropdown)
├── My Recognition
├── New Recognition (Lead/Supervisor only)
└── Recognition Dashboard (Supervisor only)

Profile (Dropdown)
├── Change Name (coming)
├── Upload Picture (coming)
└── Change Password (coming)

Logout
```

**Status:** ✅ Implemented with role-based visibility

---

### Dashboards

#### Impact Dashboard
**Status:** 📋 Planned

**Teammate View:**
- All previous impacts (complete history)
- Pending impacts with edit link
- Status for each impact (SUBMITTED, EXCUSED, UNEXCUSED, RECLASSIFIED)
- Filter by date range, status
- Calendar view option

**Lead View:**
- All impacts they've submitted for others
- Resolution status for each
- Follow-through tracking
- Statistics on submitted vs resolved

**Supervisor View:**
- All pending impacts requiring action
- Direct action buttons:
  - Mark Excused
  - Mark Unexcused
  - Create Infraction
  - Create CAF (reclassify)
  - Delete (with reason)
- Filters: date range, reason, employee, status
- Bulk action capability
- Pattern alerts highlighted
- Quick stats: pending count, unexcused rate, pattern alerts

---

#### Infraction Dashboard
**Status:** ✅ Basic Implementation, Enhancements Needed

**Current Features:**
- Last 10 infractions
- Employee name, type, date
- Link to create CAF

**Future Enhancements:**
- Filter by status, type, employee, date range
- Bulk actions
- Dismiss infraction workflow
- View linked CAF status
- Pattern detection highlights
- Search functionality

---

#### CAF Dashboard
**Status:** ✅ Basic Implementation, Enhancements Needed

**Current Features:**
- Last 10 CAFs
- Employee, subject, date, status
- View link
- PDF link for completed CAFs

**Future Enhancements:**
- Filter by status, subject, employee, date range
- Pending signature count
- Overdue signature alerts
- Search functionality
- Bulk PDF export
- Link to source event (infraction/call-out)
- Progressive discipline context

---

#### Recognition Dashboard
**Status:** ✅ Fully Implemented

**Features:**
- Pending recognitions (awaiting approval)
- Employee, category, submitted by, date
- Description preview
- Approve link
- Notification when new submission

**Future Enhancements:**
- Deny with reason
- Edit before approval
- Filter by category, employee, date range
- Statistics on recognition frequency
- Most recognized employees
- Link to reward fulfillment

---

## Supporting Features

### 1. Pattern Recognition and Alerts

**Status:** 📋 Planned

**Purpose:** Systematically identify repeat offenders and problematic attendance patterns to support progressive discipline.

**Pattern Types:**

**Attendance Patterns:**
- 3+ unexcused impacts in 30 days
- 5+ total impacts in 90 days
- 3+ late arrivals in 30 days
- 2+ no call/no shows in 90 days
- 3+ Monday or Friday call-outs in 60 days
- 2+ call-outs around holidays

**Infraction Patterns:**
- 3+ infractions of same type in 90 days
- 2+ infractions in 30 days (any type)
- Repeat cell phone violations
- Repeat appearance issues

**Positive Patterns:**
- Perfect attendance for 90/180/365 days
- Zero infractions for 6/12 months
- 3+ recognitions in 90 days
- Improvement trend (decreasing issues)

**Alert Workflow:**
1. System runs pattern analysis nightly
2. Pattern detected → PatternAlert record created
3. Alert appears in supervisor dashboard
4. Supervisor reviews context and history
5. Supervisor acknowledges alert and selects action:
   - Create CAF
   - Document for future reference
   - Dismiss (false positive)
6. Alert status updated

**Alert Presentation:**
- Badge count on dashboard
- Alert details: employee, pattern type, threshold met, date range
- One-click CAF creation from alert
- Alert history for each employee

**Implementation:**
- Add PatternAlert table
- Create pattern detection logic
- Add alerts to supervisor dashboard
- Email notifications for new alerts

---

### 2. Full Versioning for Edits

**Status:** 🔄 Partially Implemented (Basic for call-outs)

**Current:**
- Call-outs: Edits appended to details field with timestamp and editor
- CAFs: No editing after supervisor signature
- Infractions: No editing after submission
- Recognitions: No editing after submission

**Enhancement:**
- Create separate Version table
- Store complete snapshots of records before each edit
- Track who, when, what changed
- View edit history for any record
- Restore previous version capability

**Version Table:**
```
id, recordType, recordId, version, changedBy, changedAt, snapshot(JSON)
```

---

### 3. Actual Signature Capture

**Status:** 📋 Critical Enhancement Needed

**Current:**
- Button-based "signature" (just a timestamp)
- No actual signature image

**Requirement:**
- HTML5 canvas for drawing signatures
- Save signature as image (PNG/JPEG)
- Store in database or file storage
- Display signature images in:
  - CAF view page
  - PDF export
  - Audit reports

**Implementation:**
- Add signature fields to Employee, CorrectiveAction tables
- Create signature capture component
- Integrate with CAF workflow
- Update PDF generation to include images
- Add signature verification/re-signing if needed

**Legal Compliance:**
- Capture IP address
- Timestamp (already implemented)
- Display full CAF before signing
- Confirmation modal
- Store signature separately from timestamp

---

### 4. Comprehensive Impact Dashboard

**Status:** 📋 High Priority

**Teammate View:**
- Table with all call-outs
- Columns: Date Submitted, Shift Date, Reason, Details, Status, Actions
- Edit link for pending only
- Filter/search by date, status
- Export to CSV

**Lead View:**
- All impacts they've reported for others
- Columns: Employee, Date, Reason, Status, Resolution, Actions
- Track outcomes: excused %, unexcused %, reclassified %
- Feedback loop to improve reporting accuracy

**Supervisor View (Most Complex):**
- Pending queue with priority sorting
- Quick action buttons on each row:
  - ✅ Excused
  - ❌ Unexcused
  - 📋 Create Infraction
  - 📄 Create CAF
  - 🗑️ Delete
- Bulk selection for mass excused/unexcused
- Filters: date range, reason, employee, status, pattern flag
- Stats bar: pending count, % excused, % unexcused, pattern alerts
- Export filtered results

**Implementation:**
- Create callouts dashboard routes for each role
- Add to navigation
- Build filtering/sorting logic
- Add bulk action capability
- Pattern flag integration

---

### 5. Profile Management

**Status:** 📋 Planned

**Features:**

**Change Name:**
- Request name change
- Requires supervisor approval
- Audit trail of name changes

**Upload Picture:**
- Profile photo upload
- Display in dashboards and documents
- Crop/resize functionality

**Change Password:**
- Current password verification
- Password strength requirements
- Confirmation email

**Additional Settings:**
- Notification preferences
- Language selection
- Timezone

---

### 6. Notification System

**Status:** 📋 Critical for Usability

**Notification Types:**

| Event | Recipients | Channels | Priority |
|-------|------------|----------|----------|
| Call-out submitted | Supervisor | App, Email | Normal |
| Call-out confirmed | Associate | App, Email | Normal |
| Infraction reported | Supervisor | App, Email | High |
| CAF pending signature | Associate | App, Email, SMS | High |
| CAF signed | Supervisor | App, Email | Normal |
| CAF refused | Supervisor | App, Email, SMS | Urgent |
| Signature reminder | Associate | App, Email, SMS | High |
| Signature expiring (2 days) | Associate, Supervisor | App, Email | High |
| Pattern alert | Supervisor | App, Email | High |
| Recognition received | Associate | App, Email | Normal |
| Recognition approved | Lead submitter | App | Normal |
| Award linked | Associate, Supervisor | App, Email | Normal |

**Channels:**
1. In-App: Badge counts, notification center, toast messages
2. Email: Formatted HTML emails with action links
3. SMS: Critical signatures and refusals only (optional)

**Reminder Schedule:**
- CAF Signature: 24 hours, 72 hours, expires at 7 days
- Pattern Alert Ack: 48 hours, 5 days

**Implementation:**
- Notification table to store and track
- Email service integration (SendGrid, AWS SES, etc.)
- SMS service (Twilio, optional)
- In-app notification center UI
- User preference settings
- Batch digest option (daily summary)

---

### 7. Analytics and Reporting

**Status:** 📋 Planned

**Supervisor Reports:**
- Team attendance compliance
- Infraction trends by type
- CAF completion rates
- Recognition distribution
- Pattern analysis
- Individual employee timeline
- Progressive discipline tracking

**HR Reports:**
- Company-wide attendance metrics
- Policy enforcement consistency
- Documentation completion times
- CAF refusal rates
- Recognition program metrics
- Location/division comparisons
- Export for legal/compliance

**Visual Dashboards:**
- Charts: pie, bar, line
- Trend analysis
- Drill-down capability
- Date range selection
- Export to PDF/CSV

---

### 8. Security and Compliance

**Current Security:**
- ✅ Role-based access control
- ✅ PIN-based authentication
- ✅ UTC timestamps
- ✅ Denormalized names for audit trail
- ✅ Soft delete (no hard deletes)

**Enhancements Needed:**
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- Rate limiting on login attempts
- Session timeout
- Password hashing (currently using plain PIN)
- Audit log for all sensitive actions
- GDPR compliance (data export, deletion rights)
- Encryption at rest for sensitive fields
- HTTPS enforcement
- CSRF protection

---

### 9. Deployment and Infrastructure

**Status:** 📋 Planning Stage

**Current:**
- Local development (SQLite, Flask dev server)
- No production deployment

**Production Requirements:**
- Database: PostgreSQL or MySQL
- Application server: Gunicorn or uWSGI
- Web server: Nginx reverse proxy
- Containerization: Docker
- Orchestration: Docker Compose or Kubernetes
- CI/CD: GitHub Actions or GitLab CI
- Hosting: AWS, Azure, or Google Cloud
- Domain and SSL certificate
- Backup strategy
- Monitoring and logging (e.g., Sentry, CloudWatch)
- Scaling plan (load balancer, read replicas)

**Deployment Phases:**
1. Containerize application
2. Set up production database
3. Configure environment variables
4. Deploy to staging environment
5. User acceptance testing
6. Deploy to production
7. Set up monitoring and alerts
8. Create backup and disaster recovery plan

---

### 10. Mobile Optimization

**Status:** 📋 Future

**Current:**
- Desktop web interface only
- Basic HTML forms, not responsive

**Requirements:**
- Responsive design (Bootstrap or Tailwind CSS)
- Touch-friendly buttons and forms
- Optimized for 4-7" screens
- Progressive Web App (PWA) capability
- Offline mode for call-out submission
- Push notifications
- Native mobile app (React Native or Flutter) - Phase 2

---

### 11. Integrations

**Status:** 📋 Future

**Potential Integrations:**

**HR Systems:**
- Import employee roster automatically
- Sync terminations and transfers
- Export CAFs to personnel files

**Time & Attendance:**
- Import shift schedules
- Auto-populate shift times in call-outs
- Link call-outs to timecard adjustments

**Payroll:**
- Track unpaid leave from unexcused call-outs
- Export for payroll deductions

**Single Sign-On (SSO):**
- Azure AD, Okta, Google Workspace
- Eliminate PIN management
- Centralized user provisioning

**Communication Platforms:**
- Slack/Teams integration for notifications
- Webhook support for custom integrations

**Reward Programs:**
- Link recognitions to gift card systems
- Track award fulfillment
- Budget management for rewards

---

## Implementation Roadmap

### Phase 1: Core Stabilization (Current → 4 weeks)

**Focus:** Fix critical issues, complete core workflows

**Deliverables:**
- ✅ All four paths fully functional
- ✅ Basic dashboards operational
- 📋 Actual signature capture implemented
- 📋 Impact dashboard for all roles
- 📋 Enhanced infraction workflow (dismiss, resolve)
- 📋 Notification system (email minimum)
- 📋 User profile management
- 📋 Security hardening (password hashing, input validation)
- 📋 Comprehensive testing

**Success Criteria:**
- All supervisors can create, sign, and distribute CAFs
- All teammates can submit call-outs and sign CAFs
- All leads can report infractions and recognitions
- Email notifications working for critical actions
- System stable with no data loss

---

### Phase 2: Pattern Intelligence (Weeks 5-8)

**Focus:** Add pattern recognition and analytics

**Deliverables:**
- Pattern detection logic
- PatternAlert table and workflow
- Alert dashboard for supervisors
- Automated pattern emails
- Basic analytics dashboards
- Enhanced reporting (attendance, infractions, recognition trends)
- CSV export functionality

**Success Criteria:**
- Supervisors receive automatic alerts for attendance patterns
- Pattern detection accuracy >90%
- Reports accessible to supervisors and HR
- Export capability functional

---

### Phase 3: Mobile & UX (Weeks 9-12)

**Focus:** Responsive design, mobile optimization, UX improvements

**Deliverables:**
- Responsive CSS framework (Tailwind or Bootstrap)
- Mobile-optimized forms and dashboards
- Progressive Web App (PWA) setup
- Offline call-out submission
- Touch-friendly UI
- Improved navigation and search
- Accessibility compliance (WCAG 2.1)

**Success Criteria:**
- Application usable on phones and tablets
- Offline mode functional for call-outs
- All pages load <3 seconds on mobile
- Accessibility audit passed

---

### Phase 4: Integrations & Advanced Features (Weeks 13-16)

**Focus:** External integrations, advanced workflows

**Deliverables:**
- SSO integration (Azure AD or Okta)
- HR system integration (employee import)
- Time & Attendance integration (shift schedules)
- Witness signature workflow
- CAF refusal workflow
- Attach documents to infractions/CAFs
- Advanced pattern analysis (positive patterns)
- Recognition reward program integration

**Success Criteria:**
- SSO authentication working
- Employee roster auto-syncs
- Shift data auto-populates
- Witness and refusal workflows complete

---

### Phase 5: Production Deployment (Weeks 17-20)

**Focus:** Deploy to production, train users, monitor performance

**Deliverables:**
- Production environment setup (Docker, PostgreSQL, Nginx)
- CI/CD pipeline (automated testing and deployment)
- Monitoring and logging (Sentry, CloudWatch)
- Backup and disaster recovery
- User training materials
- Administrator documentation
- Production launch
- Post-launch support

**Success Criteria:**
- Application live in production
- Uptime >99%
- All users trained
- Backup tested and verified
- Incident response plan in place

---

### Phase 6: Optimization & Scale (Months 6+)

**Focus:** Performance tuning, feature enhancements, scaling

**Deliverables:**
- Performance optimization (database indexing, caching)
- Load testing and capacity planning
- Additional analytics and reports
- Native mobile app (React Native)
- Advanced AI/ML features (predictive analytics)
- Multi-tenant support (if expanding to other companies)
- API for third-party integrations

**Success Criteria:**
- Response time <500ms for all pages
- Support for 1000+ concurrent users
- Native mobile app in app stores
- API documentation published

---

## Success Metrics

### Operational Efficiency
- **Baseline:** 2-3 hours/week per supervisor on manual CAFs
- **Target:** <30 minutes/week with TAG (80% reduction)
- **Metric:** Time from violation to signed CAF

### Documentation Compliance
- **Baseline:** 60% of violations formally documented
- **Target:** 95%+ documentation rate
- **Metric:** Violations observed vs CAFs created

### Response Time
- **Baseline:** 3-7 days for CAF completion
- **Target:** <48 hours from creation to associate signature
- **Metric:** Average time in PENDING_ASSOCIATE_SIG status

### Pattern Detection
- **Baseline:** Manual review, often missed
- **Target:** 100% of pattern thresholds detected within 24 hours
- **Metric:** Alerts generated vs manual review audit

### Recognition Frequency
- **Baseline:** Sporadic, undocumented
- **Target:** 1+ recognition per employee per quarter
- **Metric:** Recognitions submitted per employee

### User Adoption
- **Target:** 90%+ of call-outs submitted via TAG (not text)
- **Metric:** Call-outs in system vs reported absences

### Signature Completion
- **Target:** 90%+ of CAFs signed within 7 days
- **Metric:** Completion rate, refusal rate

### Data Quality
- **Target:** <5% data entry errors
- **Metric:** Audit of policy text accuracy, field completeness

---

## Appendices

### Appendix A: Glossary

| Term | Definition |
|------|------------|
| CAF | Corrective Action Form |
| Impact | Call-out or schedule impact event |
| Pattern Alert | System-generated warning based on attendance/infraction thresholds |
| Progressive Discipline | Escalating severity of corrective actions for repeated violations |
| Reclassification | Converting a call-out from excused to unexcused and creating CAF |
| TAG | Team Accountability Gateway |
| UTC | Coordinated Universal Time |

---

### Appendix B: Current File Structure

```
TAG_App/
├── instance/
│   └── tag.db                    # SQLite database
├── templates/
│   ├── layout.html               # Base template
│   ├── index.html                # Home page with dropdown menu
│   ├── login.html                # Login page
│   ├── callout_new.html          # Submit call-out (self or for others)
│   ├── callout_edit.html         # Edit pending call-out
│   ├── my_callouts.html          # My call-out history
│   ├── infraction_new.html       # Report infraction
│   ├── infraction_from_callout.html # Create infraction from call-out
│   ├── my_infractions.html       # My infractions view
│   ├── pending_infractions.html  # Supervisor pending infractions
│   ├── infraction_dashboard.html # Supervisor infraction dashboard
│   ├── caf_new.html              # Create CAF
│   ├── caf_view.html             # View CAF detail
│   ├── my_cafs.html              # My CAFs view
│   ├── caf_dashboard.html        # Supervisor CAF dashboard
│   ├── recognition_new.html      # Submit recognition
│   ├── my_recognitions.html      # My recognitions view
│   └── recognition_dashboard.html # Supervisor recognition dashboard (pending approvals)
├── app.py                        # Main application entry point
├── models.py                     # Database models (Employee, CallOut, Infraction, CorrectiveAction, Recognition)
├── auth.py                       # Authentication blueprint (login, logout, decorators)
├── callouts.py                   # Call-out blueprint (submit, view, edit, review)
├── infractions.py                # Infraction blueprint (report, view, dashboard)
├── cafs.py                       # CAF blueprint (create, view, sign, PDF)
├── recognitions.py               # Recognition blueprint (submit, approve, view)
├── requirements.txt              # Python dependencies
└── add_recognition_pending.py   # Migration script for recognition.pending column
```

---

### Appendix C: Environment Variables and Configuration

**Required for Production:**
- `SECRET_KEY`: Strong random key for session encryption
- `DATABASE_URL`: PostgreSQL connection string
- `EMAIL_SERVICE_API_KEY`: For notification emails
- `SMS_SERVICE_API_KEY`: For SMS notifications (optional)
- `DOMAIN`: Application domain for email links
- `SSL_CERT_PATH`: Path to SSL certificate
- `SSL_KEY_PATH`: Path to SSL private key

**Configuration Settings:**
- `DEBUG`: False in production
- `SESSION_TIMEOUT`: 30 minutes
- `MAX_LOGIN_ATTEMPTS`: 5
- `SIGNATURE_EXPIRY_DAYS`: 7
- `PATTERN_DETECTION_INTERVAL`: Daily at 2 AM
- `NOTIFICATION_BATCH_SIZE`: 100 emails per batch

---

### Appendix D: Database Migration History

**Initial Schema (v1.0):**
- Employee, CallOut, Infraction, CorrectiveAction, Recognition tables
- All enums defined
- Basic relationships

**Migration 001: Add recognition.pending:**
- Added `pending` Boolean column to Recognition
- Default True for lead submissions, False for supervisor submissions
- Supports approval workflow

**Future Migrations Needed:**
- Add signature image fields (supervisor_signature, associate_signature)
- Add PatternAlert table
- Add Version table for edit history
- Add Notification table
- Add AuditLog table

---

### Appendix E: Known Issues and Technical Debt

**Current Issues:**
1. PIN stored as plaintext (needs hashing)
2. No signature images, just timestamps
3. No input sanitization/validation
4. No rate limiting on login
5. No session timeout
6. SQLite for production (needs PostgreSQL)
7. No CSRF protection
8. No email notifications
9. Pattern detection not implemented
10. Versioning incomplete (call-outs only)

**Technical Debt:**
- Inconsistent error handling
- No comprehensive logging
- Limited test coverage
- No API documentation
- Duplicate code in blueprints
- Frontend could benefit from modern JS framework
- No caching layer

---

### Appendix F: Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2024 | T | Initial CAF-focused PRD |
| 2.0 | Dec 2024 | T | Added attendance tracking and call-outs |
| 3.0 | Dec 2024 | T | Added positive recognition path |
| 4.0 | Dec 30, 2025 | T & Claude | Unified complete PRD with current implementation status and all future features |

---

## Conclusion

This PRD represents the complete vision for the Team Accountability Gateway (TAG), combining:

✅ **Implemented Core Features:**
- Four operational paths (Impact, Infraction, CAF, Recognition)
- Role-based access control
- Electronic signature workflows
- Pre-populated CAFs from infractions and call-outs
- Editability for pending impacts
- Approval workflow for recognition
- Dashboard views for supervisors
- PDF export for completed CAFs
- UTC timestamp tracking
- Report for others with method tracking

📋 **Critical Next Steps:**
1. Actual signature capture (replace button with canvas)
2. Comprehensive Impact Dashboard (for all roles)
3. Notification system (email minimum)
4. Pattern recognition and alerts
5. Security hardening (password hashing, input validation)
6. Profile management
7. Production deployment preparation

🚀 **Future Enhancements:**
- Advanced analytics and reporting
- Mobile optimization and PWA
- External integrations (SSO, HR, Time & Attendance)
- Native mobile app
- AI-powered pattern prediction
- Multi-tenant support

This document serves as the source of truth for all TAG development. All features, specifications, and requirements should reference this document. Updates require version increment and change log entry.

**Contact:** T, Supervisor, Retail Odyssey

---

*End of Document*
