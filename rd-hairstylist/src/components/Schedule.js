import React from "react";
import "../styles/Schedule.css";
import smiley from "../images/happiness.png";

function Schedule() {
  return (
    <div className="schedule-container" id="schedule">
      {/* new clients box info ------------------- */}
      <section className="schedule-box schedule">
        <h2>New Clients</h2>
        <div>
          {/* https://www.flaticon.com/free-icons/smile Smile icons created by Freepik - Flaticon */}
          <p className="smile-icon">
            Hello! Thank you for choosing me for your hair needs
            <img src={smiley} className="smiley-face" alt="smiley face icon" />
          </p>
          <p>
            New clients, please schedule a 15-30 minute in-person consultation
            for a personalized discussion about your hair.
          </p>
          <p>
            This will also help me get to know you, I look forward to meeting
            you!
          </p>
        </div>
      </section>
      {/* consulations box info ------------------- */}
      <section className="schedule-box consults">
        <h2>Consultations</h2>
        <div>
          <p>
            When booking an in-person consultation, please select proper
            location (SOUTHERN LOCAL), then select the appropriate consultation
            you’d like to book (GENERAL CONSULTATION, COLOR CONSULTATION OR
            CORRECTIVE COLOR CONSULTATION) and select RACHEL DEPILLO from list
            of professionals!
          </p>
          {/* <p className="consult-info">
            When booking an in-person consultation, please select:
          </p>
          <ul>
            <li>Proper location (SOUTHERN LOCAL)</li>
            <li>
              Appropriate consultation you’d like to book (GENERAL CONSULTATION,
              COLOR CONSULTATION OR CORRECTIVE COLOR CONSULTATION)
            </li>
            <li>RACHEL DEPILLO as professional</li>
          </ul> */}
        </div>
        <button className="schedule-consult">
          <a href="https://dashboard.boulevard.io/booking/businesses/741b8cf7-9df3-4a6f-ab63-a22b45b65213/widget#/locations">
            SCHEDULE HERE
          </a>
        </button>
      </section>
      {/* deposits box info -------------------- */}
      <section className="schedule-box deposits">
        <h2>Deposits</h2>
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
        <h2>Cancellations</h2>
        <div>
          <ul>
            <li>
              To avoid a $50 cancellation fee (except first time occurences), a
              48-hour notice is required to reschedule appointments.
            </li>
            <li>No re-booking for no calls/no shows.</li>
            <li>
              If running late, please notify me. Appointments are rescheduled
              after a 20-minute grace period, and a $50 nonrefundable payment is
              collected.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
