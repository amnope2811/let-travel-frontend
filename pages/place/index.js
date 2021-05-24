import React,{useEffect} from "react";
import Main from "../Main";
import PlaceDetail from "./detail";
import ReserveModal from "./reserveModal";
import { useRouter } from 'next/router';

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
  const router = useRouter()

  useEffect(() =>{
    const data = (props?.reducer?.interact?.placeList||[]).find(v=>v.id==router?.query?.id);
    props.setData(data);
  })
    
  let data = (props?.reducer?.interact?.placeList||[]).find(v=>v.id==router?.query?.id);
  return (
    <>
      {data&&(
        <div className="set-image-background" style={{backgroundImage:`url(${data.img})`}}>
          <PlaceDetail {...props}/>
          <ReserveModal {...props}/>
        </div>
      )}
    </>
  );
}
