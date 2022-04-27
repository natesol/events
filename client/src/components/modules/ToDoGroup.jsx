import { Accordion } from '@mantine/core';

export function ToDoGroup() {
    const todos = [1, 2, 3, 4, 5, 6];
    // const events = [];

    return (
        <>
            <h3>My ToDo's</h3>
            <Accordion iconPosition='right' offsetIcon={false} multiple>
                {todos.length === 0 ? (
                    <p>You dont have any todos.</p>
                ) : (
                    todos.map((todo, i) => (
                        <Accordion.Item label={`Accordion Item #${i}`} key={i}>
                            {todo}
                        </Accordion.Item>
                    ))
                )}
            </Accordion>
        </>
    );
}

export default ToDoGroup;
