import { NotionRenderer } from 'react-notion';

import '@/styles/styles.css';

import { getEvents } from '../page';

async function getBlocks({ params: { slug } }: { params: { slug: any } }) {
  const events = await getEvents();

  const event = events.find((t: any) => t.slug === slug);

  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${event.id}`);
  const blocks = await res.json();

  return {
    event,
    blocks,
  };
}

async function generateStaticParams() {
  const events = await getEvents();
  const paths = events.map((row: any) => `/${row.slug}`);
  return paths;
}

export default async function EventPost({
  params,
}: {
  params: { slug: string };
}) {
  const paths = await generateStaticParams();

  const { slug } = params;

  const { event, blocks } = await getBlocks({ params: { slug: slug } });

  return (
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <div className="text-4xl font-bold">{event.title}</div>
      <div>
        <NotionRenderer blockMap={blocks} />
      </div>
    </div>
  );
}
