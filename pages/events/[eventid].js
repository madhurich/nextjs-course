import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getEvents } from "../../utils/api/events";

function SingleEvent(props) {
  const { currentEvent } = props

  if (!currentEvent) {
    return (
      <ErrorAlert>
        <p>No Events found !</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
          <EventSummary title={currentEvent.title} />
          <EventLogistics
            date={currentEvent.date}
            address={currentEvent.location}
            image={currentEvent.image}
            imageAlt={currentEvent.title}
          />
          <EventContent>
            <p>{currentEvent.description}</p>
          </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context
  console.log(params)
  const data = await getEvents()
  const eventFound = data.find(
    (event) => event.id === params.eventid
  );

  return {
      props: {
          currentEvent: eventFound
      },
      revalidate: 5
  }
}

export async function getStaticPaths() {
  const data = await getEvents()
  console.log(data)
  const pathParams = data.map((event) => ({params: {eventid: event.id}}))
  return {
      paths: pathParams,
      fallback: false// since all the ids are set we set false
  }
}

export default SingleEvent;
