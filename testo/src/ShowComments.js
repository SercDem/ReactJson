import React from "react";

class ShowComment extends React.Component{
  constructor(props){
  super(props);
      this.state={vBody:[],vTitle:[]};
  }

  render(){
    var TitleArra=[];
    var BodyArra=[];

    var Body=this.props.takenBody;
    var Title=this.props.takenTitle;
    var Email=this.props.takenEmail;
    var uD=this.props.usD;
    var pD=this.props.poD;
    var id=this.props.takenID;
for(let i=0;i<pD.length;i++){
  if(pD[i].userId.toString()===id.toString()){
    TitleArra.push(pD[i].title);
    BodyArra.push(pD[i].body);
  }
}

console.log(TitleArra);
var mappa=TitleArra;
var i=-1;
mappa=mappa.map(function(item,index){
    i++;
  return(
    <Sc2 item={item} key={index} tTitle={TitleArra[i]} tBody={BodyArra[i]} tEmail={Email} />

  )

});
    return(
<div>
<ul>
{mappa}
</ul>
</div>
    );
  }
}
class Sc2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <div className="Listdiv">
<span>Title Name :{this.props.tTitle}</span><p></p>
<span>Email :{this.props.tEmail}</span>
      </div>
      <div className="Listdivbody">
      <span>Body :{this.props.tBody}</span>
      </div>
      </div>
    );
  }
}


export default ShowComment;
