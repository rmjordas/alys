import React from 'react';
import List from 'alys/List';
import ListItem from 'alys/ListItem';

/** A list of basic <ListItem /> items */
export default function ExampleBasic() {
  return (
    <List>
      <ListItem>
        You will learn how to develop your career and make money as a
        professional photographer.
      </ListItem>
      <ListItem>
        You will learn how to take awesome photos that impress your family,
        friends and colleagues.
      </ListItem>
      <ListItem>
        You will learn how to compose images by following the essential rules of
        photography.
      </ListItem>
    </List>
  );
}
