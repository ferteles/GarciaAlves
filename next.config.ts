import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import { fileURLToPath } from "url";

import path from "path";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: dirname,
};

export default withPayload(nextConfig);
