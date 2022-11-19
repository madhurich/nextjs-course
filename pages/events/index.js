import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getEvents } from "../../utils/api/events";
import { useRouter } from "next/router";
import Head from 'next/head';

function Events(props) {
  const router = useRouter();
  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <Head>
        <title>All My Events</title>
        <meta
          name="description"
          content="Explore all events to know more details"
        />
      </Head>
      <EventsSearch onSearch={searchHandler} />
      {props.events?.length ? (
        <EventList items={props.events} />
      ) : (
        <p>Loading Events ...</p>
      )}
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
