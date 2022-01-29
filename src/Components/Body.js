import React from 'react';

function Body(props) {
    const { SearchParam, PLAY_URL, SearchResult, HandleChange } = props;
  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <form
            style={{
              marginTop: "20px",
              padding: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              className="form-control "
              id="exampleDataList"
              type="text"
              placeholder="Enter Video Url"
              value={SearchParam}
              onChange={(e) => HandleChange(e)}
            ></input>
            <button style={{ margin: "10px" }} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="card" style={{ width: "562px" }}>
          <iframe
            style={{ alignSelf: "center" }}
            title="UNI"
            width="560"
            height="315"
            src={PLAY_URL}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
          <div className="card-body" style={{ backgroundColor: "black" }}>
            <h5
              style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "black",
              }}
              className="card-title"
            >
              {SearchResult.title}
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body;
