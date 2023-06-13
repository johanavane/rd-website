import React from "react";
import "../styles/Schedule.css";

function Schedule() {
  return (
    <div className="schedule-container" id="schedule">
      {/* new clients box info ------------------- */}
      <section className="schedule-box schedule">
        <h2>NEW CLIENTS</h2>
        <div>
          <p>Thank you so much for choosing me for your hair needs!</p>
          <p>
            New clients, please schedule a 15-30 minute in-person consultation
            for a personalized discussion about your hair.
          </p>
        </div>
      </section>
      {/* consulations box info ------------------- */}
      <section className="schedule-box consults">
        <h2>CONSULTATIONS</h2>
        <div>
          <p className="consult-info">For consultations, provide:</p>
          <ul>
            <li>Full name.</li>
            <li>2-3 years of hair history (professional and at home color).</li>
            <li>Front and back photos of current hair.</li>
            <li>2-3 inspiration photos of desired hair goals.</li>
            <li>Availability (Tuesday - Saturday).</li>
          </ul>
          <p className="phone-number">
            To schedule send a text to (949) 302-2748. No calls please.
          </p>
        </div>
      </section>
      {/* deposits box info -------------------- */}
      <section className="schedule-box deposits">
        <h2>DEPOSITS</h2>
        <div>
          <ul>
            <li>
              A $50 nonrefundable deposit is required for booking color
              services.
            </li>
            <li>
              If a deposit is not received on my end, your appointment doesn't
              exist.
            </li>
            <li>
              Deposits can be made to me via Zelle (949) 302-2748 or Venmo
              @racheldepillohair.
            </li>
          </ul>
        </div>
      </section>
      {/* cancellations box info --------------- */}
      <section className="schedule-box cancellations">
        <h2>CANCELLATIONS</h2>
        <div>
          <ul>
            <li>
              To avoid a $50 cancellation fee (except first time occurences), a
              48-hour notice is required for rescheduled appointments.
            </li>
            <li>No re-booking for no calls/no shows.</li>
            <li>
              If you're running late, please notify me. Appointments will be
              rescheduled after a 20-minute grace period, and a $50
              nonrefundable payment will be collected.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
