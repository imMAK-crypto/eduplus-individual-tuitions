// Shared admin form-state type. Kept out of the "use server" actions file
// because a 'use server' module may only export async functions.
export type FormState = { error?: string; ok?: boolean; savedAt?: number; mode?: string; url?: string };
