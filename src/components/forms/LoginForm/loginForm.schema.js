import { z } from "zod"


const loginFormSchema = z.object({
    email: z.string().min(1, "o e-mail é obrigatório"),
    password: z.string().min(1, "A senha é obrigatória"),
});

export { loginFormSchema };