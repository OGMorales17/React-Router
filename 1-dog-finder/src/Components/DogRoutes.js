import { Route, Switch, Redirect } from "react-router-dom";
import DogList from './DogList'
// import DogDetails from './DogDetails'

const DogRoutes = ({ dogs }) => {

    return (
        // <Switch>
        //     <Route exact path="/dogs" >
        //         <DogList />
        //     </Route>
        //     <Route path="/dogs/:name" >
        //         <DogDetails />
        //     </Route>
        //     <Redirect to="/dogs" />
        // </Switch>
        <Switch>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            {/* <Route path="/dogs/:name">
                <FilterDogDetails dogs={dogs} />
            </Route> */}
            <Redirect to="/dogs" />
        </Switch>
    )

}

export default DogRoutes;