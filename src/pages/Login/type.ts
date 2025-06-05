import type { IObjectLiteral } from '@/types/type.ts';

export interface LoginFormProps {
  users?: any;
  signUp: (formData?: any) => void;
  signIn: (formData?: any) => void;
}
