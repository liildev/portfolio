import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
    turbopackFileSystemCacheForDev: false,
    optimizePackageImports: [
			'@phosphor-icons/react',
			'dayjs',
      'framer-motion',
    ],
  },
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	turbopack: {
    root: path.resolve(__dirname),
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	images: {
		minimumCacheTTL: 86400,
		deviceSizes: [320, 420, 768, 1024, 1200],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		formats: ['image/webp', 'image/avif'],
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '**',
			},
		],
	},
	async redirects() {
		return [
			// Redirect non-www to www in production
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'liildev.uz',
					},
				],
				destination: 'https://www.liildev.uz/:path*',
				permanent: true,
			},
		];
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
		];
	},
	webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true
          }
        }
      ]
    });
    return config;
  },
};

export default nextConfig;
