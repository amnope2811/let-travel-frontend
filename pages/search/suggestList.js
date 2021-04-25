import { Input,Typography,Card,Row,Col,Carousel  } from "antd";
import photo1 from 'images/img1.png';
import photo2 from 'images/img2.png';
import photo3 from 'images/img3.png';
import photo4 from 'images/img4.png';
import photo5 from 'images/img5.jpg';
const { Text } = Typography;
const {Meta} = Card;
const mock = [photo1,photo2,photo3,photo4,photo5];
const contentStyle = {
    height: '365px',
    color: 'black',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor:"#00af91"
}
export default function SearchList(props) {
  return (
    <>
        <div style={{margin:"24px"}}>
            <Row gutter={{ sm:0, md: 36}} style={{margin:"8px"}}>
                <Col md={12} sm={24}>
                    <Text style={{fontSize:"20px"}}>Most popular</Text>
                    <Carousel effect="fade" autoplay>
                        {(mock||[]).map(v=>{
                            return <>
                                <div style={contentStyle}>
                                    <Card
                                        cover={<img alt="example" height="220px" src={v}/>}
                                        style={{borderShadow:"none",borderRadius:"unset"}}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </div>
                            </>;
                        })}
                    </Carousel>
                </Col>
                <Col md={12} sm={24}>
                    <Text style={{fontSize:"20px"}}>Suggest for you</Text>
                    <Carousel effect="fade" autoplay>
                        {(mock||[]).map((v,i)=>{
                            return <>
                                <div style={contentStyle}>
                                    <Card
                                        cover={<img alt="example" height="220px" src={mock[mock.length-i-1]}/>}
                                        style={{borderShadow:"none",borderRadius:"unset"}}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </div>
                            </>;
                        })}
                    </Carousel>
                </Col>
            </Row>
        </div>
    </>
  );
}
