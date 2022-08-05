/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    AZURE_AD_B2C_CLIENT_ID: process.env.AZURE_AD_B2C_CLIENT_ID,
    AZURE_AD_B2C_CLIENT_SECRET: process.env.AZURE_AD_B2C_CLIENT_SECRET,
    AZURE_AD_B2C_TENANT_NAME: process.env.AZURE_AD_B2C_TENANT_NAME,
    AUTH_TENANT_GUID: process.env.AUTH_TENANT_GUID,
    JWT_SECRET: process.env.JWT_SECRET,
    AZURE_AD_B2C_PRIMARY_USER_FLOW: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
  },
};
