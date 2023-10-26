import React from 'react';
import ReactDOM from 'react-dom';

import{
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";

import App from './App';
import FeaturesPage from './FeaturesPage';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
    },
    {
        path:"/FeaturesPage",
        element: <FeaturesPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FeaturesApp />, document.getElementById('root'));