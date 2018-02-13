import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import PostLister from './PostLister';
//import App from './App';
//import $ from 'jquery';


//ReactDOM.render(<App />, document.getElementById('root'));
window.onload=function(){
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
      //console.log(dataPost);
      for(let i = 0; i < dataPost.length; i++){
        //console.log(dataPost[i].title);
        //console.log(findUser(userData, dataPost[i].userId)[0]['name']);
        //eArra.push(findUser(userData,dataPost[i].userId)[0]['name']);
        /*
        if(dataPost[i]['userId']==1){
console.log("userid: "+dataPost[i].userId);
console.log("title: "+dataPost[i].title);
console.log("body: "+dataPost[i].body);
console.log("id: "+dataPost[i].id);
console.log("---------------------------");
*/
}

/*
  for(let y=0;y<postData.length;y++){
    //if(postData[y].userId===1){
      //console.log(postData[y].title);
      //console.log(postData[y].userId);
    //}

  }
*/
        //console.log(findUser(userData, dataPost[i].userId)[0]['username']);
        //console.log("- - - - - - - -");





      //console.log(eArra);
      console.log(userData);
for(let i=0;i<userData.length;i++){
  uName.push(userData[i].name);
}
for(let i=0;i<postData.length;i++){
  pTitle.push(postData[i].title);
}
/*
for(let i=0;i<postData.length;i++){
  pTitle.push(postData[i].title);
}
for(let i=0;i<postData.length;i++){
  pBody.push(postData[i].body);
}

for(let i=0;i<uName.length;i++){
  console.log(uName[i]);
  console.log(uID[i]);
}
for(let i=0;i<pBody.length;i++){
  console.log(pBody[i]);
  console.log(pTitle[i]);
}
*/
      //console.log(postData);
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
  //alert(e.target.id);
  console.log(postData);
  for(let i=0;i<postData.length;i++){
    if(postData[i].id.toString()===e.target.id.toString()){
    dBodyCount.push(postData[i].body);
  }
  }
  for(let i=0;i<userData.length;i++){
    if(userData[i].id.toString()===e.target.id.toString()){
    dName=userData[i].name;
  }
  }
  for(let i=0;i<postData.length;i++){
    if(postData[i].id.toString()===e.target.id.toString()){
    dTitle=postData[i].title;
  }
  }

//alert("Name :"+dName+" Title :"+dTitle+"id :"+e.target.id);
  //ReactDOM.render(<PostLister takenID={e.target.id} takenName={dName} takenTitle={dTitle} takenBody={dBodyCount}/>,document.getElementById('root'));
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
  /*
    if(props.no.toString()===vv){
      var c=userData.find(q=>
            q.id===2
            );
              return <span>{c.name}</span>

    }

        if(props.no.toString()===vv){
          var c=userData.find(q=>
                q.id===3
                );
                  return <span>{c.name}</span>
        }

            if(props.no.toString()===vv){
              var c=userData.find(q=>
                    q.id===4
                    );
                      return <span>{c.name}</span>
            }

                if(props.no.toString()===vv){
                  var c=userData.find(q=>
                        q.id===5
                        );
                          return <span>{c.name}</span>
                }

                    if(props.no.toString()===vv){
                      var c=userData.find(q=>
                            q.id===6
                            );
                              return <span>{c.name}</span>
                    }

                        if(props.no.toString()===vv){
                          var c=userData.find(q=>
                                q.id===7
                                );
                                  return <span>{c.name}</span>
                        }

                            if(props.no.toString()===vv){
                              var c=userData.find(q=>
                                    q.id===8
                                    );
                                      return <span>{c.name}</span>
                            }

                                if(props.no.toString()===vv){
                                  var c=userData.find(q=>
                                        q.id===9
                                        );
                                          return <span>{c.name}</span>
                                }

                                    if(props.no.toString()===vvv){
                                      var c=userData.find(q=>
                                            q.id===10
                                            );
                                              return <span>{c.name}</span>
                                    }
                                    */

  }




}
