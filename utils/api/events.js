export async function getEvents() {
  const res = await fetch(
    "https://next-ssr-3f202-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();
  const formattedData = [];
  for (let key in data) {
    formattedData.push({ id: key, ...data[key] });
  }
  return formattedData
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
