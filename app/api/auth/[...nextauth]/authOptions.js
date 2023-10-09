import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import prisma from '../../../../prisma/client';

import bcrypt from 'bcrypt';

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Enter your email address'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
            },

            async authorize(credentials, req) {

                if (!credentials.email || !credentials.password) return null;

                const user = await prisma.user.findUnique({ where: { email: credentials.email } });

                if (!user) return null;

                const password = await bcrypt.compare(credentials.password, user.hashedPassword);

                if (!password) return null;
                return user;
            }

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt"
    },
    adapter: PrismaAdapter(prisma),
};