import React, { PropTypes } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import List from './List';
import iconCheck from '../../icons/check.png';
import iconUncheck from '../../icons/uncheck.png';
import iconDelete from '../../icons/remove.png';

const TodoList = props => {
    const {
        todos,
        actions,
        visibilityFilter,
    } = props;

    const getVisibleTodos = (allTodos, whatFilter) => {
        switch(whatFilter) {
            case 'SHOW_ALL':
                return allTodos;
            case 'SHOW_COMPLETED':
                return allTodos.filter(
                    t => t.isDone
                );
            case 'SHOW_ACTIVE':
                return allTodos.filter(
                    t => !t.isDone
                );
        }
    };

    const visibleTodos = getVisibleTodos(
        todos,
        visibilityFilter
    );

    const _leftOnPress = id => event => actions.toggleTodo(id);
    const _onDelete = id => event => actions.removeTodo(id);


    return (
        <View style={styles.container}>
            <List
                visibleTodos={visibleTodos}
                leftOnPress={_leftOnPress}
                leftUnactiveIcon={iconUncheck}
                leftActiveIcon={iconCheck}
                onDelete={_onDelete}
                iconDelete={iconDelete}
                {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
    },
});

TodoList.propTypes = {
    style: PropTypes.number,
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    visibilityFilter: PropTypes.string.isRequired,
};

export default TodoList;
