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
                    title={"Golden Goose: "}
                    date={"Some Time Ago"}
                    src={"https://github.com/apino117/goose-comic/blob/master/client/src/assets/images/golden%20goose%201.png?raw=true"}
                    alt={"example"}>
                </Card>
            </>
        );
    }
}

export default Comics;