import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string()
    .nonempty("O e-mail é obrigatório.")
    .email("O e-mail fornecido é inválido."),
  password: z.string()
    .nonempty("A senha é obrigatória.")
    .min(8, "A senha deve ter no mínimo 8 caracteres.")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número.")
    .regex(/[^a-zA-Z0-9]/, "A senha deve conter pelo menos um caractere especial.")
});

export type TLoginForm = z.infer<typeof loginFormSchema>;