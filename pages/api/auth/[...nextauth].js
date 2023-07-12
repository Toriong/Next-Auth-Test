import { authOptions } from '@/backend/auth/authOptions';
import NextAuth from 'next-auth/next';

export default NextAuth(authOptions);
