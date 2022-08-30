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
// // import List from './List';
// // import SearchBar from './SearchBar';
// import {Users} from '../data/year';

// export default SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   console.log(searchTerm);
//   return (
//     <ScrollView>
//       <TextInput
//         style={styles.input}
//         type="text"
//         placeholder=""
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       {Users.map(user => (
//         // <Text key={Users.id}>{Users.year}</Text>
//         <Text styles={styles.text}>2020</Text>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   view: {
//     flex: 1,
//     // alignItems: 'center',
//     // padding: 10,
//     // backgroundColor: 'white',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: 'red',
//   },
//   text: {
//     fontSize: '10px',
//   }
// });
