import React from "react";
import './index.css';
import $ from "jquery";
import ShowComment from "./ShowComments";
class PostDetail extends React.Component{
constructor(props){
super(props);
this.state={v5:false};
this.infoPart=this.infoPart.bind(this);
}

infoPart(){

  if(this.state.v5===false){
  this.setState({v5:true});
$('#showcomment').show();
}
else{
  $('#showcomment').hide();
  this.setState({v5:false});
}
}
render(){
  var i_id=this.props.takenID;
  var Username=this.props.takenUsername;
  var Name=this.props.takenName;
  var Email=this.props.takenEmail;
  var Phone=this.props.takenPhone;
  var Title=this.props.takenTitle;
  var Body=this.props.takenBody;
  var uD=this.props.uD;
  var pD=this.props.pD;
  return(
    <div>
    <h1>Post Detail</h1>
    <div className="Listdiv">
    <span>Post Title :{Title}</span>
    <p></p>
    <span>Username :{Name}</span>
    </div>
    <div className="Listdivbody">
    Post Body :{Body}

    </div>

<h1>Author</h1>
    <div className="AuthorDiv">
<div className="leftdiv">User</div><div className="rightdiv">{Name}</div>
<div className="leftdiv">Username</div><div className="rightdiv">{Username}</div>
<div className="leftdiv">Email</div><div className="rightdiv">{Email}</div>
<div className="leftdiv">Phone</div><div className="rightdiv">{Phone}</div>
    </div>
<span id="linkforinfo" onClick={this.infoPart}>Show Comments</span>
<div id="showcomment" style={{display: 'none'}}>
<ShowComment takenID={i_id} usD={uD} poD={pD} takenEmail={Email} takenTitle={Title} takenBody={Body} />
</div>
    </div>
  );
}

}
export default PostDetail;
