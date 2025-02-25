import React, {FC} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo:FC<any> = ({ dispatch }) => {
    let input:any;
    
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input ref={(node) => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);