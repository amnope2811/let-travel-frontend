import React from "react";
import Main from "../Main";
import PlaceDetail from "./detail";
import { useRouter } from 'next/router'

export default function PlacePage(props) {
  const [data, setData] = React.useState();
  return (
    <Main>
      <ComponentDidMount/>
      <MainComponent setData={setData} data={data}/>
    </Main>
  );
}

function ComponentDidMount({ action, reducer}) {
  return <></>;
}
function MainComponent(props) {
    const router = useRouter()
    let data = (props?.reducer?.interact?.placeList||[]).find(v=>v.id==router?.query?.id);
    console.log(props);
    props.setData(data);
  return (
    <>
      <div className="set-image-background" style={{backgroundImage:`url(${data.img}) !important`}}>
        <PlaceDetail {...props}/>
      </div>
    </>
  );
}
