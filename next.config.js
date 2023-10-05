/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://nextjs-getting-started-1gz8ac5zh-jtechdev.vercel.app/:path*',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.dummyjson.com',
                port: '',
                pathname: '/data/**',
            },
        ],
    },
};

module.exports = nextConfig;
