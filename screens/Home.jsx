import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Text>찰칵 홈페이지</Text>
      </View>

      <ScrollView></ScrollView>
    </SafeAreaView>
  );
}
