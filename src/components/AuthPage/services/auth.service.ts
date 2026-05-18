import { supabase } from "../../../config/supabase";

export const register = async (email: string, password: string) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

export const login = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const signInWithGoogle = async () => {
  return await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173",
    },
  });
};

export const signInWithGithub = async () => {
  return await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:5173",
    },
  });
};
