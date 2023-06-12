import CelebrityList from "./CelebrityList";
import { useSelector, useDispatch } from "react-redux";
import { updateCelebrityCopy } from "../Store/Slices/celebritySlice";

const Celebrity = function () {
  const celebrityList = useSelector((state) => state.celebrity.celebrities);
  const dispatch = useDispatch();
  const changeHandler = function (e) {
    const inputText = e.target.value;
    const reqData = celebrityList.filter((e) =>
      e.first.toLowerCase().includes(inputText.toLowerCase())
    );
    dispatch(updateCelebrityCopy(reqData));
  };
  return (
    <div className="container text-center mt-3 ">
      <div className="row justify-content-center mb-3">
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="addon-wrapping"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="row-4 justify-content-center">
        <CelebrityList />
      </div>
    </div>
  );
};
export default Celebrity;
