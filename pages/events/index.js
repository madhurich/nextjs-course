import EventList from "../../components/events/EventList";
import {getFeaturedEvents} from '../../dummy-data'

function Events() {
    const items = getFeaturedEvents()
    return (
        <div>
            <h1>All Events</h1>
            <EventList items={items}/>
        </div>
    )
}

export default Events;