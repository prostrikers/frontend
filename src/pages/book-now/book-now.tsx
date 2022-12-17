import useCompletedBookings from "../../hooks/meta/completed-bookings";
import { CalendarScheduler } from "./event-calender/scheduler";

export const BookNow = () => {
  const bookedEvents = useCompletedBookings();

  return (
    <>
      <div className="container mx-auto mt-20">
        {bookedEvents.isSuccess && (
          <CalendarScheduler eventsCalendar={bookedEvents.data.data} />
        )}
      </div>
    </>
  );
};
