import { useState } from "react";
import { validateForm } from "../utils/validateForm";
import { getAvailableTimes } from "../utils/availability";

export default function BookingForm({ onBook }) {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: ""
  });

  const [errors, setErrors] = useState({});

  const times = getAvailableTimes(form.date);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validation = validateForm(form);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    onBook(form);

    alert("Booking confirmed 🎉");

    setForm({
      name: "",
      date: "",
      time: "",
      guests: 1,
      occasion: ""
    });
  }

  return (
    <form onSubmit={handleSubmit} aria-label="booking form">
      <h2>Book a Table</h2>

      <label>
        Name
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          aria-required="true"
        />
        <span className="error">{errors.name}</span>
      </label>

      <label>
        Date
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <span className="error">{errors.date}</span>
      </label>

      <label>
        Time
        <select name="time" value={form.time} onChange={handleChange}>
          <option value="">Select</option>
          {times.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <span className="error">{errors.time}</span>
      </label>

      <label>
        Guests
        <input
          type="number"
          min="1"
          max="10"
          name="guests"
          value={form.guests}
          onChange={handleChange}
        />
      </label>

      <label>
        Occasion
        <select name="occasion" onChange={handleChange}>
          <option value="">None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>

      <button type="submit">Reserve</button>
    </form>
  );
}
