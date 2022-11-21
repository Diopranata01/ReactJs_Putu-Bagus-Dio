import React, { useState } from "react";

export const Contact = (props) => {
  const { newData, setNewData } = props;

//   console.log(newData)

  const [parseTemp, setParseTemp] = useState({
    email: "",
    name: "",
    message: "",
  });

//   console.log(parseTemp)

  const onchange = (e) => {
    const { name, value } = e.target;
    setParseTemp({
      ...parseTemp,
      [name]: value,
    });
  };

  const onInputUser = (e) => {
    e.preventDefault();

    if (parseTemp) {
      setNewData({
        ...newData,
        email : parseTemp.email,
        name : parseTemp.name,
        message : parseTemp.message
      });
    }

    alert(`Data Pendaftar '${parseTemp.name}' sudah terkirim! '${parseTemp.email}''${parseTemp.message}'`)

    return setParseTemp("");
  };

  return (
    <>
      <div className="col p-5 d-grid gap-3 mt-5 contact">
        <div className="row align-items-center">
          <div className="col">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto culpa cumque mollitia,{" "}
            </p>
          </div>
          <div className="col">
            <div className="row-md-12">
              <form onSubmit={onInputUser}>
                <div className="row">
                  <div className="col-md-6">
                    <label for="inputEmail" className="form-email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control mb-4"
                      value={parseTemp.email}
                      onChange={onchange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail" className="form-email">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={parseTemp.name}
                      className="form-control mb-4"
                      onChange={onchange}
                    />
                  </div>
                </div>
                <label for="inputText" className="form-email">
                  Your Text Here
                </label>
                <textarea
                  name="message"
                  value={parseTemp.message}
                  className="form-control"
                  onChange={onchange}
                ></textarea>
                <button type="submit" className="btn btn-dark mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
