import React, { Component } from "react";
import ComicBox from "../components/ComicBox"
import Jumbotron from "../components/Jumbotron";

class Home extends Component {

    render() {
        return (
            <>
                <Jumbotron>
                    <h1 className="text-center">
                        <strong>Sheriff Goose</strong>
                    </h1>
                    <h2 className="text-center">This town goose goose for goose goose of us</h2>
                </Jumbotron>
                <ComicBox></ComicBox>
            </>
        );
    }
}

export default Home;