import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostDetail from './postdetail';
window.onload=function(){
  var dEmail="";
  var dPhone="";
  var dUserName="";
  var dName="";
  var dTitle="";
var dBodyCount=[];
  var eArra=[];
  var userData = [];
  var postData=[];
  var uName=[];
  var uID=[];
  var pTitle=[];
  var pBody=[];
  let findUser = (userList, userId) => {
    return userList.filter((user) => {
        return user.id === userId;
    });
  }

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(result => result.json())
  .then(data => {
    userData = data;
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => result.json())
    .then(dataPost => {
      postData=dataPost;
      //console.log(userData);
      //console.log(postData);
for(let i=0;i<userData.length;i++){
  uName.push(userData[i].name);
}
for(let i=0;i<postData.length;i++){
  pTitle.push(postData[i].title);
}

ReactDOM.render(<Tert1 />,document.getElementById('root'));
    });
  });
  class Tert1 extends React.Component{
    constructor(props){
      super(props);
  this.state={suname:pTitle};

    }

    render(){
    var suname=this.state.suname;
var i=0;
    suname=suname.map(function(item,index){
  i++;
      return(
        <Part2 item={item} key={index} i_id={i}/>
      );
    }.bind(this));
    return(
      <div>
      <h1>
      List
      </h1>
      <ul>
      {suname}
      </ul>

      </div>
    );
  }
  }
  class Part2 extends React.Component{
constructor(props){
  super(props);
this.listclickker=this.listclickker.bind(this);
}
listclickker(e){
  for(let i=0;i<postData.length;i++){
    if(postData[i].id.toString()===e.target.id.toString()){
    dBodyCount=postData[i].body;
        dTitle=postData[i].title;
  }
}
var m;
if(e.target.id<11){
  m=1;
}
if(e.target.id>10 &&e.target.id<21){
  m=2;
}
if(e.target.id>20 &&e.target.id<31){
  m=3;
}
if(e.target.id>30 &&e.target.id<41){
  m=4;
}
if(e.target.id>40 &&e.target.id<51){
  m=5;
}
if(e.target.id>50 &&e.target.id<61){
  m=6;
}
if(e.target.id>60 &&e.target.id<71){
  m=7;
}
if(e.target.id>70 &&e.target.id<81){
  m=8;
}
if(e.target.id>80 &&e.target.id<91){
  m=9;
}
if(e.target.id>91){
  m=10;
}

  for(let i=0;i<userData.length;i++){

    if(userData[i].id.toString()===m.toString()){
      dEmail=userData[i].email;
        dPhone=userData[i].phone;
        dName=userData[i].name;
        dUserName=userData[i].username;
    }
  }
  ReactDOM.render(<PostDetail pD={postData} uD={userData} takenID={m} takenUsername={dUserName} takenPhone={dPhone} takenName={dName} takenTitle={dTitle} takenBody={dBodyCount} takenEmail={dEmail}/>,document.getElementById('root'));
}

render(){
var a=postData.find(q=>
  q.title===this.props.item
);

  return(
    <div onClick={this.listclickker} className="Listdiv" id={this.props.i_id}>
    <span id={this.props.i_id}>Post Title : {this.props.item}</span>
    <p></p>
<span> Username :<Uhh no={a.userId} vTitle={this.props.item}/></span>
    </div>
  );
}
  }
function  Uhh(props){
var t=postData.find(q=>
  q.title===props.vTitle
);
var vv=t.userId;
console.log(vv);
if(props.no.toString()===vv.toString()){
  var c=userData.find(q=>
        q.id===vv
        );
        return <span>{c.name}</span>;
  }
  else{
    return <span> </span>;
  }
  }




}
