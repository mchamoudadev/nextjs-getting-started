import { z } from 'zod';

const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
});

export default userSchema;