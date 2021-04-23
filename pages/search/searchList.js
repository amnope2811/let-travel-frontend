import { Input,Typography,List,Skeleton,Button  } from "antd";
import React from "react";
const { Search } = Input;
const { Text } = Typography;
const Item = List.Item;
const Meta = Item.Meta;
import Router from "next/router";
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
            <Button type="primary" onClick={onLoadMore}>loading more</Button>
        </div>
    )
    let clickList=(e)=>{
      props.action.interact.postPlace({item:e})
      Router.push(`/place?id=${e.id}`)
        console.log(e)
    }
  return (
    <>
      <List
        style={{margin:"6px 0"}}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={props?.reducer?.interact?.placeList}
        renderItem={item => (
          <Item key={item.id} style={{cursor:"pointer",padding:"16px"}} onClick={()=>clickList(item)}>
            <Skeleton avatar title={false} loading={loading} active>
              <Meta
                title={item.title}
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
