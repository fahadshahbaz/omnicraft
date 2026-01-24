import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

/**
 * During build time (prerendering), environment variables might not be available.
 * We initialize the client only if the credentials exist to prevent build-time crashes.
 * If missing, we export a mock object that prevents the app from breaking during the build process.
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({
          select: () => ({
            order: () => Promise.resolve({ data: [], error: null }),
          }),
        }),
      };

if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV === "development") {
    console.warn(
      "Supabase credentials not found. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY are set in your .env.local file.",
    );
  }
}
