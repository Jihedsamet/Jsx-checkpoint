import Card from "react-bootstrap/Card";

function Player({ name, age, img,  }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body >

        <Card.Title> <h1>name</h1>{name}</Card.Title>
        
        <h1>{age } </h1>
        <img width={200} src={img} alt="profile"></img>

      </Card.Body>
    </Card>
  );
}

export default Player;
