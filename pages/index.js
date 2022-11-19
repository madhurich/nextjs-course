import EventList from "../components/events/EventList";
import { getEvents } from "../utils/api/events";

function Home(props) {
    return (
        <div>
            <h1>Event Home</h1>
            {props.events?.length ? <EventList items={props.events} /> : <p>Loading Events ...</p> }
        </div>
    )
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

export default Home;