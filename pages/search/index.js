import React from "react";
import Main from "../Main";
import SearchPad from "./searchPad";
import SearchList from "./searchList";

export default function SearchPage(props) {
  return (
    <Main>
      <ComponentDidMount/>
      <MainComponent />
    </Main>
  );
}

function ComponentDidMount({ action, reducer}) {
  return <></>;
}
function MainComponent(props) {
  return (
    <>
      <div className="normal-background">
        <SearchPad {...props}/>
        <SearchList {...props}/>
      </div>
    </>
  );
}
