import React,{useEffect} from "react";
import Main from "../Main";
import Router from 'next/router';
import StylePlace from './stylePlace';
import SuggestList from "./suggestList";

export default function ExplorePage(props) {
  return (
    <Main>
      <ComponentDidMount/>
      <MainComponent/>
    </Main>
  );
}

function ComponentDidMount({ action, reducer}) {
  return <></>;
}
function MainComponent(props) {
    const {reducer} = props;
  return (
    <>
        <StylePlace {...props}/>
        <SuggestList {...props}/>
    </>
  );
}
