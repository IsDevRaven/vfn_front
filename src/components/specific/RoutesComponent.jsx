import {Route, Routes} from "react-router-dom";
import routes from "../../utils/routes.js";
import {Heading} from "@chakra-ui/react";

const RoutesComponent = () => {
    return (
        <Routes>
            {routes.map((route, index) => {
                if (route.type === 'link'){
                    return <Route key={index} path={route.path} element={<Heading> {route.label} </Heading>}/>
                }
            })}
        </Routes>
    );
};


export default RoutesComponent;