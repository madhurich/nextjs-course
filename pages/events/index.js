import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getEvents } from "../../utils/api/events";

function Events(props) {
  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <EventsSearch onSearch={searchHandler} />
      {props.events?.length ? <EventList items={props.events} /> : <p>Loading Events ...</p> }
    </div>
  );
}

export async function getStaticProps() {
  const eventData = await getEvents()

  return {
      props: {
          events: eventData
      },
      revalidate: 5
  }
}

export default Events;
