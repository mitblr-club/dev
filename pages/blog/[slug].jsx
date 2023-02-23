import { NotionRenderer } from "@/components/NotionRenderer";
import { getAllPosts } from "./";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/site.config";
import "prismjs/themes/prism-tomorrow.css";

export async function getStaticProps({ params: { slug } }) {
	const posts = await getAllPosts(siteConfig.blogTableId);
	const post = posts.find((t) => t.slug === slug);
	const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json()); 
	return {
		props: {
			blocks,
			post,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return {
		paths: posts.map((row) => `/blog/${row.slug}`),
		fallback: true,
	};
}

export default function BlogPost({ blocks, post }) {
	return(
		<div>
			<h1 className="notion notion-title">{post.title}</h1>
			<p className="notion">{formatDate(post.date)}</p>
			<NotionRenderer blockMap={blocks} />
		</div>
	)
};