export const config = {
  rapidApi: {
    key: process.env.NEXT_PUBLIC_RAPIDAPI_KEY ?? "",
    host: process.env.NEXT_PUBLIC_RAPIDAPI_HOST ?? "",
    url: process.env.NEXT_PUBLIC_RAPIDAPI_URL ?? "",
  },
} as const;

// Only validate in production
if (process.env.NODE_ENV === "production") {
  const requiredEnvVars = [
    "NEXT_PUBLIC_RAPIDAPI_KEY",
    "NEXT_PUBLIC_RAPIDAPI_HOST",
    "NEXT_PUBLIC_RAPIDAPI_URL",
  ] as const;

  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  });
}
