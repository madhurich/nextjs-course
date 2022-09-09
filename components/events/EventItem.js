
import Link from 'next/link'
import classes  from './EventItem.module.css'
import Button from '../ui/Button'
import AddressIcon from '../icons/address-icon'
import DateIcon from '../icons/date-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

function EventItem(props) {
  const { title, description, location, date, image, id } = props;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formattedAddress = location.replace(', ', '\n')

  return (
    <li key={id} className={classes.item}>
        <img src={'/' + image} alt={title}/>
      <div className={classes.content}>
        <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
                <DateIcon/>
                <time>{readableDate}</time>
            </div>
            <div className={classes.address}>
                <AddressIcon/>
                <address>{formattedAddress}</address>
            </div>
        </div>
        <div className={classes.actions}>
            {/* <Link href={`/events/${id}`}>{title}</Link> */}
            <Button link={`/events/${id}`}>
                <span>Explore Event</span>
                <span className={classes.icon}>
                    <ArrowRightIcon/>
                </span>
            </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
