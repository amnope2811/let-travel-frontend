import { Input,Typography,Card,Button } from "antd";
import { EnvironmentOutlined, StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
const { Search } = Input;
const { Title,Text,Link  } = Typography;
let styles={
  price: {position:'absolute',right:'7%',fontWeight:'bold'},
  card:{ backgroundColor:'#f1f1f1c7',borderColor:'transparent'},
  location:{ color:'#ff4a08',padding:'6px' },
  rating:{ color:'#ffc800',padding:'1px'},
  currentprice:{fontSize:'20px',padding:'4px',color:'mediumspringgreen'},
  fullprice:{textDecoration:'line-through',fontSize:'16px',padding:'4px',color:'darkorange'},
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
  let onClickBook=()=>{
    props.setIsRenderModal(true);
  }
  return (
    <>
      {data&&(
        <Card style={styles.card}>
          <div style={styles.price}>
            <Text style={styles.currentprice}>{`฿ ${data.currentprice}`}</Text>
            {data.currentprice!=data.fullprice ? <Text style={styles.fullprice}>{data.fullprice}</Text>:null}
          </div>
          <Title level={3}>{data.name}</Title>
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
            <Button type="primary" onClick={onClickBook}>Book now</Button>
          </div>
          
        </Card>
      )}
    </>
  );
}
