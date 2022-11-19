import EventList from "../components/events/EventList";
import { getEvents } from "../utils/api/events";
import Head from 'next/head';

function Home(props) {
    return (
        <div>
            <Head>
                <title>All My Events</title>
                <meta name="description" content="Explore all events to know more details"/>
            </Head>
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