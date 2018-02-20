import React from "react";
import './index.css';
import ShowComments2 from "./ShowComments2"
class ShowComment extends React.Component{
  constructor(props){
  super(props);
      this.state={vBody:[],vTitle:[]};
  }

  render(){
    let TitleArra=[],BodyArra=[];
    let Email=this.props.takenEmail;
    let pD=this.props.poD;
    let id=this.props.takenID;
for(let i=0;i<pD.length;i++){
  if(pD[i].userId.toString()===id.toString()){
    TitleArra.push(pD[i].title);
    BodyArra.push(pD[i].body);
  }
}
let mappa=TitleArra;
let i=-1;
mappa=mappa.map(function(item,index){
    i++;
  return(
    <ShowComments2 item={item} key={index} tTitle={TitleArra[i]} tBody={BodyArra[i]} tEmail={Email} />

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



export default ShowComment;
