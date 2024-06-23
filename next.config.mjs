/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'up2client.com',
            }
        ],
    }
};

export default nextConfig;
