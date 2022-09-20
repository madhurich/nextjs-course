import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function SingleEvent() {
  const router = useRouter();
  console.log(router.query);
  const currentEvent = getEventById(router.query.eventid);
  if (!currentEvent) {
    return <ErrorAlert><p>No Events found !</p></ErrorAlert>;
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

export default SingleEvent;
