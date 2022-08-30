// import React, {useEffect, useState} from 'react';
// import {
//   FlatList,
//   TextInput,
//   Text,
//   View,
//   StyleSheet,
//   ScrollView,
//   Image,
// } from 'react-native';

// export default GetAPI = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const fetchData = async () => {
//     const res = await fetch('https://api.inaturalist.org/v1/observations');
//     const data = await res.json();
//     setData(data.results);
//     console.log('obersvation is', data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//     console.log('setData ', setData);
//   }, []);

//   //filter function
//   // useEffect(() => {
//   //   const data = data.filter(data =>
//   //     data.quality_grade.toLowerCase().includes(searchTerm.toLowerCase()),
//   //   );
//   //   setSearchTerm(data);
//   // }, [searchTerm]);

//   console.log(searchTerm);
//   return (
//     <ScrollView>
//       {!loading && <Text>loading...</Text>}

//       <TextInput
//         style={styles.input}
//         type="text"
//         placeholder=""
//         onChangeText={value => setSearchTerm(value)}
//       />

//       {data
//         .filter(val => {
//           if (searchTerm === 'Year') {
//             return <Text>{val.observed_on_details.year}</Text>;
//           }
//         })
//         .map((val, key) => {
//           return (
//             <View>
//               <Text> {val.observed_on_details.year}</Text>
//             </View>
//           );
//         })}

//       {data.map(result => {
//         //gets taxon name
//         return <Text key={data.id}>{result?.taxon?.name}</Text>;
//       })}

//       {/* <FlatList
//         data={data}
//         // keyExtractor={item => item.quality_grade.toString()}
//         renderItem=({ item }) => {
//         return (
//           <Image
//               resizeMode='center'
//               style={styles.image}
//               source={{ uri: item.images.taxon.url }}
//           />
//         ) */}
//       <Image
//         style={styles.image}
//         source={{
//           uri: 'https://inaturalist-open-data.s3.amazonaws.com/photos/226317638/square.jpg',
//         }}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   view: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: 'white',
//   },
//   image: {
//     backgroundColor: 'red',
//     width: 230,
//     height: 150,
//     borderWidth: 3,
//     marginBottom: 5,
//     // marginBottom: 85,
//   },
//   loading: {
//     height: 50,
//     justifyContent: 'center',
//     fontSize: 50,
//     padding: 60,
//     color: 'white',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
