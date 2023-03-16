/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "example.com",
    //     port: "",
    //     pathname: "/account123/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
