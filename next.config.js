/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'avatars.githubusercontent.com',
      'avatar.vercel.sh',
      'tailwindui.com',
      'images.unsplash.com'
    ]
  }
};

module.exports = nextConfig;