import React, { Fragment, useEffect, useState } from "react";
import { Text, StyleSheet, View } from 'react-native'
import { Promise } from "bluebird";

Promise.config({
  cancellation: true,
});

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Adam",
      });
    }, 2000);
  });
}

export default function User() {

  const [id, setId] = useState("loading...");
  const [name, setName] = useState("loading...");

  useEffect(() => {
    // effect code
    const promise = fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });

    // cleanup code
    return () => {
      // si no se cancela la promesa cuando el usuario cambia de componente, 
      // lanzaría un error, porque está tratando de actualizar el componente
      // cuando éste ya fue removido
      console.log('clean up function');
      promise.cancel();
    };
  }, []);

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.text}>
          ID: {id}  Name: {name} {" "}
        </Text>
      </View>
    </Fragment>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginVertical: '20%',
    marginHorizontal: '5%',
    fontSize: 20,
    color: 'blue',
  }
})