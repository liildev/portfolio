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
