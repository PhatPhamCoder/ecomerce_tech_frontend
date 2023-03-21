import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import EventCard from "../components/Route/Events/EventCard";

const EventPage = () => {
  return (
    <>
      <Header activeHeading={4} />
      <EventCard active={true} />
      <EventCard active={true} />
      <Footer />
    </>
  );
};

export default EventPage;
