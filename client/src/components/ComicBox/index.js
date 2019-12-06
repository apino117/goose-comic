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
                            src={"https://www.motherjones.com/wp-content/uploads/legacy/riff_blog/mojo-garfield-nothing.jpg"}
                            alt={"example"}
                        />
                    </div>
                </div>
            </>

        );
    }

}

export default ComicBox;