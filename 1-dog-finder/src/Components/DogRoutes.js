// import React, { Fragment } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function DogRoutes({ dogs }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
                <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
                <Navigate to="/dogs" />
            </Routes>
        </BrowserRouter>
    );
}
// function DogRoutes({ dogs }) {
//     return (
//         <Routes>
//             <Fragment>
//                 <Route exact path="/dogs">
//                     <DogList dogs={dogs} />
//                 </Route>
//                 <Route path="/dogs/:name">
//                     <FilterDogDetails dogs={dogs} />
//                 </Route>
//                 <Navigate to="/dogs" />
//             </Fragment>
//         </Routes>
//     );
// }

export default DogRoutes;