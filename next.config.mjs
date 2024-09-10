/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
          protocol: 'https',
          hostname: 'showcase.empower.net',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'tds-images-bn.thedailystar.net',
          port: '',
          pathname: '/**',
        },
    ],
  },
};


export default nextConfig;
