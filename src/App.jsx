import { useState } from "react";
import BookingForm from "./components/BookingForm";
import ReservationList from "./components/ReservationList";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [reservations, setReservations] = useState([]);

  function addReservation(data) {
    setReservations((prev) => [...prev, data]);
  }

  return (
    <>
      <Header />
      <main className="container">
        <BookingForm onBook={addReservation} />
        <ReservationList reservations={reservations} />
      </main>
      <Footer />
    </>
  );
}
