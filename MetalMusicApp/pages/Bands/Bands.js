
import React, { Component } from 'react';
import { TextInput, View, FlatList } from 'react-native';
import metalDataList from './metal.json';
import { ScrollView } from 'react-native-gesture-handler';
import common from '../styles/common.style';
import commonStyle from '../styles/common.style';

export default class Bands extends Component {
    render() {
        return (
            <ScrollView>
                    <FlatList
                        data={metalDataList}
                        contentContainerStyle = {[common.pageBg, commonStyle.pushDown]}
                        renderItem={({item}) => (
                            <ScrollView
                            key={item.key}
                            contentContainerStyle={common.listItem}
                            >
                                <View >
                                    <TextInput
                                        style={common.listTitle}
                                        editable={false}
                                        value={`${item.band_name}`}
                                    >
                                    </TextInput>
                                    <TextInput
                                        style={common.listText}
                                        editable={false}
                                        value={`${item.formed}`} 
                                    >
                                    </TextInput>
                                </View>
                                <View style={common.right}>
                                    <TextInput
                                        style={common.listCountryTitle}
                                        editable={false}
                                        value={`${item.origin}`}
                                    ></TextInput>
                                    <TextInput
                                        style={common.listFansText}
                                        editable={false}
                                        value={(item.fans*1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    ></TextInput>
                                </View>                      
                            </ScrollView>
                        )}
                    />
            </ScrollView>   
        )
    };
};