import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Model() {
  const [currentIndex, setCurrentIndex] = useState<any>(null);
  const [activeMdl, setActiveMdl] = useState<any>(null);
  const [localModels, setLocalModels] = useState<any>([]);
  useEffect(() => {
    setLocalModels(localStorage.getItem("models"));
  }, []);

  const setActiveModel = (tutorial: any, index: number) => {
    setActiveMdl(tutorial);
    setCurrentIndex(index);
  };

  const removeModel = () => {};

  return localModels ? (
    <div className="container">
      <div className="list row">
        <div className="col-md-6">
          <h3>Model name: {localModels?.data?.attributes?.name}</h3>

          <ul className="list-group">
            {localModels &&
              localModels?.data?.attributes?.metadata?.attributes.map(
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
export default Model;
