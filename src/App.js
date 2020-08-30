import React from "react";
import Comment from "./Components/Comment";
import Card from "./Components/Card";
import faker from "faker";

function App() {
  return (
    <div className="ui container comments">
      <Card>
        <Comment
          author={faker.name.firstName()}
          timeAgo="Today at 23:34PM"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </Card>
      <Card>
        <Comment
          author={faker.name.firstName()}
          timeAgo="Yesterday at 4:05PM"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </Card>
      <Card>
        <Comment
          author={faker.name.firstName()}
          timeAgo="Yesterday at 4:05PM"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </Card>
    </div>
  );
}
export default App;
