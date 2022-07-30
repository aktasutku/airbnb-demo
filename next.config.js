/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['links.papareact.com'],
  },
  env:{
    mapbox_key:'pk.eyJ1IjoiYWt0YXN1dGt1IiwiYSI6ImNsNjVnb2hjeDMwanozY28xNGNlMmVsMHoifQ.B5lpG9Uh8SMsJ11hKAIvDQ'
  }
}

module.exports = nextConfig
