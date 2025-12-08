import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
       protocol: 'https',
        hostname: 'picsum.dev',
        port: '',
        pathname: '/**'
      },
       {
       protocol: 'https',
        hostname: 'watchandlearn.scholastic.com',
        port: '',
        pathname: '/**'
      },
      {
       protocol: 'https',
        hostname: 'guangzhouflowershop.com',
        port: '',
        pathname: '/**'
      },
      {
       protocol: 'https',
        hostname: 'dianova.in',
        port: '',
        pathname: '/**'
      },
      {
       protocol: 'https',
        hostname: 'thehansindia.com',
        port: '',
        pathname: '/**'
      },
      {
       protocol: 'https',
        hostname: 'fiverr-res.cloudinary.com',
        port: '',
        pathname: '/**'
      },
      {
       protocol: 'https',
        hostname: 'gorevity.com',
        port: '',
        pathname: '/**'
      },
      {
       protocol: 'https',
       hostname: 'acropolium.com',
       port: '',
       pathname: '/**'
      },
      {
       protocol: 'https',
       hostname: 'glinfotech.net',
       port: '',
       pathname: '/**'
      },
    ]
  },
};

export default nextConfig;


//acropolium.com