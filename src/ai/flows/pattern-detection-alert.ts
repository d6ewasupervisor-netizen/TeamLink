'use server';

/**
 * @fileOverview This flow detects patterns of impacts or infractions for a given user and creates a notification for the supervisor.
 *
 * - detectAndAlertPattern - A function that detects patterns and creates an alert.
 * - PatternDetectionInput - The input type for the detectAndAlertPattern function.
 * - PatternDetectionOutput - The return type for the detectAndAlertPattern function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PatternDetectionInputSchema = z.object({
  userId: z.string().describe('The ID of the user to check for patterns.'),
  userName: z.string().describe('The name of the user to check for patterns.'),
  supervisorId: z.string().describe('The ID of the supervisor to notify.'),
  impactCount: z.number().describe('The number of impacts for the user.'),
  infractionCount: z.number().describe('The number of infractions for the user.'),
});
export type PatternDetectionInput = z.infer<typeof PatternDetectionInputSchema>;

const PatternDetectionOutputSchema = z.object({
  notificationCreated: z.boolean().describe('Whether a notification was created for the supervisor.'),
});
export type PatternDetectionOutput = z.infer<typeof PatternDetectionOutputSchema>;

export async function detectAndAlertPattern(input: PatternDetectionInput): Promise<PatternDetectionOutput> {
  return detectAndAlertPatternFlow(input);
}

const patternDetectionPrompt = ai.definePrompt({
  name: 'patternDetectionPrompt',
  input: {schema: PatternDetectionInputSchema},
  prompt: `You are an AI assistant that helps detect patterns of concerning behavior in employees.

  You will receive the number of impacts and infractions for a user, and you will determine if a notification should be sent to the supervisor.

  Specifically, if the impactCount is greater than or equal to 3, or the infractionCount is greater than or equal to 2, you should recommend sending a notification to the supervisor.

  Return a boolean value indicating whether a notification should be created.

  User ID: {{{userId}}}
  User Name: {{{userName}}}
  Supervisor ID: {{{supervisorId}}}
  Impact Count: {{{impactCount}}}
  Infraction Count: {{{infractionCount}}}`,
  output: {schema: PatternDetectionOutputSchema},
});

const detectAndAlertPatternFlow = ai.defineFlow(
  {
    name: 'detectAndAlertPatternFlow',
    inputSchema: PatternDetectionInputSchema,
    outputSchema: PatternDetectionOutputSchema,
  },
  async input => {
    const {output} = await patternDetectionPrompt(input);
    return output!;
  }
);
