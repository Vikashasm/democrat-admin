import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const init = {
    username: "",
    password: "",
  };
  const [uInfo, setuInfo] = useState(init);

  const chgUserData = (e) => {
    e.preventDefault();
    setuInfo({ ...uInfo, [e.target.name]: e.target.value });
  };
  const handleaccount = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", uInfo.username);
    formData.append("password", uInfo.password);
    console.log("njj", uInfo);
    axios
      .post("https://medicare-application.herokuapp.com/api/v1/login", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        encType="multipart/form-data"
        method="POST"
        onSubmit={handleaccount}
      >
        <div>
          <input
            type="text"
            className="border-2 text-xs p-2 rounded-md bg-zinc-50"
            value={uInfo.username}
            placeholder="Username"
            onChange={(e) => chgUserData(e)}
            name="username"
          />
        </div>

        <div style={{ marginTop: "5%" }}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="border-2 text-xs p-2 rounded-md bg-zinc-50"
            value={uInfo.password}
            onChange={(e) => chgUserData(e)}
          />
        </div>

        <button
          style={{
            width: "45%",
            padding: "1rem 2rem",
            margin: "1.5rem auto",
            borderRadius: "7%",
            border: "none",
            backgroundColor: "skyblue",
          }}
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
