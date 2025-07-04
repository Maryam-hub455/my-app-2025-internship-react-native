import {Button, View, Text } from 'react-native'
import React,{useRef} from 'react'
import ConfettiCannon from 'react-native-confetti-cannon';


export default function ConfettiButton() {
  const confettiRef = useRef();
  const boxRef = useRef();

  function onPressed(){
    if (confettiRef){
      confettiRef.current.start();
    }

  }

  function onResumePressed(){
    if (confettiRef){
      confettiRef.current.resume();
    }

  }

   function onStopPressed(){
    if (confettiRef){
      confettiRef.current.stop();
    }

  }
  return (
    <View ref={boxRef}>
      <Button onPress={onPressed} title={"start"}/>
      <ConfettiCannon ref={confettiRef} count={200} origin={{x: -10, y: 0}} />
      <Button onPress={onResumePressed} title={"resume"}/>
      <Button onPress={onStopPressed} title={"stop"}/>
    </View>
  );
}