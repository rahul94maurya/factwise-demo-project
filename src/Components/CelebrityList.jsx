import styles from "./CelebrityList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ConfirmModel from "./ConfirmModel";
import {
  updateCelebrity,
  deleteCelebrity,
  updateCelebrityCopy,
} from "../Store/Slices/celebritySlice";

const genderOptions = [
  "Male",
  "Female",
  "Transgender",
  "Rather not say",
  "Other",
];

const ageCalculator = function (dob) {
  const dateOfBirth = new Date(dob);
  const age = Math.floor(
    (new Date() - new Date(dateOfBirth).getTime()) / 3.15576e10
  );
  return age;
};

const CelebrityList = function () {
  const celebrityList = useSelector((state) => state.celebrity.celebrities);
  const celebrityListCopy = useSelector(
    (state) => state.celebrity.celebrityCopy
  );
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState();
  const [errorMessages, setErrorMessages] = useState({
    nameErrormsg: "",
    countryErrorMsg: "",
    descriptionErrorMsg: "",
  });
  const [error, setError] = useState(false);
  const [checkIndex, setCheckIndex] = useState();
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);

  const showModelHandler = function (e) {
    if (e === "delete") {
      dispatch(deleteCelebrity(index));
    }
  };

  const deleteHadler = function (i) {
    setIndex(i);
  };

  const editHandler = function (id, age, index) {
    if (age >= 18) {
      const data = [...celebrityList];
      const indexOfData = data.findIndex((a) => a.id === id);
      const [targetedDate] = data.filter((a) => a.id === id);
      const targetObj = { ...targetedDate };
      setCheckIndex(id);
      targetObj.edit = true;
      data.splice(indexOfData, 1, targetObj);

      setEditing(!editing);
      setSaveButtonDisabled(false);
    }
    if (age < 18) {
      alert("You are minor and can not edit ");
    }
  };

  const cancelHandler = function (id, index) {
    dispatch(updateCelebrity(celebrityListCopy));
    setEditing(!editing);
  };

  const submitHandler = function (id, index) {
    if (saveButtonDisabled) {
      const data = [...celebrityList];

      const [targetedDate] = data.filter((a) => a.id === id);
      const targetObj = { ...targetedDate };
      if (targetObj.country.length === 0) {
        setError(true);
        setErrorMessages((preState) => {
          return { ...preState, countryErrorMsg: "Please enter Country" };
        });
      } else if (targetObj.description.length === 0) {
        setError(true);
        setErrorMessages((preState) => {
          return {
            ...preState,
            descriptionErrorMsg: "Please enter description",
          };
        });
      } else if (targetObj.first.length === 0) {
        setError(true);
        setErrorMessages((preState) => {
          return { ...preState, nameErrormsg: "Please enter name" };
        });
      } else {
        setError(false);
        setErrorMessages((preState) => {
          return {
            ...preState,
            countryErrorMsg: "",
            nameErrormsg: "",
            descriptionErrorMsg: "",
          };
        });
        setEditing(!editing);
        dispatch(updateCelebrityCopy(celebrityList));
        // console.log("celebrity list", celebrityList);
      }
      // setSaveButtonDisabled(true);
    }
  };

  const editOrSaveIcon = function (id, index, dob) {
    const age = ageCalculator(dob);
    if (editing) {
      return (
        <div className="row justify-content-end">
          <div className="col-1 " onClick={() => cancelHandler(id, index)}>
            <svg
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div className="col-1" onClick={() => submitHandler(id, index)}>
            <svg
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row justify-content-end">
          <div
            className="col-1 "
            onClick={() => deleteHadler(id)}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <svg
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </div>
          <div className="col-1" onClick={() => editHandler(id, age, index)}>
            <svg
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="blue"
              stroke="4"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </div>
        </div>
      );
    }
  };
  const nameChangeHandler = function (e, id) {
    const inputName = e.target.value;
    const onlyAlphabet = /^[a-zA-Z ]*$/.test(inputName);
    if (onlyAlphabet) {
      const data = [...celebrityList];
      const indexOfData = data.findIndex((a) => a.id === id);
      const [targetedDate] = data.filter((a) => a.id === id);
      const targetObj = { ...targetedDate };
      targetObj.first = e.target.value;
      data.splice(indexOfData, 1, targetObj);
      dispatch(updateCelebrity(data));
      setSaveButtonDisabled(true);
    }
  };
  const genderChangeHandler = function (e, id) {
    const data = [...celebrityList];
    const indexOfData = data.findIndex((a) => a.id === id);
    const [targetedDate] = data.filter((a) => a.id === id);
    const targetObj = { ...targetedDate };
    targetObj.gender = e.target.value;
    data.splice(indexOfData, 1, targetObj);
    dispatch(updateCelebrity(data));
    setSaveButtonDisabled(true);
  };
  const countryChangeHandler = function (e, id) {
    const inputCountry = e.target.value;
    const onlyAlphabet = /^[a-zA-Z ]*$/.test(inputCountry);
    if (onlyAlphabet) {
      const data = [...celebrityList];
      const indexOfData = data.findIndex((a) => a.id === id);
      const [targetedDate] = data.filter((a) => a.id === id);
      const targetObj = { ...targetedDate };
      targetObj.country = e.target.value;
      data.splice(indexOfData, 1, targetObj);
      dispatch(updateCelebrity(data));
      setSaveButtonDisabled(true);
    }
  };
  const descriptionChangeHandler = function (e, id) {
    const data = [...celebrityList];
    const indexOfData = data.findIndex((a) => a.id === id);
    const [targetedDate] = data.filter((a) => a.id === id);
    const targetObj = { ...targetedDate };
    targetObj.description = e.target.value;
    data.splice(indexOfData, 1, targetObj);
    dispatch(updateCelebrity(data));
    setSaveButtonDisabled(true);
  };
  const trying = editing ? celebrityList : celebrityListCopy;
  // console.log(
  //   "checkint",
  //   editing ? "celebrityList" : "celebrityListCopy",
  //   celebrityListCopy
  // );
  return (
    <div className="accordion" id="accordionExample">
      {trying.map((e, index) => {
        return (
          <div className="card mb-3" key={e.id}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button test"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={!editing ? `#collapse${index}` : ""}
                  aria-expanded="true"
                  aria-controls={`#collapse${index}`}
                >
                  <div className={styles.remo}>
                    <div>
                      <img
                        className={styles.img}
                        src={e.picture}
                        alt={`${e.first} ${e.last}`}
                      />
                    </div>
                    <div className="row text-start">
                      <input
                        type="text"
                        value={`${e.first}`}
                        readOnly={!(checkIndex === e.id && editing)}
                        onChange={(a) => nameChangeHandler(a, e.id)}
                        className={styles["input-header-name"]}
                      />
                      {error && (
                        <div className={styles["errors"]}>
                          {errorMessages.nameErrormsg}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container">
                    <div className="row gx-5">
                      <div className="col">
                        <div className="row">Age</div>
                        <div className="row text-start">
                          <input
                            type="text"
                            value={`${ageCalculator(e.dob)} Years`}
                            readOnly={!editing}
                            className={styles["input"]}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">Gender</div>
                        <div className="row text-start">
                          <select
                            name="gender"
                            disabled={!editing}
                            className={styles.select}
                            onChange={(m) => genderChangeHandler(m, e.id)}
                          >
                            {genderOptions.map((a) => {
                              return (
                                <option
                                  key={a}
                                  selected={
                                    a.toLowerCase() === e.gender.toLowerCase()
                                  }
                                  value={a}
                                >
                                  {a}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">Country</div>
                        <div className="row text-start">
                          <input
                            type="text"
                            value={e.country}
                            readOnly={!editing}
                            onChange={(a) => countryChangeHandler(a, e.id)}
                            className={styles["input"]}
                          />
                          {error && (
                            <div className={styles["errors"]}>
                              {errorMessages.countryErrorMsg}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="row">Description</div>
                      <div className="row text-start">
                        <textarea
                          defaultValue={e.description}
                          rows={5}
                          readOnly={!editing}
                          onChange={(a) => descriptionChangeHandler(a, e.id)}
                          className={styles["text-Area"]}
                        />
                        {/* {console.log("description", e.description)} */}
                        {error && (
                          <div className={styles["errors"]}>
                            {errorMessages.descriptionErrorMsg}
                          </div>
                        )}
                      </div>
                    </div>
                    {editOrSaveIcon(e.id, index, e.dob)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <ConfirmModel onModelCancel={showModelHandler} />
    </div>
  );
};

export default CelebrityList;
