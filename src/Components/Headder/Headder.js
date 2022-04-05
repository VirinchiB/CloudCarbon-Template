import "./Headder.css";

function Headders() {
  return (
    <div>
      <div
        class="row m-0"
        style={{
          width: "100%",
          padding:'6px',
          backgroundColor: "#272727",
          margin: "0 !Important",
        }}
      >
        <div
          className="col-lg-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "cente",
            color: "white",
          }}
        >
          <span>IBM Cloud</span>
        </div>
        <div className="col-lg-3">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a resource or offering"
            />
          </form>
        </div>
        <div
          className="col-lg-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "cente",
            color: "white",
          }}
        >
          <span>Catalog</span>
        </div>
        <div
          className="col-lg-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "cente",
            color: "white",
          }}
        >
          <span>Docs</span>
        </div>
        <div
          className="col-lg-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "cente",
            color: "white",
          }}
        >
          <span>Support</span>
        </div>
        <div
          className="col-lg-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "cente",
            color: "white",
          }}
        >
          <select
            style={{
              border: "none",
              backgroundColor: "#272727",
              color: "white",
            }}
          >
            <option>Manage</option>
            <option>Alter</option>
            <option>Save</option>
          </select>
        </div>
        <div
          className="col-lg-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "cente",
          }}
        >
          <select
            style={{
              border: "none",
              backgroundColor: "#272727",
              color: "white",
            }}
          >
            <option>Account name 1</option>
            <option>Account name 2</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Headders;
