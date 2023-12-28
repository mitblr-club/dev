'use client';

import Autoplay from 'embla-carousel-autoplay';

import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function CurrentEvents({ events }: any) {
  const currentEvents = events.filter((event: any) =>
    event.joinable ? event : null
  );

  if (currentEvents.length === 0) {
    return (
      <div className="mt-c15 md:mt-c5 xl:mt-c3">
        <div className="text-center text-xl">
          No Events Available. Please Check Again Later
        </div>
      </div>
    );
  }

  const targetLength: number = 100;

  return (
    <div className="mt-c15 md:mt-c5 xl:mt-c3">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="h-fit bg-opacity-70 shadow-md duration-300 ease-in-out hover:scale-110 hover:bg-opacity-100 hover:shadow-lg"
      >
        <CarouselContent>
          {currentEvents.map((event: any, index: any) => {
            return (
              <CarouselItem key={index}>
                <Link
                  href="/events/[slug]"
                  as={`/events/${event.slug}`}
                  passHref
                >
                  <Card className="h-fit">
                    <CardHeader className="text-center">
                      <div className="flex flex-row justify-between">
                        <div className="text-sm font-light dark:font-extralight">
                          {event.date}
                        </div>
                        <div className="rounded-2xl bg-primary p-2 text-right">
                          {index + 1}/{currentEvents.length}
                        </div>
                      </div>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-3">
                        <div className="text-md text-center font-medium dark:font-light md:text-lg">
                          <span>Register Here</span>
                          <br />
                          {event.registration}
                        </div>
                        <div className="pb-0 pt-2 text-center">
                          {event.tags?.map((tag: any) => (
                            <span
                              key={tag}
                              className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-5 py-3 text-sm font-semibold text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-col gap-2 text-right">
                          <div className="text-sm font-light dark:font-extralight">
                            Time: Add time column
                          </div>
                          <div className="text-sm font-light dark:font-extralight">
                            Venue: Add Venu column
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="max-xl:hidden" />
        <CarouselNext className="max-xl:hidden" />
      </Carousel>
    </div>
  );
}
