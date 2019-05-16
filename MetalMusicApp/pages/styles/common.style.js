import { StyleSheet } from 'react-native';
import {
    bg, primary, secondary, placeholder, danger, third
  } from './variables';

export default StyleSheet.create({
    pageBg: {
        backgroundColor: bg
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderBottomColor: third,
        // height: 100,
        backgroundColor: bg,
        color: primary
    },
    listText: {
        marginLeft: 14,
        color: primary,
        marginTop: 14,
        marginBottom: 14
    },
    listTitle: {
        marginLeft: 14,
        marginTop: 14,
        marginBottom: 14,
        fontSize: 20,
        color: primary,
        fontWeight: 'bold',
    },
    listSplitTitle: {
        marginLeft: 14,
        marginTop: 14,
        marginBottom: 14,
        fontSize: 20,
        color: placeholder,
        textDecorationLine: 'line-through',
        fontWeight: 'bold',
    },
    listCountryTitle: {
        marginRight: 14,
        marginTop: 14,
        marginBottom: 14,
        fontSize: 20,
        color: placeholder,
        fontWeight: 'bold',
    },
    listFansText: {
        marginRight: 14,
        textAlign: 'right',
        color: primary,
        marginTop: 14,
        marginBottom: 14
    },
    pushDown: {
        marginTop: 40
    },
    right: {
        textAlign: 'right'
    },
    topDownCenter: {
        marginTop: 40,
        display: 'flex',
        backgroundColor: bg,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    text_sm: {
        fontSize: 16,
        textAlign: 'center',
        color: secondary
    },
    errorMsg: {
        color: danger,
        fontSize: 18,
        textAlign: 'center'
    }
});