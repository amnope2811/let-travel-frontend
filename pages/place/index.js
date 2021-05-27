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
      Router.push('/search');
    }
  },[])

  useEffect(()=>{
    props.setData(data);
  },[data])
  // let data = (props?.reducer?.interact?.placeList||[]).find(v=>v.id==router?.query?.id);
  return (
    <>
      {data&&(
        <div className="set-image-background" style={{backgroundImage:`url(${process.env.BACKEND_URI}${data.img?.imagePath})`}}>
          <PlaceDetail {...props}/>
          <ReserveModal {...props}/>
        </div>
      )}
    </>
  );
}
