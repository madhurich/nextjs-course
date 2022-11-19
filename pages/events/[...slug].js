// import { getFilteredEvents } from "../../dummy-data";
import { getFilteredEvents } from "../../utils/api/events";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EventItem from "../../components/events/EventItem";
import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";
import Head from 'next/head';

function FilteredEvent(props) {
  // const router = useRouter();
  // const [filteredEvents, setFilteredEvents] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const params = router.query.slug;

  // if (!params) {
  //   return <p className="center">Loading...</p>;
  // }
  // const numYear = +params[0];
  // const numMonth = +params[1];

  // useEffect(() => {
  //   if (params) {
  //     console.log(params);
  //     setIsLoading(true);
  //     fetch("https://next-ssr-3f202-default-rtdb.firebaseio.com/events.json")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setIsLoading(false);
  //         const formattedData = [];
  //         for (let key in data) {
  //           formattedData.push({ id: key, ...data[key] });
  //         }
  //         const eventsFound = formattedData.filter((event) => {
  //           const eventDate = new Date(event.date);
  //           return (
  //             eventDate.getFullYear() === numYear &&
  //             eventDate.getMonth() === numMonth - 1
  //           );
  //         });
  //         setFilteredEvents(eventsFound);
  //       });
  //   }
  // }, [params]);

  const filteredEvents = props.events;
  const { numYear, numMonth } = props;
  let pageHeadData = (
    <Head>
          <title>Filtered Event</title>
          <meta
            name="description"
            content={`filtered events`}
          />
      </Head>
  );

  if (
    props.hasError
  ) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>Please adjust your values</p>
        </ErrorAlert>
      </Fragment>
      
    );
  }
  // const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents.length || !filteredEvents) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>No Events Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  pageHeadData = (
    <Head>
          <title>Filtered Event</title>
          <meta
            name="description"
            content={`filtered events on ${numMonth}/${numYear}`}
          />
      </Head>
  )
  return (
    <Fragment>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const slugParams = params.slug;

  const numYear = +slugParams[0];
  const numMonth = +slugParams[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numMonth > 12 ||
    numMonth < 1 ||
    numYear > 2030 ||
    numYear < 2022
  ) {
    return {
      props: {
        hasError: true,
      }
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  return {
    props: {
      events: filteredEvents,
      numYear,
      numMonth
    }
  }

}

export default FilteredEvent;
