import z from "zod";

const envSchema = z.object({
    MARIADB_PASSWORD: z.string(),
    MARIADB_ROOT_PASSWORD: z.string(),
    MARIADB_DATABASE: z.string(),
    MARIADB_HOST: z.string(),
    MARIADB_PORT: z.string().transform((value) => parseInt(value, 10)),
    APP_PORT: z.string().transform((value) => parseInt(value, 10)),
});

const enviroments = envSchema.parse(process.env);

export default enviroments;