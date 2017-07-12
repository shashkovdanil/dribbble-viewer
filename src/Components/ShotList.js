// @flow
import React from 'react';
import { FlatList, View, ActivityIndicator, TouchableOpacity } from 'react-native';

import { Shot } from './Shot';

type ShotListProps = {
  data: Array<string>,
  onEndReached: () => any,
  refreshing: boolean,
  onRefresh: () => any,
  navigateToShotDetail: () => any,
};

const ShotList = ({
  data,
  onEndReached,
  refreshing,
  onRefresh,
  navigateToShotDetail,
}: ShotListProps) =>
  (<FlatList
    data={data}
    renderItem={({ item }) =>
      (<TouchableOpacity onPress={() => navigateToShotDetail(item)}>
        <Shot widthShot="100%" heightShot="400" uri={item.images.normal} />
      </TouchableOpacity>)}
    keyExtractor={item => item.id}
    onEndReached={onEndReached}
    onEndThreshhold={0}
    refreshing={refreshing}
    onRefresh={onRefresh}
    ListFooterComponent={
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator color="lightpink" animating size="large" />
      </View>
    }
  />);

export { ShotList };
