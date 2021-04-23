import { Input,Typography,Card } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
const { Search } = Input;
const { Title,Text,Link  } = Typography;
let styles={
  card:{ backgroundColor:'#cccccc50',borderColor:'transparent'},
  location:{ color:'coral',padding:'6px' }
}

export default function PageDetail(props) {
  let {data} = props;
  let rating=[];
  for(let i = 0; i < data?.rating; i++) {
    if(data.rating>i+1){
      rating =[...rating,'half'];
      continue;
    }
    rating =[...rating,'full'];
  }
  console.log(data)
  return (
    <>
      {data&&(
        <Card style={styles.card}>
          <Title level={3}>{data.title}</Title>
          <div>
              <EnvironmentOutlined style={styles.location} />
              <Link href={`https://www.google.com/maps/search/${data.location}`} target="_blank" style={styles.location}>
                {data.location}
              </Link>
          </div>
          <Text>{data.description}</Text>
        </Card>
      )}
    </>
  );
}
