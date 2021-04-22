import { Input,Typography,List,Skeleton,Button  } from "antd";
import React from "react";
const { Search } = Input;
const { Text } = Typography;
const Item = List.Item;
const Meta = Item.Meta;
const mock = [
    {id:'01',title:'testtt',description:'1234',tag:"Remain 2 Seats"},
    {id:'02',title:'testtt',description:'1234',tag:"Full"},
]
export default function SearchPad(props) {
    const [loading, setLoading] = React.useState();
    let onLoadMore =()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000)
    }
    let loadMore = (
        <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button onClick={onLoadMore}>loading more</Button>
        </div>
    )
    let clickList=(e)=>{
        console.log(e)
    }
  return (
    <>
      <List
        style={{margin:"6px 0"}}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={mock}
        renderItem={item => (
          <Item key={item.id} style={{cursor:"pointer",padding:"16px"}} onClick={()=>clickList(item)}>
            <Skeleton avatar title={false} loading={loading} active>
              <Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
              <div><Text code>{item.tag}</Text></div>
            </Skeleton>
          </Item>
        )}
      />
    </>
  );
}
