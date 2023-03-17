import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";

const StackView = ({ navigation }) => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      content: "This is the first post",
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the second post",
    },
    {
      id: 4,
      title: "Post 4",
      content: "This is the fourth post",
    },
    {
      id: 5,
      title: "Post 5",
      content: "This is the fifth post",
    },
    {
      id: 6,
      title: "Post 6",
      content: "This is the sixth post",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Landing")}
        >
          <Text style={{ color: "gray" }}>Go Back</Text>
        </TouchableOpacity>
        {posts.map((post, index) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "10%",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    width: "100%",
  },
  backBtn: {
    padding: 10,
    marginVertical: 26,
    marginLeft: 9,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "21%",
  },
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  postContainer: {
    flex: 1,
    paddingHorizontal: 10,
    
  },
  post: {
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 40
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
  },
});

export default StackView;
