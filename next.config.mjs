const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage = Boolean(repoName) && !repoName.endsWith(".github.io");
const basePath = process.env.GITHUB_ACTIONS === "true" && isProjectPage ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
