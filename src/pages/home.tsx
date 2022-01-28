import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import service from "../service";
import { setModel } from "../redux/actions";
import { connect, useDispatch } from "react-redux";

function Home({ model }: any) {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState<any>(null);
  const [activeMdl, setActiveMdl] = useState<any>(null);
  useEffect(() => {
    getModels("58d3bcf97c6b1644db73ad12");
  }, []);

  const getModels = (option: string) => {
    service
      .getById(option)
      .then((response: any) => {
        dispatch(setModel(response.data));
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const setActiveModel = (tutorial: any, index: number) => {
    setActiveMdl(tutorial);
    setCurrentIndex(index);
  };

  const removeModel = () => {};
  const saveModel = () => {
    localStorage.setItem("models", JSON.stringify(model));
    alert("Model saved");
  };

  return model ? (
    <div className="container">
      <div className="list row">
        <div className="col-md-6">
          <h3>Model name: {model?.data?.attributes?.name}</h3>

          <ul className="list-group">
            {model &&
              model?.data?.attributes?.metadata?.attributes.map(
                (mod: any, index: number) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveModel(mod, index)}
                    key={index}
                  >
                    {mod.name}
                  </li>
                )
              )}
          </ul>

          <button className="m-3 btn btn-sm btn-danger" onClick={removeModel}>
            Remove All
          </button>
          <button className="m-3 btn btn-sm btn-success" onClick={saveModel}>
            Save Model
          </button>
        </div>
        <div className="col-md-6">
          {activeMdl ? (
            <div>
              <h4>Input Variable Details</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {activeMdl?.name}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {activeMdl?.question}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {activeMdl?.type}
              </div>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on an input to see details...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="Spinner">
      <div className="spinner-grow text-warning"></div>
      Loading..
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    model: state.selectedModel,
    search: state.products,
  };
};

export default connect(mapStateToProps, setModel)(Home);
