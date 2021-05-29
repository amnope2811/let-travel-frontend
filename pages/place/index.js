import React,{useEffect} from "react";
import Main from "../Main";
import PlaceDetail from "./detail";
import ReserveModal from "./reserveModal";
import Router from 'next/router';

export default function PlacePage(props) {
  const [data, setData] = React.useState();
  const [isRenderModal, setIsRenderModal] = React.useState(false);
  let state ={data,setData,isRenderModal,setIsRenderModal};
  return (
    <Main>
      <ComponentDidMount/>
      <MainComponent {...state}/>
    </Main>
  );
}

function ComponentDidMount({ action, reducer}) {
  return <></>;
}
function MainComponent(props) {
  let data = props?.reducer?.interact?.place?.item;
  
  useEffect(()=>{
    if(data==null){
      Router.push('/explore');
    }
  },[])

  useEffect(()=>{
    props.setData(data);
  },[data])

  return (
    <>
      {data&&(
        <div className="set-image-background" style={{backgroundImage:`url(http://150.95.30.29:8081${data.img?.imagePath})`}}>
          <PlaceDetail {...props}/>
          <ReserveModal {...props}/>
        </div>
      )}
    </>
  );
}
