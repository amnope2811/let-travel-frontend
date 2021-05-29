import { Input,Typography } from "antd";
const { Title } = Typography;
import React from "react";
export default function SearchPad(props) {
  const { loading_results } = props.reducer.component;
  const [searchValue,setSearchValue] = React.useState();
  const {search} = props.reducer.interact||{};
  
  React.useEffect(()=>{
    props.action?.api?.clearPlace();
    props.action.api.listPlace({q:search||'',type:'PLACE'});
  },[search])

  const onSearch = (e,t)=>{
      props.action.interact.clearPlace();
      props.action?.interact?.putSearch(e);
  }
  const onChange = (e)=>{
    console.log(e);
    setSearchValue(e.target.value);
  }
  return (
    <>
      <div>
        <Title level={3}>Find More</Title>
        <Input.Search placeholder="input search text" onSearch={onSearch} value={searchValue||search} onChange={onChange}/>
      </div>
    </>
  );
}
