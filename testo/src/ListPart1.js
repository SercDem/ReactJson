import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import PostDetail from "./postdetail";
let dEmail="",dPhone="",dUserName="",dName="",dTitle="";
let dBodyCount=[],userData = [],postData=[],uName=[],pTitle=[];
class ListPart1 extends React.Component{

  constructor(props){
    super(props);
    this.state={suname:pTitle};
  }
  componentDidMount(){
    const self=this;
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(data => {
      userData = data;
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(result => result.json())
      .then(dataPost => {
        postData=dataPost;
    for(let i=0;i<userData.length;i++){
    uName.push(userData[i].name);
    }
    for(let i=0;i<postData.length;i++){
    pTitle.push(postData[i].title);
    }
    self.setState({uData:userData,pData:postData});
      });
    });
  }
  render(){
  let suname=this.state.suname;
  let i=0;
  suname=suname.map(function(item,index){
  i++;
    return(
      <ListPart2 item={item} key={index} i_id={i}/>
    );
  });
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
class ListPart2 extends React.Component{
constructor(props){
super(props);
this.listClickker=this.listClickker.bind(this);
}
listClickker(e){
  let tarName=e.target;
  while(tarName.tagName!=="DIV"){
    tarName=tarName.parentNode;
  }
let tarId=tarName.id;
  //

for(let i=0;i<postData.length;i++){
  if(postData[i].id.toString()===tarId.toString()){
  dBodyCount=postData[i].body;
  dTitle=postData[i].title;
  }
  }
//
let collectedId=postData.find(q=>
q.id.toString()===tarId.toString()
);
let collectedId1=collectedId.userId;

//
  for(let i=0;i<userData.length;i++){

  if(userData[i].id.toString()===collectedId1.toString()){
    dEmail=userData[i].email;
      dPhone=userData[i].phone;
      dName=userData[i].name;
      dUserName=userData[i].username;
  }
}

ReactDOM.render(<PostDetail pD={postData} uD={userData} takenID={collectedId1} takenUsername={dUserName} takenPhone={dPhone} takenName={dName} takenTitle={dTitle} takenBody={dBodyCount} takenEmail={dEmail}/>,document.getElementById('root'));
}

render(){
let a=postData.find(q=>
q.title===this.props.item
);

return(
  <div onClick={this.listClickker} className="Listdiv" id={this.props.i_id}>
  <span>Post Title : {this.props.item}</span>
  <p></p>
<span> Username :<GetUsername no={a.userId} vTitle={this.props.item}/></span>
  </div>
);
}
}
//
function  GetUsername(props){
let t=postData.find(q=>
  q.title===props.vTitle
);
let vv=t.userId;
if(props.no.toString()===vv.toString()){
  let c=userData.find(q=>
        q.id===vv
        );
        return <span>{c.name}</span>;
  }
  else{
    return <span> </span>;
  }
  }

export default ListPart1;
