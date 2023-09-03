import Player from "./Player";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Playerlist ({}) {

    const players =[{ name:"Ronaldo",
    img:"https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-videoSixteenByNine3000.jpg",
    number:"9",
    age:"35",
    nationality:"portugal"},

    {name:"veratti",
    number:"7",
    age:"29",
    img:"https://www.jeunesfooteux.com/photo/art/grande/74939295-52350925.jpg?v=1693422682"},

    {name:"zidane",
    number:"10",
    age:"45",
    img:"https://media.gqmagazine.fr/photos/62b485c40e1f7240646a6a5a/16:9/w_2560%2Cc_limit/Zidane-2006-Domenech.jpg"},

    {name:"Ibrahimovic",
    number:"9",
    age:"39",
    img:" https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt566f06ed605a588a/60db4970bbd30c0f67e0a4d1/c3b68f13efb364f65fe222d984a3ef5a74e1c719.jpg?auto=webp&format=pjpg&width=3840&quality=60"},

    ];

return (
<>
<Container>
      <Row>
{players.map(player => (
    <Col>
      <Player name={player.name} img={player.img} age={player.age} nationality={player.nationality}/>
      </Col>
))}
 </Row>
    </Container>
</>
)

}



export default Playerlist ;