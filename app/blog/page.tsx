import { siteConfig } from '@/site.config';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { formatDate } from '@/lib/formatDate';


export async function getPosts() {
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${siteConfig.blogTableId}`,
  {next:{revalidate:60}});
  const posts = await res.json();
  return posts;
}



export default async function Blog() {

  const posts = await getPosts();

  const descLength: number = 30;
  const titleLength: number = 40;

  return (
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <div className="text-4xl font-bold">Latest Updates</div>

      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3">
      {posts && posts.length > 0 ? (
        
        posts.filter((post:any)=>{
          return (post.published ? post : null)
        }).reverse().map((post: any) => {
        

          let hiddenDescText: string = '';

          if (post.description.length > descLength) {
            post.description =
              post.description.substring(0, descLength - 3) + '...';
          } else {
            hiddenDescText = '* '.repeat(
              (descLength - post.description.length) / 2
            );
          }

          let hiddenTitleText: string = '';

          if (post.title.length > titleLength) {
            post.title = post.title.substring(0, titleLength - 3) + '...';
          } else {
            hiddenTitleText = '* '.repeat(
              (titleLength - post.title.length) / 2
            );
          }

          
          return(

          <div className="mt-c5" key={post.id}>
              <Link
              href="/blog/[slug]" 
              as={`/blog/${post.slug}`}  
              passHref>
                <Card className="flex h-fit w-c80 flex-col bg-card bg-opacity-70 shadow-md duration-300 ease-in-out hover:scale-105 hover:bg-opacity-100 hover:shadow-lg  md:w-c40 xl:w-c25">
                  <CardHeader>
                    <div className="text-md font-light dark:font-extralight">
                      {formatDate(post.date)}
                    </div>
                    <CardTitle className="flex flex-col justify-center">
                      <div className="flex text-2xl font-bold">
                        {post.title}
                        <span className="invisible">{hiddenTitleText}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-fit overflow-clip text-sm font-medium dark:font-light">
                      {post.description}{' '}
                      <span className="invisible">{hiddenDescText}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="text-md font-medium dark:font-light">
                      {post.author}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </div>
        )})
      ) : (
        <p>No posts available.</p>
      )}
    </div>

    </div>
  );
};


