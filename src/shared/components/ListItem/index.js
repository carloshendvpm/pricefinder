import React from 'react';
import { TouchableOpacity, View,Text } from 'react-native';
import { List, Divider } from 'react-native-paper'

export default function ListItem(props) {
 return (
   <TouchableOpacity>
       <List.Item
      title={props.title}
      description={props.description}
      right={props => <Text>{props.price || '0'}</Text>}
      />
      <Divider/>
   </TouchableOpacity>
  );
}