import { useState } from 'react';
import { VStack, FlatList } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

export function Home() {
  const [grups, setGroups] = useState(['costa', 'bíceps', 'tríceps', 'ombro']);
  const [groupSelected, setGroupSelected] = useState('costa');

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={grups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxHeight={10}
      />
    </VStack>
  );
}
