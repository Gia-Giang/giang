import { useState, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../actions/counter";
import { getDatabase, ref, set, push, onValue, remove } from "firebase/database";
import firebaseConnect from "../../firebaseConfig";
const AddNewUser = ({ name, user }, ref) => {
    const userEdit = user || []
    const [addUser, setAddUser] = useState({});
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    const OnchangeTitle = (e) => {
        setAddUser({ ...addUser, [e.target.name]: e.target.value })
    }
    const OnchangeContent = (e) => {
        setAddUser({ ...addUser, [e.target.name]: e.target.value })
    }
    const OnchangeAksi = (e) => {
        setAddUser({ ...addUser, [e.target.name]: e.target.value })
    }
    const handelAddUser = () => {
        dispatch(increment(addUser))
        ref.current.style.display = "none"
    }
    const handelEdit = () => {

    }
    const CheckName = (nameUser) => {
        if (name == "ADD") {
            return addUser[nameUser] || ""
        } else {
            return userEdit.map(user => user[nameUser])
        }
    }
    return (
        <div className="addUser" ref={ref}>
            <h1>{name == "ADD" ? "ADD USER" : "EDIT USER"}</h1>
            <div className="title">
                <span>Title :</span>
                <input type={"text"} placeholder="title" name="title"
                    onChange={OnchangeTitle} value={CheckName("title")} />
            </div>
            <div className="content">
                <span>Content :</span>
                <input type={"text"} placeholder="content" name="content"
                    onChange={OnchangeContent} value={CheckName("content")} />
            </div>
            <div className="aksi">
                <span>Aksi :</span>
                <input type={"text"} placeholder="aksi" name="aksi"
                    onChange={OnchangeAksi} value={CheckName("aksi")} />
            </div>
            {name == "ADD" ? <button onClick={handelAddUser}>ADD</button> : <button onClick={handelEdit}>EDIT</button>}
        </div>
    )
}
export default forwardRef(AddNewUser)