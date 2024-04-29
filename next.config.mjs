/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "portfolio-v2-beta-gilt.vercel.app"
            }
        ]
    }
};

export default nextConfig;
