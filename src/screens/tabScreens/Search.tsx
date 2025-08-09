import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<User[]>([]);
  const [query, setQuery] = useState('');

  const API = 'https://dummyjson.com/users';

  useEffect(() => {
    setIsLoading(true);
    fetchData(API);
  }, []);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.users);
      setIsLoading(false);
      console.log(json.users);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const filtered = data.filter((item) =>
    item.firstName.toLowerCase().includes(query.toLowerCase()) ||
    item.lastName.toLowerCase().includes(query.toLowerCase()) ||
    item.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search users..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
      <View>
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{flexDirection:'row'}}>
                <Image source={{uri: item.image}} style={{height:40, width:40, borderRadius:25}} />
              <View style={styles.result}>
                <Text style={{fontWeight:'bold'}}>
                  {item.firstName} {item.lastName}
                </Text>
                <Text>
                {item.email}
                </Text>
              </View>
            </View>
          )}
        />
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor:'#FFFFFF', marginBottom:30 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 16,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
