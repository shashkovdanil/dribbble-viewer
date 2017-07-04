import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator, TouchableOpacity } from 'react-native';

import { Shot } from './Shot';

class ShotList extends Component {
  render() {
    const { data, onEndReached, refreshing, onRefresh, navigateToShotDetail } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigateToShotDetail(item)}>
            <Shot uri={item.images.normal} />
          </TouchableOpacity>
        }
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
      />
    );
  }
}

export { ShotList };