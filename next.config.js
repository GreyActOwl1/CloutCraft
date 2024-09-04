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
        ]
    },
    env: {
        GOOGLE_AI_API_KEY: process.env.GOOGLE_AI_API_KEY,
    }
}

module.exports = nextConfig
