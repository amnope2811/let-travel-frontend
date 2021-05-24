import { Input,Typography } from "antd";
const { Search } = Input;
const { Title } = Typography;
export default function SearchPad(props) {
  const { setSearchValue } = props;
  const { loading_results } = props.reducer.component;
  const onSearch = (e)=>{
      setSearchValue(e);
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
