import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient
}

const adapter = new PrismaMariaDb({
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,

    connectTimeout: 10000,
    acquireTimeout: 20000,
    connectionLimit: 5,
})

export const prisma =
globalForPrisma.prisma ??
new PrismaClient({
    adapter,
})

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma
}
