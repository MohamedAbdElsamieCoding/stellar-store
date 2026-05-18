import type { Session, User } from "@supabase/supabase-js";

export interface AuthState {
  user: User | null;
  session: Session | null;

  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;

  logout: () => void;
}
