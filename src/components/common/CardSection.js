import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        //props.style will overwrite left styles.containerStyle
        <View style={[styles.containerStyle, props.style]}> 
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};
//이거 없어서 오류
export { CardSection };
