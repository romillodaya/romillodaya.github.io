import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repositoryName.endsWith('.github.io');
const basePath = isGitHubPages && repositoryName && !isUserSite ? `/${repositoryName}` : '';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      trailingSlash: true,
      images: { unoptimized: true },
      basePath,
      assetPrefix: basePath,
    }
  : {};

nextConfig.env = { ...nextConfig.env, NEXT_PUBLIC_BASE_PATH: basePath };

export default nextConfig;
