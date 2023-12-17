import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NOTION_AUTH_TOKEN: z.string().min(1),
    NOTION_BLOG_DATABASE_ID: z.string().min(1),
    NOTION_EVENTS_DATABASE_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  },
  runtimeEnv: {
    NOTION_AUTH_TOKEN: process.env.NOTION_AUTH_TOKEN,
    NOTION_BLOG_DATABASE_ID: process.env.NOTION_BLOG_DATABASE_ID,
    NOTION_EVENTS_DATABASE_ID: process.env.NOTION_EVENTS_DATABASE_ID,
  },
});
