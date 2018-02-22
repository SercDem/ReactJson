import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import PostDetail from "./postdetail";
//Variables
let dEmail = "",
    dPhone = "",
    dUserName = "",
    dName = "",
    dTitle = "";
let dBodyCount = [],
    userData = [],
    postData = [],
    uName = [],
    pTitle = [];

//
class ListPart1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _titles: pTitle
        };
    }

    //Fetching json values before page renders
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(result => result.json()
            ).then(data => {
            userData = data;
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(result => result.json()
                ).then(dataPost => {
                postData = dataPost;
                //Pushing usernames into uName named array
                for (let i = 0; i < userData.length; i++) {
                    uName.push(userData[i].name);
                }
                //Pushing titlenames into pTitle named array
                for (let i = 0; i < postData.length; i++) {
                    pTitle.push(postData[i].title);
                }
                //Setting State with the values we get from fetch
                this.setState({
                    uData: userData,
                    pData: postData
                });
            })
            ;
        })
        ;
    }

    render() {
        //Mapping the titles we have and giving incremental id to elements
        let _titles = this.state._titles;
        let i = 0;
        _titles = _titles.map(function (item, index) {
            i++;
            return (<
                    ListPart2
                    item={
                        item
                    }
                    key={
                        index
                    }
                    i_id={
                        i
                    }
                />
            )
                ;
        });
        return (<
                div>
                <h1>List </h1>
                <ul> {
                    _titles
                }
                </ul>
            </div>
        )
            ;
    }
}

class ListPart2 extends React.Component {
    constructor(props) {
        super(props);
        this.listClickker = this.listClickker.bind(this);
    }

    //This is the event handler we use for getting other user infos
    listClickker(e) {
        //We get the clicked elements's tagName till we reach "div" html element and get its id so we can send it to other page
        let tarName = e.target;
        while (tarName.tagName !== "DIV") {
            tarName = tarName.parentNode;
        }
        let tarId = tarName.id;
        //

        for (let i = 0; i < postData.length; i++) {
            if (postData[i].id.toString() === tarId.toString()) {
                dBodyCount = postData[i].body;
                dTitle = postData[i].title;
            }
        }
        //We get the id number from postData and get the actual user id no
        let collectedId = postData.find(q = >
            q.id.toString() === tarId.toString()
    )
        ;
        let collectedId1 = collectedId.userId;

        //Getting all the other info and assinging them to a variable
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].id.toString() === collectedId1.toString()) {
                dEmail = userData[i].email;
                dPhone = userData[i].phone;
                dName = userData[i].name;
                dUserName = userData[i].username;
            }
        }
        //Then we render the other page with values we need
        ReactDOM.render(< PostDetail
            pD={
                postData
            }
            uD={
                userData
            }
            takenID={
                collectedId1
            }
            takenUsername={
                dUserName
            }
            takenPhone={
                dPhone
            }
            takenName={
                dName
            }
            takenTitle={
                dTitle
            }
            takenBody={
                dBodyCount
            }
            takenEmail={
                dEmail
            }/>, document.getElementById('root'));
    }

    render() {
        let a = postData.find(q =>
            q.title === this.props.item
            )
        ;

        return (<div
                onClick={
                    this.listClickker
                }
                className="Listdiv"
                id={
                    this.props.i_id
                }>
                <span> Post
                Title: {
                        this.props.item
                    }
                </span> <p></p>
                <span> Username: <GetUsername no={a.userId} vTitle={this.props.item}/></span>
            </div>
        )
            ;
    }
}

//A function to add username to each element
function GetUsername(props) {
    //We get the object with its title name
    let t = postData.find(q = >
        q.title === props.vTitle
)
    ;
    let vv = t.userId;
    if (props.no.toString() === vv.toString()) {
        let c = userData.find(q =>
            q.id === vv
            )
        ;
        return
        <
            span> {
            c.name
        }
            </span>;
    } else {
        //Returning empty span if something wrong happens
        return
        <
            span> </span>;
    }
}

export default ListPart1;
