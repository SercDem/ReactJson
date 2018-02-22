import React from "react";
import './index.css';
import $ from "jquery";
import ShowComment from "./ShowComments";
import ReactDOM from "react-dom";
import ListPart1 from "./ListPart1";

class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        //This is for defining the state of item if its visible or not
        this.state = {
            v5: false
        };
        this.infoPart = this.infoPart.bind(this);
        this.returnToFirstPage = this.returnToFirstPage.bind(this);
    }

    //Returns the user to first page
    returnToFirstPage() {
        ReactDOM.render(< ListPart1/>, document.getElementById('root'));
    }

    //The function to show or hide extra info
    infoPart() {
        if (this.state.v5 === false) {
            this.setState({
                v5: true
            });
            $('#showcomment').show();
        } else {
            $('#showcomment').hide();
            this.setState({
                v5: false
            });
        }
    }

    //
    render() {
        //Assinging values to call them easier
        let i_id = this.props.takenID;
        let Username = this.props.takenUsername;
        let Name = this.props.takenName;
        let Email = this.props.takenEmail;
        let Phone = this.props.takenPhone;
        let Title = this.props.takenTitle;
        let Body = this.props.takenBody;
        let uD = this.props.uD;
        let pD = this.props.pD;
        return (<
                div>
                <h1> Post Detail </h1> <
                h1 id="toReturn"
                   onClick={
                       this.returnToFirstPage
                   }> Click This To Return </h1>
                <
                    div className="Listdiv">
      <
          span> Post Title: {
          Title
      } </span> <
                    p></p> <
                    span> Username: {
                    Name
                } </span></div>
                <div className="Listdivbody">
                    Post Body: {
                    Body
                }

                </div>

                <
                    h1> Author </h1>
                <
                    div className="AuthorDiv">
                    <
                        div className="leftdiv"> User
                    </div>
                    <div className="rightdiv">{Name}</div>
                    <
                        div className="leftdiv"> Username
                    </div>
                    <div className="rightdiv">{Username}</div>
                    <
                        div className="leftdiv"> Email
                    </div>
                    <div className="rightdiv">{Email}</div>
                    <
                        div className="leftdiv"> Phone
                    </div>
                    <div className="rightdiv">{Phone}</div>
                </div>
                <span id="linkforinfo"
                      onClick={
                          this.infoPart
                      }> Show Comments </span>
                <
                    div id="showcomment"
                        style={
                            {
                                display: 'none'
                            }
                        }>
                    <
                        ShowComment takenID={
                        i_id
                    }
                                    usD={
                                        uD
                                    }
                                    poD={
                                        pD
                                    }
                                    takenEmail={
                                        Email
                                    }
                                    takenTitle={
                                        Title
                                    }
                                    takenBody={
                                        Body
                                    }
                    /></div>
            </div>
        );
    }

}

export default PostDetail;
