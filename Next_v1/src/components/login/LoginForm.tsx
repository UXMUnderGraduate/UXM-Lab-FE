import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const LoginForm: React.FC = () => {
  const [form, setForm] = useState({
    userID: '',
    userPW: '',
  });
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextForm = {
      ...form,
      [e.target.id]: e.target.value,
    };
    // console.log(nextForm);
    setForm(nextForm);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    try {
      await axios.post(`http://${process.env.NEXT_PUBLIC_URL}/api/login`, {
        id: form.userID,
        password: form.userPW,
      });
      // console.log('성공');
    } catch (err) {
      console.error(err);
    }
    setDisabled(false);
  };

  return (
    <>
      <form className="flex flex-col w-3/5 h-1/3 justify-center" onSubmit={handleSubmit}>
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
            disabled={disabled}>
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
