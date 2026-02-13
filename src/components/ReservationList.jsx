export default function ReservationList({ reservations }) {
  return (
    <section>
      <h2>Reservations</h2>
      {reservations.length === 0 && <p>No bookings yet</p>}

      <ul>
        {reservations.map((r, i) => (
          <li key={i}>
            {r.name} | {r.date} | {r.time} | {r.guests} guests
          </li>
        ))}
      </ul>
    </section>
  );
}
