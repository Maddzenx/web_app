import { ICallList } from "../interfaces";
import '../callList.module.css'

interface Props {
    callList: ICallList;
    deleteCallList(callListTitleToDelete: string): void;
}

const AddCallList = ({ callList, deleteCallList }: Props) => {

    return (
        <div className="callList">
            <div className="content">
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

