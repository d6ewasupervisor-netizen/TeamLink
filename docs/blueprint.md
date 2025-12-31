# **App Name**: TAG

## Core Features:

- Impact Reporting: Users can report impacts (call-outs) with details and reasons, saving the information to Firestore.
- Recognition Submission: Users can submit recognitions for team members, categorized by quality, customer service, teamwork, or safety. Supervisors will be able to see the recognition in order to approve them
- Corrective Action Form (CAF): Supervisors can create and manage corrective action forms, including details, required improvements, and digital signatures stored in Firebase Storage, saving CAF data in Firestore.
- Signature Capture: Capture digital signatures using a canvas element and save them to Firebase Storage, linking the URLs to the corresponding Firestore documents.
- Pattern Detection Tool: A tool which automatically detects patterns in impacts and infractions, creating notifications for supervisors when thresholds are met, such as 3 unexcused impacts in 30 days.
- Role-Based Access Control: Implement role-based access control using Firebase Auth custom claims to restrict access to features and data based on user roles (teammate, lead, supervisor, HR, admin).
- Dashboard Views: Provide role-specific dashboard views displaying relevant information such as pending impacts, recognitions, and corrective actions.

## Style Guidelines:

- Primary color: Soft blue (#64B5F6) to convey trust and reliability.
- Background color: Light gray (#F5F5F5) to ensure a clean, modern look.
- Accent color: Warm orange (#FFB74D) to highlight important actions and notifications.
- Body font: 'PT Sans', a humanist sans-serif font, for a blend of modernity and readability.
- Headline font: 'Playfair', a modern serif similar to Didot, elegant and fashionable feel. For longer text use 'PT Sans' as the body.
- Use clean and modern icons to represent different actions and categories (e.g., impacts, recognitions, CAF).  Favor a consistent style, and line art.
- Employ a responsive grid layout to adapt to various screen sizes, ensuring a seamless user experience across devices.