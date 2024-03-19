import {
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data = [
  {
    id: 123,
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 456,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`bg-gray-200  p-2 pl-6 m-2  w-40 pb-8`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`font-semibold text-lg mt-2`}>{item.title}</Text>
            <Icon
              name="arrowright"
              color="white"
              type="antdesign"
              style={tw`bg-black rounded-full p-2 mt-4 w-10`}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
