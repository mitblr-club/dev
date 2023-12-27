import { siteConfig } from '@/site.config';
import Link from 'next/link';


export async function getPosts() {
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${siteConfig.blogTableId}`,
  {next:{revalidate:60}});
  const posts = await res.json();
  return posts;
}



export default async function Blog() {

  const posts = await getPosts();

  return (
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <div className="text-4xl font-bold">Latest Updates</div>

      <div>
      {posts && posts.length > 0 ? (
        posts.map((post: any) => (
          <Link
          href="/blog/[slug]" 
					as={`/blog/${post.slug}`} 
					key={post.title} 
					passHref>
            <div>{post.title}</div>
          </Link>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>

    </div>
  );
};


