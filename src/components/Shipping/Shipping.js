import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Shipping = () => {
  const { user } = useAuth();
  const userInfo = {
      name: user.displayName,
      mail: user.email,
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
//   const onSubmit = (data) => console.log(data);
  return (
    <div className="shipping">
      <div className="shipping-form">
        <h1>Go For Shipping</h1>
        <form>
          <input defaultValue={userInfo.name} {...register("example")} />
          <br />
          <input defaultValue={userInfo.mail} />
          <br />
          <input
            placeholder="Street"
            {...register("exampleRequired", { required: true })}
          />
          <br />
          <input
            placeholder="City"
            {...register("exampleRequired", { required: true })}
          />
          <br />
          <input
            placeholder="Zip Code"
            {...register("exampleRequired", { required: true })}
          />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="btn-add" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
