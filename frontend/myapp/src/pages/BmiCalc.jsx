import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bmiData } from "../Redux/BmiReducer/action";

const BmiCalc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    height: 0,
    weight: 0,
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(bmiData(form));
    alert("calculation done");
  };
  return (
    <div style={{width:"50%",margin:"auto",paddingTop:"5%"}}>
      <form onSubmit={handleForm}>
        <Input
          type={"text"}
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <br/><br/>
        <Input
          type={"number"}
          name="height"
          placeholder="Enter Height"
          value={form.height}
          onChange={handleChange}
        />
        <br/><br/>
        <Input
          type={"number"}
          name="weight"
          placeholder="Enter Weight"
          value={form.weight}
          onChange={handleChange}
        />
        <br/><br/>
        <Button type="submit" w={'100%'}>Calculate</Button>
      </form>
    </div>
  );
};

export default BmiCalc;
