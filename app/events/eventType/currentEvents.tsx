'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import data from './data';

export function CurrentEvents() {
  const currentEvents = data.filter((event) => event.status === 'Active');

  if (currentEvents.length === 0) {
    return (
      <div className="mt-c15 md:mt-c5 xl:mt-c3">
        <div className="text-center text-xl">
          No Events Available. Please Check Again Later
        </div>
      </div>
    );
  }

  const targetLength: number = 120;

  return (
    <div className="mt-c15 md:mt-c5 xl:mt-c3">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        transitionTime={500}
        className="carousel-container xl:h-120 h-64 md:h-80 lg:h-96"
      >
        {currentEvents.map((event, index) => {
          let hiddenText: string = '';

          if (event.description.length > targetLength) {
            event.description =
              event.description.substring(0, targetLength - 3) + '...';
          } else {
            hiddenText = '* '.repeat(
              (targetLength - event.description.length) / 2
            );
          }

          return (
            <div key={index} className="carousel-item">
              <Link href="/">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                    <div className="text-sm font-light dark:font-extralight">
                      {event.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      <div className="text-md font-medium dark:font-light">
                        {event.description}
                        <span className="invisible">{hiddenText}</span>
                      </div>
                      <div className="flex flex-col gap-2 text-right">
                        <div className="text-sm font-light dark:font-extralight">
                          Time: {event.time}
                        </div>
                        <div className="text-sm font-light dark:font-extralight">
                          Venue: {event.venue}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
