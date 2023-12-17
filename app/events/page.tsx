import { CurrentEvents } from './eventType/currentEvents';

const Events = () => {
  return (
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <div className="text-center text-4xl font-bold">Current Events</div>

      <CurrentEvents />
    </div>
  );
};

export default Events;
