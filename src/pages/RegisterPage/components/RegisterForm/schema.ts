import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string()
        .nonempty("O nome é obrigatório.")
        .min(3, "O nome deve ter no mínimo 3 caracteres.")
        .regex(/[A-Z]/, "O nome deve conter pelo menos uma letra maiúscula.")
        .regex(/\s/, "É necessário nome e sobrenome"),
    email: z.string()
        .nonempty("O e-mail é obrigatório.")
        .email("O e-mail fornecido é inválido."),
    password: z.string()
        .nonempty("A senha é obrigatória.")
        .min(8, "A senha deve ter no mínimo 8 caracteres.")
        .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
        .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
        .regex(/[0-9]/, "A senha deve conter pelo menos um número.")
        .regex(/[^a-zA-Z0-9]/, "A senha deve conter pelo menos um caractere especial."),
    confirmPassword: z.string()
        .nonempty("A confirmação da senha é obrigatória.")
        .optional(),
})
.refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
})

export type TRegisterForm = z.infer<typeof registerFormSchema>;