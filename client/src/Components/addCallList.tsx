import { ICallList } from "../interfaces";
import styles from '../callList.module.css';

//not needed, delete later


interface Props {
    callList: ICallList;
    deleteCallList(callListTitleToDelete: string): void;
}

const AddCallList = ({ callList, deleteCallList }: Props) => {

    return (
        <div className={styles.callList}>
            <div className={styles.content}>
                <span>{callList.callListTitle}</span>
                <span>{callList.callListDescription}</span>
            </div>
            <button
                onClick={() => {
                    deleteCallList(callList.callListTitle);
                }}
            >
                X
            </button>
        </div>
    );
}

export default AddCallList;

