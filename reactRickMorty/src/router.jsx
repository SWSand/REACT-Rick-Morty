import App from "./App"
import HomePage from "./pages/HomePage"
import { createBrowserRouter } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[{
            index: true,
            element: <HomePage/>
        },
        {
            path: "about/",
            element: <AboutPage/>
        },
        {
            path: "contacts/",
            element: <ContactsPage/>

        },

    ],
    errorElement: <ErrorPage/>
    }
])

export default router;