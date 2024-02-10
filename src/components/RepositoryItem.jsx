import { View, Text, Image, StyleSheet } from "react-native";

const RepositoryItem = (props) => {
  return (
    <View style={styles.container} key={props.id}>
    <Text style={styles.Strong}> id: {props.id}</Text>
    <Text style={styles.textNormal} >fullName: {props.fullName}</Text>
    <Text style={styles.textNormal} >Description: {props.description}</Text>
    <Text style={styles.textNormal} >Language: {props.language}</Text>
    <Text style={styles.textNormal} >Stars: {props.stargazersCount}</Text>
    <Text style={styles.textNormal} >Forks: {props.forksCount}</Text>
    <Text style={styles.textNormal} >Rating: {props.ratingAverage}</Text>
    <Text style={styles.textNormal} >Review: {props.reviewCount}</Text>
    <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F7F4EA",
    margin: 12,
    borderRadius: 10
  },
  Strong: {
    fontWeight: "bold",
    fontFamily: "monospace",
    marginBottom: 5,
    fontSize: 20,
    color: "#09f"
  },
  textNormal: {
    fontFamily: "monospace",
    marginBottom: 2,
    fontSize: 16
  },
  image: {
    width: 40,
    height: 40,
    marginTop: 5
  }
})

export default RepositoryItem