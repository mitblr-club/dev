import { env } from '@/env.mjs';
import { Client } from '@notionhq/client';
import { defineDatabase, makeSource } from 'contentlayer-source-notion';

const client = new Client({ auth: process.env.NOTION_AUTH_TOKEN });

export const Post = defineDatabase(() => ({
  name: 'Post',
  databaseId: env.NOTION_BLOG_DATABASE_ID,
  query: {
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
  },
  properties: {
    date: {
      name: 'Created',
    },
    tags: {
      name: 'Tags',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._id}`,
    },
  },
}));

export default makeSource({
  client,
  databaseTypes: [],
});
