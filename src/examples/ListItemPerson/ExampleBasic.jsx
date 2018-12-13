import React from 'react';
import ListItemPerson from 'alys/ListItemPerson';

import alys from '../../docs/assets/alys.jpg';

/** Basic person list item */
export default function ExampleBasic() {
  return (
    <ListItemPerson
      active
      name="Alys Zhu"
      detail="Astronomer"
      avatar={alys}
      moreOptionsActions={[]}
    />
  );
}
