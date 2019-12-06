import React, { Component } from "react";

class ComicBox extends Component {

    state = {
        comic: [],
    };

    render() {
        return (
            <>
                <div className="row" id="button-row">
                    First Previous Next Last
            </div>
                <div className="row" id="comic-row">
                    <div className="column" id="comic-column">
                        <img className="Comic"
                            src={"client/src/assets/images/garfield1.jpg"}
                            alt={"example"}
                        />
                    </div>
                </div>
            </>

        );
    }

}

export default ComicBox;