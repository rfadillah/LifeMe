import React, {useState} from "react";
import {
  Icon,
  Input,
  Pressable
} from "native-base";
// import TextInputUnderlined from "./TextInputUnderlined";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from 'react-native-vector-icons/Ionicons'

const DatePicker = (props) => {
    const [isShowDate, setIsShowDate] = useState(false);
    // const [isShowTime, setIsShowTime] = useState(false);
    const [dateValue, setDateValue] = useState(`${new Date().toLocaleDateString('ja-JP-u-ca-japanese')}`);
    // const [timeValue, setTimeValue] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`);

    const setDate = (event, date, mode) => {
    const {
      type,
    } = event;

    if (type === 'set' || type === 'dismissed') {
      setIsShowDate(false)
    //   setIsShowTime(false)
    }

    if (mode === 'date') {
      setDateValue(`${new Date(date).toLocaleDateString('ja-JP-u-ca-japanese')}`)
    //   console.log(dateValue)
    } else if (mode === 'time') {
    //   setTimeValue(`${new Date(date).getHours()}:${new Date().getMinutes()}`)
    }
  };

  return(
    <NativeBaseProvider>
        <Input pl={"10px"} variant="underlined" size={"l"} placeholder={"tanggal"} value={dateValue} InputLeftElement={
        <Pressable onPress={() => setIsShowDate(true)}>
            <Icon as={<Ionicons name='calendar' />} size={5} mr="2" color="muted.400" />
        </Pressable>}/>
        {/* <InputField shadow='4' size='xl' borderRadius='10' placeholder='Ex. John Smith' value={dateValue} InputRightElement={
        <Pressable onPress={() => setIsShowDate(true)}>
            <Icon as={<Ionicons name='calendar' />} size={5} mr="2" color="muted.400" />
        </Pressable>
        } /> */}
        {isShowDate && <RNDateTimePicker mode='date' value={new Date()} onChange={(event, date) => setDate(event, date, 'date')} />}
    </NativeBaseProvider>
  )
}

export default DatePicker;