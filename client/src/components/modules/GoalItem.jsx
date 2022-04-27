import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteGoal, updateGoal } from '../../features/goals/goalSlice';

import { IconAward } from '@tabler/icons';

export function GoalItem({ goal }) {
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setText] = useState(goal.text);
    const [viewText, setViewText] = useState(goal.text);

    const dispatch = useDispatch();

    const updateGoals = () => {
        setIsEdit(false);
        dispatch(updateGoal({ ...goal, text: editText }));
        setViewText(editText);
        setText(editText);
    };

    return (
        <div className='goal'>
            <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
            {!isEdit ? (
                <h2>{viewText}</h2>
            ) : (
                <input
                    type='text'
                    value={editText}
                    onInput={(e) => setText(e.target.value)}
                    onBlur={updateGoals}
                />
            )}
            <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
                X
            </button>
            <button className='editbtn' onClick={() => setIsEdit(true)}>
                <IconAward />
            </button>
        </div>
    );
}

export default GoalItem;
