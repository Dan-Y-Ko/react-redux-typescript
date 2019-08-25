import React, { Component } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends Component<AppProps> {
    render() {
        return <div>Hi there</div>;
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
    return { todos: state.todos };
};

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App);
