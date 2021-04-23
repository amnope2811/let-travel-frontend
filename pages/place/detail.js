import { Input,Typography,Card,Button } from "antd";
import { EnvironmentOutlined, StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
const { Search } = Input;
const { Title,Text,Link  } = Typography;
let styles={
  prize: {position:'absolute',right:'7%',fontWeight:'bold'},
  card:{ backgroundColor:'#ffecec80',borderColor:'transparent'},
  location:{ color:'coral',padding:'6px' },
  rating:{ color:'#ffc800',padding:'1px'},
  currentPrize:{fontSize:'20px',padding:'4px',color:'mediumspringgreen'},
  fullPrize:{textDecoration:'line-through',fontSize:'16px',padding:'4px',color:'darkorange'},
  description:{margin:'18px 0'}
}

export default function PageDetail(props) {
  let {data} = props;
  let rating=[];
  for(let i = 0; i < 5; i++) {
    if(data?.rating >=i+1){
      rating =[...rating,'full'];
    }else if(data && data.rating<i+1 && data.rating>i){
      rating =[...rating,'half'];
    }else{
      rating =[...rating,'empty'];
    }
  }
  console.log(props.action)
  return (
    <>
      {data&&(
        <Card style={styles.card}>
          <div style={styles.prize}>
            <Text style={styles.currentPrize}>{`฿ ${data.currentPrize}`}</Text>
            {data.currentPrize!=data.fullPrize ? <Text style={styles.fullPrize}>{data.fullPrize}</Text>:null}
          </div>
          <Title level={3}>{data.title}</Title>
          <div>
              <EnvironmentOutlined style={styles.location} />
              <Link href={`https://www.google.com/maps/search/${data.location}`} target="_blank" style={styles.location}>
                {data.location}
              </Link>
          </div>
          <div>
            {rating.map(v=>{
              return(
                <>
                  {v=='full'?
                      <StarFilled style={styles.rating}/> 
                      : v=='half'?
                        <StarTwoTone twoToneColor={styles.rating.color} />
                        :<StarOutlined style={styles.rating}/>
                  }
                </>
              )
            })}
          </div>
          <div style={styles.description}>
            <Text style={{margin:'24px'}}>{data.description}</Text>
          </div>

          <div style={{textAlign:'center'}}>
            <Button type="primary">Book now</Button>
          </div>
          
        </Card>
      )}
    </>
  );
}
