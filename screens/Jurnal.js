import React, { useState } from "react";
import { Box, Text, Pressable } from "native-base";
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from "react-native-calendars";

// const timeToString = (time) => {
//   const date = new Date(time);
//   return date.toISOString().split("T")[0];
// };

const Jurnal = () => {
  // const [items, setItems] = useState({});

  // const loadItems = (day) => {
  //   const items = items || {};

  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);

  //       if (!items[strTime]) {
  //         items[strTime] = [];

  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: "Item for " + strTime + " #" + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //             day: strTime,
  //           });
  //         }
  //       }
  //     }

  //     const newItems = {};
  //     Object.keys(items).forEach((key) => {
  //       newItems[key] = items[key];
  //     });
  //     setItems(newItems);
  //   }, 1000);
  // };

  // const renderItem = (item) => {};

  return (
    <Box flex={1} justifyContent={"center"}>
      <Agenda
        selected="2023-02-09"
        items={{
          "2023-02-10": [
            { name: "Happy" },
            { name: "Nervous for final exam" },
            { name: "sad" },
          ],
          "2023-02-09": [{ name: "Happy" }],
        }}
        renderItem={(item, isFirst) => (
          <Pressable
            backgroundColor={"white"}
            flex={1}
            borderRadius={1}
            padding={10}
            mr={10}
            mt={17}
          >
            <Text color={"#888"} fontSize={16}>
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </Box>
  );
};
export default Jurnal;
