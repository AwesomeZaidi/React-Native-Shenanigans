
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import metalDataList from './metal-all.json';
import { ScrollView } from 'react-native-gesture-handler';
import common from '../styles/common.style';
import commonStyle from '../styles/common.style';

class Stats extends Component {
    constructor(props) {
        super(props);
        state = {
            totalFans: 0,
            totalBands: 0,
            totalCountries: 0,
        };
    };

    componentDidMount = () => {
        console.log('in mount');
        // console.log('this.state.totalBands:', this.state.totalBands);
        
        let totalBandsHere = 0;
        metalDataList.map((item) =>
            totalBandsHere += 1
        );
        console.log('totalBandsHere:', totalBandsHere);
        
        this.setState({
            totalBands: totalBandsHere
        });
    };

    static navigationOptions = {
		title: 'Stats Page'
    };

    render() {
        // THIS PRINTS IT KIND OF WORKS I SWEAR! STRANGE ISSUE!
        console.log('this.state:', this.state);
        
        return (
            <ScrollView contentContainerStyle={common.topDownCenter}>
                <Text style={common.listText}>HLLOE</Text>
                {/* NO IDEA WHY THIS IS NOT WORKING! */}
                <Text style={common.listText}>Bands: N/A</Text>
            </ScrollView>

        );
    };
};

export default Stats;