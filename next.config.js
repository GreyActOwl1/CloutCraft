/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/login',
                destination: '/api/auth/login',
                permanent: true,
            },
            {
                source: '/signup',
                destination: '/api/auth/register',
                permanent: true,
            },
            {
                source: '/logout',
                destination: '/api/auth/logout',
                permanent: true,
            },
            {
                source: '/dashboard',
                destination: '/',
                permanent: false,
            }
        ]
    },
    env: {
        GOOGLE_AI_API_KEY: process.env.GOOGLE_AI_API_KEY,
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }
}

module.exports = nextConfig
