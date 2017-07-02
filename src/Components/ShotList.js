import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';

import { Shot } from './Shot';

const ShotList = ({ data, onEndReached, refreshing, onRefresh }) =>
  <FlatList
    data={data}
    renderItem={({ item }) => <Shot uri={item.images.normal} />}
    keyExtractor={item => item.id}
    onEndReached={onEndReached}
    onEndThreshhold={0}
    refreshing={refreshing}
    onRefresh={onRefresh}
    ListFooterComponent={
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator animating size="large" />
      </View>
    }
  />;

export { ShotList };
