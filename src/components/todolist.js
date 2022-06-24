import { useState, useRef, createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, deleteUser, EditUser } from "../actions/counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughSquint } from "@fortawesome/free-solid-svg-icons";
import "../style/todolist.scss";
import AddNewUser from "./addNewUser";
const Todolist = () => {
    const RefAdd = createRef();
    const RefEdit = createRef();
    const [toggleDisplay, setToggleDisplay] = useState("");
    const [userEdit, setUserEdit] = useState("");
    const [names, setNames] = useState("ADD")
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    const handelToggle = () => {
        setNames("ADD")
        if (RefAdd.current.style.display == "none" || RefAdd.current.style.display == "") {
            RefAdd.current.style.display = "block"
        } else if (RefAdd.current.style.display == "block") {
            RefAdd.current.style.display = "none"
        }
    }
    const handelDeleteUser = (id) => {
        dispatch(deleteUser(id))
    }
    const handelEditUser = (id) => {
        if (RefEdit.current.style.display == "none" || RefEdit.current.style.display == "") {
            RefEdit.current.style.display = "block"
        } else if (RefEdit.current.style.display == "block") {
            RefEdit.current.style.display = "none"
        }
        setUserEdit(counter.counter.filter((user, index) => index == id));
        setNames("EDIT")
    }
    return (
        <div className="todolist">
            <div className="createUser">
                <FontAwesomeIcon icon={faFaceLaughSquint} onClick={handelToggle}></FontAwesomeIcon>
                <AddNewUser name={names} ref={RefAdd} />
            </div>
            <table className="tbList">
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>TITLE</th>
                        <th>CONTENT</th>
                        <th colSpan={2}>AKSI</th>
                    </tr>
                </thead>
                <tfoot>
                    {counter.counter.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{user.title}</td>
                                <td>{user.content}</td>
                                <td>{user.aksi}</td>
                                <td className="editUser">
                                    <button onClick={() => handelEditUser(index)}>Edit</button>
                                    <button onClick={() => handelDeleteUser(index)}>Delete</button>
                                    <AddNewUser name={names} ref={RefEdit} user={userEdit} />
                                </td>
                            </tr>
                        )
                    })}
                </tfoot>
            </table>
        </div>
    )
}
export default Todolist