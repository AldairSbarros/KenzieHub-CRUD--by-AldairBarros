import { z } from "zod";

const registerFormSchema = z
.object({
    name: z.string().min(4, "O nome é obrigatório, com pelo menos 4 caracter !"),
    email: z
    .string()
    .email("Forneça um e-mail válido ")
    .min(1, "O e-mail é obrigatório ! "),
    password: z
    .string()
    .min(8, "São necessários pelo menos 8 caracteres !")
    .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula !")
    .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula !")
    .regex(/[0-9]+/, "É necessário conter pelo menos um número !"),
    confirmPassword: z.string().min(8, "Confirmar a senha é obrigatório !"),
    bio: z.string(5, "Digite uma Frase"),
    contact: z.string(5, "Digite um contato"),
    course_module: z.string(5, "Escolha uma opção"),



})
.refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas que você digitou, não são identicas !",
    path: ["confirmPassword"],
});

export { registerFormSchema };