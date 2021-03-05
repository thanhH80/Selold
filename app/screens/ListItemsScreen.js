import React, { useEffect } from "react";
import { FlatList, LogBox, StyleSheet } from "react-native";

import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listings";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../components/hooks/useApi";
import Text from "../components/Text";

function ListItemsScreen({ navigation }) {
  LogBox.ignoreAllLogs(true);

  const gettingApi = useApi(listingApi.getData);

  useEffect(() => {
    gettingApi.request();
  }, []);

  return (
    <Screen style={styles.container}>
      {gettingApi.error && (
        <>
          <Text>Counld't load lisitng!</Text>
          <Button title="Retry" onPress={gettingApi.request} />
        </>
      )}
      <ActivityIndicator visible={gettingApi.loading} />
      <FlatList
        keyExtractor={(listing) => listing.id.toString()}
        data={gettingApi.data}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
  },
});

export default ListItemsScreen;
