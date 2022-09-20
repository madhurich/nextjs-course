import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

function Events() {
  const router = useRouter();
  const items = getAllEvents();
  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={items} />
    </div>
  );
}

export default Events;
