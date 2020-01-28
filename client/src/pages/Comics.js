import React, { Component } from "react";
import Card from "../components/Card"
import Jumbotron from "../components/Jumbotron";

class Comics extends Component {

    render() {
        return (
            <>
                <Jumbotron>
                    <h1 className="text-center">
                        <strong>Comic Archive</strong>
                    </h1>
                    <h2 className="text-center">All comics from dead to zedd</h2>
                </Jumbotron>
                {/* <ComicBox></ComicBox> */}
                <Card
                    title="Title of Comic: Date"
                    src={"https://static01.nyt.com/images/2008/06/02/business/02garfield.600.jpg?quality=75&auto=webp&disable=upscale"}
                    alt={"example"}>
                </Card>
            </>
        );
    }
}

export default Comics;