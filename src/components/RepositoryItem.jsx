import { View, Text, Image, StyleSheet } from "react-native";

const RepositoryItem = (props) => {
  return (
    <View style={styles.container} key={props.id}>
    <Text style={styles.Strong}> id: {props.id}</Text>
    <Text>fullName: {props.fullName}</Text>
    <Text>Description: {props.description}</Text>
    <Text>Language: {props.language}</Text>
    <Text>Stars: {props.stargazersCount}</Text>
    <Text>Forks: {props.forksCount}</Text>
    <Text>Rating: {props.ratingAverage}</Text>
    <Text>Review: {props.reviewCount}</Text>
    <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  Strong: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
    color: "#09f"
  },
  image: {
    width: 40,
    height: 40
  }
})

export default RepositoryItem