import React from "react";
import "../styles/Schedule.css";

function Schedule() {
  return (
    <div className="schedule-container">
      <section className="schedule">
        <h2>Schedule</h2>
        <section className="schedule-flex">
          <div>
            <p className="para-gap">
              For new clients who want to visit the salon, help me get to know
              them, and speak in person about their hair, I offer in-person
              15–30 minute consultations.
            </p>
            <p>
              Please note a $50 non-refundable deposit is required to book your
              appointment. Thank you!
            </p>
          </div>
          <div>
            <p>
              Before reaching out about consultations please have the following
              information:
            </p>
            <ul>
              <li>First and last name.</li>
              <li>
                2-3 years of hair history, including both professional and at
                home color.
              </li>
              <li>Front and back photos of current hair.</li>
              <li>2-3 inspiration photos of your ideal hair goals.</li>
              <li>Your availability Tuesday - Saturday.</li>
            </ul>
          </div>
        </section>
      </section>
      <section className="policies">
        <h2>Policies</h2>
        <section className="schedule-flex">
          <div>
            <h3>Deposits</h3>
            <ul>
              <li>
                A $50 non-refundable deposit is required for booking color
                service appointments.
              </li>
              <li>
                New clients: If a deposit is not received on my end, your
                appointment does not exist.
              </li>
              <li>
                Deposits can be made to me directly via Zelle (949) 302-2748 or
                Venmo @racheldepillohair.
              </li>
            </ul>
          </div>
          <div>
            <h3>Appointments</h3>
            <ul>
              <li>
                I require a 48-hour cancellation notice for any rescheduled
                appointments.
              </li>
              <li>
                If an appointment is cancelled within 48 hours of the scheduled
                time, a $50 cancellation fee will be charged to the card on
                file. (Exception: first-time last-minute cancellations).
              </li>
              <li>
                In the event of a no call/no show, re-booking will not be
                allowed.
              </li>
              <li>
                Please notify me if you are running late; there is a 20-minute
                grace period. After that time, the appointment will be
                rescheduled, and a $50 nonrefundable payment will be collected.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Schedule;
