/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'taterdash.onrender.com',
				port: '',
			},
		],
	},
}

export default nextConfig
