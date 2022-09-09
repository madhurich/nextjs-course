import EventItem from "./EventItem";
import classes from "./EventList.module.css"

function EventList(props) {
  const { items } = props;
  return (
    <div>
      <ul className={classes.list}>
        {items.map((val, key) => {
          return (
            <EventItem
              key={val.id}
              id={val.id}
              title={val.title}
              description={val.description}
              location={val.location}
              date={val.date}
              image={val.image}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default EventList;
