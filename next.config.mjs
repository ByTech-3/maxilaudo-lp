/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/maxilaudo",
        destination: "/laudo-cautelar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
