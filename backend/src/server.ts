import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify()

app.register(cors, {
    origin: '*'
})

app.listen({ port: 3333 }).then(() => console.log(`Servidor escutando na porta 3333`))