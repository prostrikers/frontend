import { DateSelectArg } from "@fullcalendar/core";
import { useState } from "react";
import useCompletedBookings from "../../hooks/meta/completed-bookings";
import { CalendarScheduler } from "./event-calender/scheduler";
import { Select, Option } from "@material-tailwind/react";
import { Listbox } from "@headlessui/react";
import { CircularProgress } from "../../components/gobal/CircularProgress";

const lanes = [
  { id: 1, name: "Lane 1", unavailable: false },
  { id: 2, name: "Lane 2", unavailable: false },
  { id: 3, name: "Lane 3", unavailable: false },
];

export const BookNow = () => {
  const bookedEvents = useCompletedBookings();
  const [selectedTime, setSelectedTime] = useState<DateSelectArg | null>(null);
  const [selectedLane, setSelectedLane] = useState(lanes[0]);

  return (
    <>
      <section className="mx-auto mt-20 w-full px-10 isloate w-11/12">
        <div>
          {/*
          <div className="flex bg-white ">
            <div className="relative w-full">
              <img
                src="/sports/cricket.png"
                className="w-full max-h-max bg-auto"
              />
              <h1 className="uppercase absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
                Cricket cage
              </h1>
            </div>
          </div>

        */}

          <div className="mt-20">
            <h2 className="text-3xl font-medium sm:text-3xl">
              Membership plan : Individual
            </h2>
          </div>

          <div className="mt-10">
            <dl>
              <div className="bg-white py-5 sm:grid sm:grid-cols-3 sm:gap-4 ">
                <dt className="text-sm font-medium text-gray-900">
                  <Listbox value={selectedLane} onChange={setSelectedLane}>
                    <Listbox.Options>
                      {lanes.map((lane) => (
                        <Listbox.Option
                          key={lane.id}
                          value={lane.name}
                          disabled={lane.unavailable}
                        >
                          {lane.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                  <div className="w-5">
                    <Select label="Select a lane">
                      <Option>Lane 1</Option>
                      <Option>Lane 2</Option>
                      <Option>Lane 3</Option>
                    </Select>
                  </div>
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <div className="w-1/5">
                    <input
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    ></input>
                  </div>
                </dd>
              </div>
            </dl>
          </div>

          {bookedEvents.isLoading && (
            <>
              <CircularProgress />
            </>
          )}

          {bookedEvents.isSuccess && (
            <CalendarScheduler
              eventsCalendar={bookedEvents.data.data}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          )}
        </div>
      </section>
    </>
  );
};
