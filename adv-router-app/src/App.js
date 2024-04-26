// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEvent";
import EventDetailPage, {
  loader as eventsDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";

import { loader as eventsLoader } from "./pages/Events";
import ErrorPage from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          // loader: async () => {
          //   const response = await fetch("http://localhost:8080/events");
          //   console.log(response);
          //   if (!response.ok) {
          //     //...
          //   } else {
          //     const resData = await response.json();
          //     console.log(resData);
          //     return resData.events;
          //   }
          // },
          //  },
          // {
          //   path: ":eventId",
          //   element: <EventDetailPage />,
          //   loader: eventsDetailLoader,
          // },
          // { path: "new", element: <NewEventPage /> },
          // { path: ":eventId/edit", element: <EditEventPage /> },

          {
            path: ":eventId",
            id: "event-detail",
            loader: eventsDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
