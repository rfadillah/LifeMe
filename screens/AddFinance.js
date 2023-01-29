import { Box, Text, Input, Icon, Select, CheckIcon, HStack, Center } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, {useState} from 'react'
import { TextInputUnderlined, Separator, BtnPrimary } from '../component'
import { Pressable } from 'react-native'
import RNDateTimePicker from "@react-native-community/datetimepicker";

const AddFinance = () => {

  const [yearf, setYearf] = React.useState("");

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

  return (
    <Box flex={1} px="5%" pt={"10px"} backgroundColor="white">
      <Box backgroundColor={"white"} w="100%" h={"250px"} borderRadius="20px" shadow={"5"} px="5%" justifyContent={"center"} alignItems="center">
        <TextInputUnderlined placeholder={"Jumlah uang"} icon={"cash"} kt={"phone-pad"}/>
        <Separator height={"10px"}/>
        <TextInputUnderlined placeholder={"Keterangan"} icon={"list"}/>
        <Separator height={"10px"}/>
        <Input pl={"10px"} variant="underlined" size={"l"} placeholder={"tanggal"} value={dateValue} InputLeftElement={
        <Pressable onPress={() => setIsShowDate(true)}>
            <Icon as={<Ionicons name='calendar' />} size={8} ml="2" color="#3B939B" />
        </Pressable>}/>
        {isShowDate && <RNDateTimePicker mode='date' value={new Date()} onChange={(event, date) => setDate(event, date, 'date')} />}
        <Separator height={"15px"}/>
        {/* <HStack justifyContent={"center"} alignItems="center" pl={"34px"} pr={"10px"}>
          <Ionicons name='list-circle' size={37} color="#3B939B"/>
          <Select ml={"3px"} selectedValue={yearf} minWidth="100%" maxH={"40px"} accessibilityLabel="Pilih Kategori" placeholder="Pilih Kategori" _selectedItem={{
              bg: "teal.600",
            }} mt={1} onValueChange={itemValue => setYearf(itemValue)}>
            <Select.Item label="Primer" value="Primer" />
            <Select.Item label="Sekunder" value="Sekunder" />
            <Select.Item label="Tersier" value="Tersier" />
          </Select>
        </HStack> */}
        <Separator height={"10px"}/>
      </Box>
      <Separator height={"50px"}/>
      <Center><BtnPrimary text={"Tambah"} bgc={"#2F8189"} tc={"#FFFFFF"} o={1} onPress={()=> navigation.navigate("Login")}/></Center>
    </Box>
  )
}

export default AddFinance