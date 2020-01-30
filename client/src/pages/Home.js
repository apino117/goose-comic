import React, { Component } from "react";
// import ComicBox from "../components/ComicBox"
import Card from "../components/Card"
import Jumbotron from "../components/Jumbotron";

class Home extends Component {

    state = {
        comics: [],
        title: "",
        date: ""
    };

    // Component did mount - load comics

    // load comics function - hits comic api and loads sets state 




    render() {
        return (
            <>
                <Jumbotron>
                    <h1 className="text-center">
                        <strong>Sheriff Goose</strong>
                    </h1>
                    <h2 className="text-center">This town goose goose for goose goose of us</h2>
                </Jumbotron>
                {/* <ComicBox></ComicBox> */}
                <Card
                    title={"Today's Comic"}
                    src={"https://github.com/apino117/goose-comic/blob/2dcb41b524af4944a2d0d18ac95c2fa7c01607a4/client/src/assets/images/golden goose 18.png"}
                    alt={"example"}>
                </Card>
            </>
        );
    }
}

export default Home;