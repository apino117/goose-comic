import React, { Component } from "react";
// import ComicBox from "../components/ComicBox"
import Card from "../components/Card"
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
                {/* <ComicBox></ComicBox> */}
                <Card title="Today's Comic">
                    <div className="container" id="comic-box-container">
                        <div className="row" id="comic-row">
                            <div className="column" id="comic-column">
                                <img className="Comic"
                                    src={"https://www.motherjones.com/wp-content/uploads/legacy/riff_blog/mojo-garfield-nothing.jpg"}
                                    alt={"example"}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            </>
        );
    }
}

export default Home;