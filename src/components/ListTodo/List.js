import React, { PropTypes } from 'react';
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

import ButtonIcon from '../Buttons/ButtonIcon';

const List = props => {
    const {
        visibleTodos,
        leftOnPress,
        leftUnactiveIcon,
        leftActiveIcon,
        iconDelete,
        onDelete,
    } = props;

    const _renderList = (todo, index) => {
        const doneOrNot = todo.isDone ? leftActiveIcon : leftUnactiveIcon;
        const textDoneOrNot = todo.isDone ? styles.textDone : styles.textNotDone;

        const deleteItem = () => {
            if (todo.isDone) {
                return <ButtonIcon onPress={onDelete(todo.id)}
                                   source={iconDelete}
                                   style={styles.rightButton}
                                   width={25} height={25} />
            } else {
                return <ButtonIcon
                    style={styles.rightButton}
                    width={25} height={25} />
            }
        }

        return (
            <View key={index} style={styles.row}>
                <ButtonIcon onPress={leftOnPress(todo.id)}
                            source={doneOrNot}
                            style={styles.leftButton}
                            width={25} height={25} />
                <Text numberOfLines={1}
                      style={textDoneOrNot}>
                    { todo.text }
                </Text>
                { deleteItem() }
            </View>
        );
    }

    return (
        <ScrollView style={styles.scroll}
                    showsVerticalScrollIndicator={false}>
            { visibleTodos.map(_renderList) }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    textButton: {
        flex: 1,
    },
    textNotDone: {
        color: 'black',
    },
    textDone: {
        color: 'black',
        textDecorationLine: 'line-through',
    },
    leftButton: {
        marginHorizontal: 10,
    },
    rightButton: {
        marginLeft: 5,
        marginRight: 10,
    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 10,
        marginVertical: 1,
        borderRadius: 2,
        backgroundColor: '#808080',
    },
});

List.propTypes = {
    style: PropTypes.number,
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    visibleTodos: PropTypes.array.isRequired,
    leftOnPress: PropTypes.func.isRequired,
    leftUnactiveIcon: PropTypes.number.isRequired,
    leftActiveIcon: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    iconDelete: PropTypes.number.isRequired,
};

export default List;