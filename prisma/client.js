

import { PrismaClient } from '@prisma/client';

/** @type {import('@prisma/client').PrismaClient} */


let prisma;

// check if PrismaClient is not on `globalThis` object
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!globalThis.prisma) {
        globalThis.prisma = new PrismaClient();
    }
    prisma = globalThis.prisma;
}

export default prisma;