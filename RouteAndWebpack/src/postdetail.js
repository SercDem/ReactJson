import React from "react";
import "./index.css";
import $ from "jquery";
import ShowComment from "./ShowComments";
import ReactDOM from "react-dom";
import ListPart1 from "./ListPart1";
let userData = [];
let postData = [];
let bodyCount = [];
let titleCount = [];
let dTitle = "";
let dBody = "";
let dUsername = "";
let dEmail = [];
let dPhone = [];
let dName = [];
function getSearchParameters() {
  var prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}
function transformToAssocArray(prmstr) {
  var params = {};
  var prmarr = prmstr.split("&&");
  for (var i = 0; i < prmarr.length; i++) {
    var tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}
var params = getSearchParameters();
class PostDetail extends React.Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(result => result.json())
      .then(data => {
        userData = data;
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(result => result.json())
          .then(dataPost => {
            postData = dataPost;
            for (let i = 0; i < postData.length; i++) {
              if (postData[i].id.toString() === params.id) {
                titleCount.push(postData[i].title);
                bodyCount.push(postData[i].body);
              }
            }

            let obj1 = userData.find(q => q.id.toString() === params.userId);
            let obj2 = postData.find(q => q.id.toString() === params.id);
            dTitle = obj2.title;
            dBody = obj2.body;
            dName = obj1.name;
            dUsername = obj1.username;
            dEmail = obj1.email;
            dPhone = obj1.phone;
            //This is required else values dont show up
            this.setState({});
          });
      });
  }
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
    window.location.href = "/";
  }

  //The function to show or hide extra info
  infoPart() {
    if (this.state.v5 === false) {
      this.setState({
        v5: true
      });
      $("#showcomment").show();
    } else {
      $("#showcomment").hide();
      this.setState({
        v5: false
      });
    }
  }

  //
  render() {
    let i_id = params.id;
    let uD = userData;
    let pD = postData;

    return (
      <div>
        <h1> Post Detail </h1>{" "}
        <h1 id="toReturn" onClick={this.returnToFirstPage}>
          {" "}
          Click This To Return{" "}
        </h1>{" "}
        <div className="Listdiv">
          <span> Post Title: {dTitle} </span> <p />{" "}
          <span> Username: {dName} </span>{" "}
        </div>{" "}
        <div className="Listdivbody"> Post Body: {dBody} </div>{" "}
        <h1> Author </h1>{" "}
        <div className="AuthorDiv">
          <div className="leftdiv"> User </div>{" "}
          <div className="rightdiv"> {dName} </div>{" "}
          <div className="leftdiv"> Username </div>{" "}
          <div className="rightdiv"> {dUsername} </div>{" "}
          <div className="leftdiv"> Email </div>{" "}
          <div className="rightdiv"> {dEmail} </div>{" "}
          <div className="leftdiv"> Phone </div>{" "}
          <div className="rightdiv"> {dPhone} </div>{" "}
        </div>{" "}
        <span id="linkforinfo" onClick={this.infoPart}>
          {" "}
          Show Comments{" "}
        </span>{" "}
        <div
          id="showcomment"
          style={{
            display: "none"
          }}
        >
          <ShowComment
            takenID={params.userId}
            usD={uD}
            poD={pD}
            takenEmail={dEmail}
            takenTitle={dTitle}
            takenBody={dBody}
          />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default PostDetail;
