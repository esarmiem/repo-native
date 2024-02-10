import { View } from "react-native";
import Repositorylist from "./RepositoryList";

const Main = () => {
  return (
    <View style={{ marginTop: 7, flexGrow: 1, backgroundColor: "#322933" }}>
      <Repositorylist />
    </View>
  );
};

export default Main;
