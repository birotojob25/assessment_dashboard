import { LoginSchema } from "@/validations/auth.validation";
import type { ReactNode } from "react";
import { InferType } from "yup";

export type LoginPayload = InferType<typeof LoginSchema>;

export interface UserCredentials {
  email: string;
  password: string;
}

export interface SignUpData extends UserCredentials {
  firstName: string;
  lastName: string;
  learningTrack: string;
  agreeTerms: boolean;
}

export interface LoginData extends UserCredentials {
  rememberMe: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export interface FormTouched {
  [key: string]: boolean;
}

export interface AuthComponentProps {
  children: ReactNode;
}

export interface SignInResult {
  error: string | null;
  status: number;
  ok: boolean;
  url: string | null;
}

export type AuthSubmitHandler<T> = (
  values: T,
  actions: { setSubmitting: (isSubmitting: boolean) => void }
) => Promise<void>;
