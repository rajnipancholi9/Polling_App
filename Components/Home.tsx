import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function Home({navigation}: any) {
  const [post, setPosts] = useState<any>([]);
  const [page, setPage] = useState<any>(1);

  useEffect(() => {
    getData();
    // console.warn(page)
    const intervalId = setInterval(() => {
      // getData();
      loadMoreItem();
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [page]);

  const getData = () => {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        // setPosts(data.hits);
        setPosts([...post, ...data.hits]);
        //console.warn("dede",post)
      })

      .catch(error => {
        console.error(error);
      });
  };

  const renderLoader = () => {
    return (
      <View style={{marginVertical: 0, alignItems: 'center'}}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  };

  const loadMoreItem = () => {
    setPage(page + 1);
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={post}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('JsonData', {
                  input: JSON.stringify(item, null, 4),
                });
              }}>
              <View style={styles.View1}>
                <View style={styles.View2}>
                  <Text style={styles.Title}>Title :{item.title}</Text>
                  <Text style={styles.Text1}>URL : {item.url}</Text>
                  <Text style={styles.Text1}>
                    Created at : {item.created_at}
                  </Text>
                  <Text style={styles.Text1}>Author : {item.author}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  View1: {
    backgroundColor: '#ffffe0',
  },
  View2: {
    margin: 0.1,
    Width: '100%',
    borderWidth: 1,
  },

  Title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textShadowColor: 'yellow',
    textShadowRadius: 3,
  },

  Text1: {
    fontSize: 18,
    padding: 10,
    margin: 1,
    color: 'black',
  },
});

export default Home;
