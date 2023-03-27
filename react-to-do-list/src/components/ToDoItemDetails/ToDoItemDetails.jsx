import { useState } from "react";
import useGetData from "../../hooks/useGetData";
import styles from './ToDoItemDetails.module.scss'

const ToDoItemDetail = (props) => {

    const [loadingState, setLoadingState] = useState(true);
    const [itemDetail, setItemDetail] = useState('');

    useGetData(props.id, null, null, (allRepos) => {allRepos === null ? setLoadingState(true) : onGetItem(allRepos)});

    function onGetItem(serverData) {
        console.log('onGetItem ' + props.id);
        let remoteTodos = serverData.todos;
        remoteTodos.forEach(todo => {
            setItemDetail(todo.todo);
        });
    }

    return (
        <h1 className={styles.ToDoItemDetail}>{itemDetail}</h1>
    );
}

export default ToDoItemDetail;
