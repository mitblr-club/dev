import { NotionRenderer } from "react-notion";

import { getPosts } from "../page";

import "./styles.css"



async function getBlocks({ params: { slug } }: { params: { slug: any } }) {
  // Get all posts again
  const posts = await getPosts();

  // Find the current blogpost by slug
  const post = posts.find((t:any) => t.slug === slug);

  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`);
  const blocks = await res.json();
  
  return {
    post,
    blocks,
  }
}

async function generateStaticParams(){
  const posts = await getPosts();
  const paths = posts.map((row:any) => `/${row.slug}`);
  return paths;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const paths = await generateStaticParams();

  const {slug} = params;

  const { post, blocks } = await getBlocks({ params: { slug: slug } });

  return(
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <div className="text-4xl font-bold">{post.title}</div>
      <div>
      <NotionRenderer blockMap={blocks} />
      </div>
    </div>
  )
};