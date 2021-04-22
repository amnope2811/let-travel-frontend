import React from "react";
import Main from "../Main";
import SearchPad from "./searchpad";
import SearchList from "./searchList";
import SuggestList from "./suggestList";

export default function SearchPage(props) {
    const [searchValue, setSearchValue] = React.useState();
  return (
    <Main>
      <ComponentDidMount/>
      <MainComponent setSearchValue={setSearchValue} />
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
        <SuggestList {...props}/>
      </div>
    </>
  );
}
