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
    <div>
    <NotionRenderer blockMap={blocks} />
  </div>
  )
};