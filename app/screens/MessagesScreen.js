import React, { useState } from "react";

import { FlatList, StyleSheet, View } from "react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";

import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/my-avt.jpg"),
  },
  {
    id: 3,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "T2",
    description: "D2",
    image: require("../assets/my-avt.jpg"),
  },
];

function MessagesScreen(props) {
  //like setState function
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  //Delete the message form messages
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id != message.id);
    setMessages(newMessages);
  };

  // data: is data for List
  //     keyExtractor: is key in sql key must be string or coverted to string
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Tapped ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevron
          />
        )}
        // render between items, truyen vao 1 view, co the truyen vao nhu la nhung duong ke phan biet items
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title:
                "Lorem ipsum dolor sit amet consectetur adipisicing " +
                "elit. uptatum quis numquam inventore voluptas aliquam omnis odio? Et porro aut sequi ratione voluptas repellat inventore cumque, neque in nam alias voluptates tempore veniam maiores ab ipsa ut explicabo cupiditate deleniti placeat dolore iste molestiae architecto! Modi ex reiciendis expedita animi cupiditate incidunt, unde amet saepe vel inventore earum blanditiis sequi quis atque deleniti repudiandae quia mollitia eveniet nam veritatis sint error fugit consectetur. Possimus consectetur perspiciatis illo quas saepe, iste facilis. Sit deserunt vero illo, eius amet excepturi tenetur totam magni eligendi fugiat, tempora omnis temporibus nobis ad voluptate corrupti. Odit?",
              description: "D1",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 4,
              title: "T2",
              description: "D2",
              image: require("../assets/my-avt.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
