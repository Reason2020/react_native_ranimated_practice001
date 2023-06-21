import { StyleSheet, Text, View, TextInput, SafeAreaView, StatusBar, Pressable } from 'react-native';
import { useState } from 'react';
import Animated, { LightSpeedInLeft, Layout, LightSpeedOutRight } from 'react-native-reanimated';

export default function App() {
  const [ participants, setParticipants ] = useState(['Reason Shrestha', 'Sabin Ghimire', 'Cristiano Ronaldo']);
  const [ participantName, setParticipantName ] = useState('');

  function addParticipant() {
    setParticipants(prevParticipants => [ ...prevParticipants, participantName ]);
    setParticipantName('');
  }

  function removeParticipant(index) {
    setParticipants(prevParticipants => {
      const updatedParticipants = [...prevParticipants];
      updatedParticipants.splice(index, 1);
      return updatedParticipants;
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.headerContainer}>
        <TextInput 
          style={styles.inputField}
          value={participantName}
          placeholder='Participant name...'
          onChangeText={setParticipantName}
        />
        <Pressable style={styles.btn} onPress={addParticipant}>
          <Text style={styles.btnText}>Add Participant</Text>
        </Pressable>
      </View>

      {/* participants list */}
      <View style={styles.participantsListContainer}>
        {participants.map((participant, index) => (
          <Animated.View
            key={index}
            style={styles.participantContainer}
            entering={LightSpeedInLeft}
            exiting={LightSpeedOutRight}
            layout={Layout.springify()}
          >
            <Text style={styles.participantText}>{participant.toUpperCase()}</Text>
            <Pressable style={styles.removeBtn} onPress={() => removeParticipant(index)}>
              <Text style={styles.btnText}>Remove</Text>
            </Pressable>
          </Animated.View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    gap: 5 
  },
  inputField: {
    padding: 8,
    borderWidth: 0.4,
    borderColor: 'black',
    borderRadius: 15,
    flexGrow: 2
  },
  btn: {
    backgroundColor: '#29de92',
    padding: 8,
    borderRadius: 15
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  participantsListContainer: {
    gap: 5,
    padding: 5
  },
  participantContainer: {
    backgroundColor: '#bae8e8',
    padding: 8,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  participantText: {
    fontWeight: '600',
    color: '#10375c'
  },
  removeBtn: {
    backgroundColor: '#10375c',
    padding: 5,
    borderRadius: 5
  }
});
