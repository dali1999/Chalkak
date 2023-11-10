// import React, { useEffect, useState, useRef } from "react";
// import {
//   Text,
//   View,
//   TextInput,
//   Button,
//   FlatList,
//   SafeAreaView,
// } from "react-native";
// import { io } from "socket.io-client";
// import { NRROK_ADDRESS } from "../hook/config";
// import styles from "./chatScreen.style";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const socket = io(`${NRROK_ADDRESS}`); // Connect to the Socket.IO server

// export default function ChatScreen({ route }) {
//   const { photographer } = route.params;

//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const flatListRef = useRef();

//   // Load chat messages from local storage when the component mounts
//   useEffect(() => {
//     const loadMessages = async () => {
//       try {
//         const savedMessages = await AsyncStorage.getItem("chatMessages");
//         if (savedMessages) {
//           setMessages(JSON.parse(savedMessages));
//         }
//       } catch (error) {
//         console.error("Error loading messages from storage:", error);
//       }
//     };

//     loadMessages();
//   }, []);

//   // Listener for receiving chat messages
//   useEffect(() => {
//     socket.on("chat message", (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       flatListRef.current.scrollToEnd({ animated: true });
//     });

//     // Clean up the socket connection when the component unmounts.
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   // Function to send a chat message
//   const handleSendMessage = () => {
//     const newMessage = { text: message, isSent: true };
//     setMessages([...messages, newMessage]);

//     // Save chat messages to local storage
//     AsyncStorage.setItem(
//       "chatMessages",
//       JSON.stringify([...messages, newMessage])
//     );

//     // Emit the message to the server
//     socket.emit("chat message", newMessage);

//     setMessage("");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={{ paddingTop: 10, fontSize: 20 }}>
//         '{photographer.username}'님과의 대화
//       </Text>
//       <FlatList
//         ref={flatListRef}
//         style={{ backgroundColor: "ivory" }}
//         data={messages}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Text
//             style={{
//               alignSelf: item.isSent ? "flex-end" : "flex-start",
//               backgroundColor: item.isSent ? "lightblue" : "lightgreen",
//               padding: 5,
//               margin: 5,
//               maxWidth: "70%",
//               borderRadius: 10,
//             }}
//           >
//             {item.text}
//           </Text>
//         )}
//         inverted={false}
//       />
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: "gray",
//           borderWidth: 1,
//           marginBottom: 10,
//         }}
//         onChangeText={(text) => setMessage(text)}
//         value={message}
//       />
//       <Button title="Send" onPress={handleSendMessage} />
//     </SafeAreaView>
//   );
// }
