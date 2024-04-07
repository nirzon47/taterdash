/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'unwieldy-direction-production.up.railway.app',
				port: '',
			},
		],
	},
}

export default nextConfig
