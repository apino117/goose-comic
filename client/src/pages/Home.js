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
                    title={"Fortune Favors the Bird: "}
                    date={"01/29/2020"}
                    src={"https://github.com/apino117/goose-comic/blob/master/client/src/assets/images/golden%20goose%2018.png?raw=true"}
                    alt={"example"}>
                </Card>
            </>
        );
    }
}

export default Home;