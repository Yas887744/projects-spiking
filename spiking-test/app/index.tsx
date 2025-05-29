import { Text, View } from "react-native";
import { getCategories } from "../back-end/getCategories"
import { useEffect, useState } from "react";
export default function Index() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      console.log("Categories fetched:", data);
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
{categories.map((category, index) => (
      <Text key={index} style={{ fontSize: 20, margin: 10 }}>
          {category.name}
        </Text>
      ))}
     
    </View>
  );
}
