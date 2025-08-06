/** @type {import('next').NextConfig} */
const nextConfig = {
    crossOrigin: 'anonymous',
    async redirects() {
        return [
            {
                source: '/admin',
                destination: 'https://api.localhost:3000',
                permanent: true,
            },
        ];
    },
    env: {
        apiUrl: "https://api.localhost:3000",
        url: "https://localhost:3000",
      },
    //   images: {
    //     domains: ["YOUR_URL.com"],
    //   },
    images: {
        remotePatterns: [
            {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            // pathname: '/account123/**',
            },
            {
		protocol: 'http',
		hostname: '88.218.66.251',
		port: '1337'
	    },
            {
                protocol: 'https',
                hostname: 'dummyimage.com'
            }
        ],
    },
    // reactStrictMode: false,
}

module.exports = nextConfig

