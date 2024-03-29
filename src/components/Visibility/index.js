import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

import ButtonFilter from '../Buttons/ButtonFilter';

const Visibility = props => {
    const {
        todos,
        actions,
        visibilityFilter,
    } = props;

    return (
		<View style={styles.container}>
			<ButtonFilter filter='SHOW_ALL'
						  txtStyle={styles.text}
						  activeStyle={styles.btnClicked}
						  UnactiveStyle={styles.btnUnclicked}
						  activeOpacity={0.7}
                          {...props} >
				View All
			</ButtonFilter>
			<ButtonFilter filter='SHOW_ACTIVE'
						  txtStyle={styles.text}
						  activeStyle={styles.btnClicked}
						  UnactiveStyle={styles.btnUnclicked}
						  activeOpacity={0.7}
                          {...props} >
				Active
			</ButtonFilter>
			<ButtonFilter filter='SHOW_COMPLETED'
						  txtStyle={styles.text}
						  activeStyle={styles.btnClicked}
						  UnactiveStyle={styles.btnUnclicked}
						  activeOpacity={0.7}
                          {...props} >
				Completed
			</ButtonFilter>
		</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 10,
    },
    text: {
        margin: 5,
        color: 'black',
        backgroundColor: '#808080',
        padding: 10,
    },
    btnClicked: {
        borderRadius: 5,
        backgroundColor: '#808080',
    },
    btnUnclicked: {
        borderRadius: 5,
        backgroundColor: '#808080',
    }
});

export default Visibility;
