import { useParams } from "react-router-dom";

import Form from "../components/Form";

const Update = () => {

  const { empId } = useParams();

  return (

    <section className="my-3">

      <h2 className="fs-3 mb-3" style={{ letterSpacing: "1px" }}>Add Employee</h2>

      <Form type="update" empId={ parseInt(empId || "0") } />

    </section>

  );
  
}

export default Update;
