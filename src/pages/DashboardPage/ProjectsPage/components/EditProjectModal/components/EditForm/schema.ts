import { z } from "zod";

export const EditFormSchema = z.object({
  name: z
    .string()
    .nonempty("O nome do projeto é obrigatório.")
    .min(3, "O nome do projeto deve ter no mínimo 3 caracteres."),
  description: z
    .string()
    .nonempty("A descrição do projeto é obrigatória.")
    .min(10, "A descrição deve ter no mínimo 10 caracteres.")
    .max(100, "A descrição deve ter no máximo 100 caracteres."),
  repository: z.string().nonempty("O repositório é obrigatório."),
  link: z.string().optional(),
  coverUrl: z.string().optional(),
});

export type TEditForm = z.infer<typeof EditFormSchema>;
