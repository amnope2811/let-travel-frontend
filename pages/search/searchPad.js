import { Input,Typography } from "antd";
const { Search } = Input;
const { Title } = Typography;
export default function SearchPad(props) {
  const { loading_results } = props.reducer.component;

  
  React.useEffect(()=>{
    onSearch('','PLACE');
  },[])

  const onSearch = (e,t)=>{
      props.action?.api?.clearPlace();
      props.action.api.listPlace({q:e,type:t||'PLACE'});
  }
  return (
    <>
      <div>
        <Title level={3}>Find More</Title>
        <Search placeholder="input search text" onSearch={onSearch} />
      </div>
    </>
  );
}
