import React from "react";
import "../styles/Schedule.css";

function Schedule() {
  return (
    <div className="schedule-container" id="schedule">
      {/* first box with shceduling info ------------------- */}
      <section className="schedule">
        <h2>SCHEDULE</h2>
        <div className="consults">
          <h3>Consultations</h3>
          <p>
            I offer 15–30 minute in-person consultations for new clients who
            want to visit the salon, help me get to know them, and speak in
            person about their hair.
          </p>
          <p className="consult-info">
            Before reaching out about consultations please have the following
            information:
          </p>
          <ul>
            <li>First and last name.</li>
            <li>
              2-3 years of hair history, including both professional and at home
              color.
            </li>
            <li>Front and back photos of current hair.</li>
            <li>2-3 inspiration photos of your ideal hair goals.</li>
            <li>Your availability Tuesday - Saturday.</li>
          </ul>
        </div>
        <div>
          <p>
            Please note a $50 non-refundable deposit is required to book your
            appointment. Thank you!
          </p>
          <p>
            To schedule a consulation please send a text message to (949)
            302-2748.
          </p>
        </div>
      </section>
      {/* second box with policies info -------------------- */}
      <section className="policies">
        <h2>POLICIES</h2>
        <div className="deposits">
          <h3>Deposits</h3>
          <ul>
            <li>
              A $50 nonrefundable deposit is required for booking color service
              appointments.
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
        <div className="appointments">
          <h3>Appointments</h3>
          <ul>
            <li>
              A 48-hour cancellation notice is required for any rescheduled
              appointments. Otherwise, a $50 cancellation fee will be charged to
              the card on file. (Exception: first-time last-minute
              cancellations).
            </li>
            <li>
              In the event of a no call/no show, re-booking will not be allowed.
            </li>
            <li>
              Please notify me if you are running late; there is a 20-minute
              grace period. After that time, the appointment will be
              rescheduled, and a $50 nonrefundable payment will be collected.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
