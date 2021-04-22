import { Input } from "antd";
const { Search } = Input;
export default function ResultPeriod(props) {
  const { setSearchValue } = props;
  const { loading_results } = props.reducer.component;
  const onSearch = (e)=>{
      console.log(e)
  }
  return (
    <>
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    </>
  );
}
