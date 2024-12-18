// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
// import "@fullcalendar/list/main.css";

// const Calander = () => {
//   const [events, setEvents] = useState([
//     { title: "Meeting", start: new Date(), allDay: true },
//     { title: "Conference", start: new Date("2024-12-20"), end: new Date("2024-12-22") },
//   ]);

//   const handleDateClick = (info) => {
//     const title = prompt("Enter event title:");
//     if (title) {
//       setEvents([...events, { title, start: info.date }]);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100">
//       <h1 className="text-2xl font-bold text-center mb-4">React Full Calendar</h1>
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
//         initialView="dayGridMonth"
//         editable={true}
//         selectable={true}
//         events={events}
//         dateClick={handleDateClick}
//         headerToolbar={{
//           left: "prev,next today",
//           center: "title",
//           right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
//         }}
//       />
//     </div>
//   );
// };

// export default Calander;
