import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventItem from "../../components/events/EventItem";
import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from '../../components/ui/Button'
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEvent() {
  const router = useRouter();
  const params = router.query.slug;
  if (!params) {
    return <p className="center">Loading...</p>;
  }
  const numYear = +params[0];
  const numMonth = +params[1];
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numMonth > 12 ||
    numMonth < 1 ||
    numYear > 2030 ||
    numYear < 2022
  ) {
    return <ErrorAlert><p>Please adjust your values</p></ErrorAlert>;
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents.length || !filteredEvents) {
    return (
      <Fragment>
        <ErrorAlert><p>No Events Found</p></ErrorAlert>
        <div className="center">
          <Button link="/events">show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEvent;
