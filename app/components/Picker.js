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
import Text from "./Text";
import Screen from "./Screen";
import Button from "./Button";
import PickerItems from "./PickerItems";

function Picker({
  iconName,
  items,
  onSelectedItem,
  placehoder,
  numColumns,
  selectedItem,
  PickerItemsComponent = PickerItems,
  width = "100%",
}) {
  /**
   * @description Picker for all pickerItem in app
   * @param items data for Flatlist after touched Picker
   * @param placeholder placeholder for Picker
   * @event onSelectedItem and selectedItem
   */
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {iconName && (
            <MaterialCommunityIcons
              color={defaultStyles.colors.medium}
              size={20}
              name={iconName}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placehoder}>{placehoder}</Text>
          )}

          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            size={20}
            name="chevron-down"
          />
        </View>
      </TouchableWithoutFeedback>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <Screen style={styles.modalContainer}>
          <Button
            title="Close"
            color="danger"
            onPress={() => setModalVisible(false)}
          ></Button>
          <FlatList
            data={items}
            numColumns={numColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemsComponent
                item={item}
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
  placehoder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
  text: {
    flex: 1,
  },
  modalContainer: {
    padding: 5,
  },
});

export default Picker;
