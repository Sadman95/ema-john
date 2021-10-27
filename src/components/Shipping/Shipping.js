import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";

const Shipping = () => {
  const { user } = useAuth();
  const userInfo = {
      name: user.displayName,
      mail: user.email,
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();


  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.cart = savedCart;
    fetch('http://localhost:5000/products/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        window.confirm('Are you confirm to send your order for processing?');
        clearTheCart();
        reset();
      }
    })
  };
  return (
    <div className="shipping">
      <div className="shipping-form">
        <h1>Go For Shipping</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' defaultValue={userInfo.name} {...register("name")} />
          <br />
          <input type='email' defaultValue={userInfo.mail} />
          <br />
          <input
          type='text'
            placeholder="Street"
            {...register("street", { required: true })}
          />
          <br />
          <input
          type='text'
            placeholder="City"
            {...register("city", { required: true })}
          />
          <br />
          <input
          type='number'
            placeholder="Zip Code"
            {...register("zip", { required: true })}
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
