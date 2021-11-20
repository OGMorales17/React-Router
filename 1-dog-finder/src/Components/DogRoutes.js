import { Routes, Route } from 'react-router-dom';
import FilterDogDetails from './FilterDogDetails';
import DogList from './DogList';
// import Navigation from './Navigation';

function DogRoutes({ dogs }) {
    return (
        <Routes>
            <Route path="/" element={<DogList dogs={dogs} />} />
            <Route path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />

        </Routes>
    );
}

export default DogRoutes;