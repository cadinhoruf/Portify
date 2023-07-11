import { z } from "zod";

export const EditProfileFormSchema = z.object({
  color: z.string()
    .nonempty("O modo de cor é obrigatório."),
  position: z.string()
    .nonempty("O cargo é obrigatório.")
    .regex(/[A-Z]/, "O cargo deve conter pelo menos uma letra maiúscula.")
    .min(3, "O cargo deve ter no mínimo 3 caracteres."),
  description: z.string()
    .nonempty("A descrição é obrigatória.")
    .min(10, "A descrição deve ter no mínimo 10 caracteres.")
    .max(100, "A descrição deve ter no máximo 100 caracteres.")
});

export type TEditProfileForm = z.infer<typeof EditProfileFormSchema>;