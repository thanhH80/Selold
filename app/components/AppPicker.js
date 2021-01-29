import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import AppButton from "./AppButton";
import PickerItems from "./PickerItems";

function AppPicker({
  iconName,
  items,
  onSelectedItem,
  placehoder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              color={defaultStyles.colors.medium}
              size={20}
              name={iconName}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placehoder}
          </AppText>
          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            size={20}
            name="chevron-down"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <AppButton
            title="Close"
            color="danger"
            onPress={() => setModalVisible(false)}
          ></AppButton>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItems
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    height: 50,
    width: "100%",
    marginVertical: 10,
    padding: 15,
  },
  icon: {
    justifyContent: "center",
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;