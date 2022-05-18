import "./Signup.css";
import Logo from "../Logo/Logo";

import { useState } from "react";

const Signup = (props: any) => {
  // username retrieval
  const [enteredUsername, changeEnteredUsername] = useState("");

  // username retrieval update
  const usernameHandler = (event: any) => {
    changeEnteredUsername(event.target.value);
  };

  // password retrieval
  const [enteredEmail, changeEnteredEmail] = useState("");

  // password retrieval update
  const emailHandler = (event: any) => {
    changeEnteredEmail(event.target.value);
  };

  // date retrieval
  const [enteredDate, changeEnteredDate] = useState("");

  //date retrieval update
  const dateChangeHandler = (event: any) => {
    changeEnteredDate(event.target.value);
  };

  // password retrieval
  const [enteredPassword, changeEnteredPassword] = useState("");

  //password retrieval update
  const passwordHandler = (event: any) => {
    changeEnteredPassword(event.target.value);
  };

  // password confirm retrieval
  const [enteredConfirmPassword, changeEnteredConfirmPassword] = useState("");

  //password confirm retrieval update
  const passwordConfirmHandler = (event: any) => {
    changeEnteredConfirmPassword(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const userDetails = {
      username: enteredUsername,
      email: enteredEmail,
      date: enteredDate,
      enteredConfirmPassword,
    };

    console.log(userDetails);

    // props.userLoginDetails(userDetails);

    // changeEnteredUsername("");
    // changeEnteredEmail("");
  };

  const signin = (event: any) => {
    event.preventDefault();

    props.takeToSigninPage();
  };

  return (
    <div
      data-testid="login"
      className="flex justify-center flex-col items-center h-screen"
    >
      <div>
        <Logo width="136px" height="121px" page="login" />
      </div>

      <div>
        <h1 className="text-center text-xl font-bold">Create your account</h1>
      </div>
      <br />
      {/* unacceptable name notification */}
      {/*  */}
      <div>
        <form
          onSubmit={submitHandler}
          action=""
          className="flex justify-center items-center flex-col"
        >
          <input
            type="text"
            placeholder="Name"
            className=" w-56 h-10 border-gray-200 border rounded-md text-center text-sm"
            onChange={usernameHandler}
            value={enteredUsername}
          />
          <br />
          {/* unacceptable email notification */}
          {/*  */}
          <input
            type="text"
            placeholder="Email"
            className=" w-56 h-10 border-gray-200 border rounded-md text-center text-sm"
            onChange={emailHandler}
            value={enteredEmail}
          />
          <br />
          {/* less than 18 notification */}
          {/*  */}
          <input
            type="date"
            className=" w-56 h-10 border-gray-200 border rounded-md text-center text-sm text-gray-400"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
          <br />
          {/* incorrect password notification  */}
          {/*  */}
          <div className="flex flex-row">
            <input
              type="password"
              placeholder="password"
              className=" w-56 h-10 border-gray-200 border rounded-md text-center text-sm"
              onChange={passwordHandler}
              value={enteredPassword}
            />
            &nbsp;
            <input
              type="password"
              placeholder="confirm password"
              className=" w-56 h-10 border-gray-200 border rounded-md text-center text-sm"
              onChange={passwordConfirmHandler}
              value={enteredConfirmPassword}
            />
          </div>
          <br />
          <button
            type="submit"
            className="button__login text-sm p-0.5 h-10 w-56 bg-black rounded-full text-white"
          >
            Sign up
          </button>
          <br />
          <p className="text-sm text-center">
            Already have an account?
            <button type="submit" className=" text-sky-500" onClick={signin}>
              &nbsp; Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
