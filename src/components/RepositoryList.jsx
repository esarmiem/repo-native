import { View, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const Repositorylist = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    />
  );
};

export default Repositorylist;
