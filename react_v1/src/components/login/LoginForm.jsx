import axios from 'axios';
import React, { useState } from 'react';

export default function LoginForm() {
  const [form, setForm] = useState({
    userID: '',
    userPW: '',
  });
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.id]: e.target.value,
    };
    console.log(nextForm);
    setForm(nextForm);
  };

  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    await axios
      .post(`http://${process.env.REACT_APP_URL}/api/login`, {
        params: {
          id: form.userID,
          password: form.userPW,
        },
      })
      .then(() => {
        console.log('성공');
      })
      .catch((err) => {
        console.error(err);
      });
    setDisabled(false);
  };

  return (
    <>
      <form
        className="flex flex-col w-3/5 h-1/3 justify-center"
        onSubmit={handleSubmit}
      >
        <div className="m-auto">
          <label className="text-myIndigo font-medium block text-lg">ID</label>
          <input
            id="userID"
            type="text"
            placeholder="ID"
            onChange={handleChange}
            required
            className="my-1 h-10 w-full rounded-md bg-myGray p-3 font-medium outline-myBlue shadow-inner hover:bg-blue-100 hover: border-myBlue"
          />
        </div>
        <div className="m-auto">
          <label className="text-myIndigo font-medium block text-lg">PW</label>
          <input
            id="userPW"
            type="password"
            placeholder="PW"
            onChange={handleChange}
            required
            className="my-1 h-10 w-full rounded-md bg-myGray p-3 font-medium outline-myBlue shadow-inner hover:bg-blue-100 hover: border-myBlue"
          />
        </div>
        <div className="m-auto">
          <button
            type="submit"
            className="my-1 h-8 w-32 bg-myIndigo rounded-md text-white font-medium mt-3 px-8 active:bg-myBlue shadow-inner hover:bg-myBlue"
            disabled={disabled}
          >
            summit
          </button>
        </div>
      </form>
    </>
  );
}
