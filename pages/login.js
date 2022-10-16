import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Router from "next/router";
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

    axios
      .post("https://medicare-application.herokuapp.com/api/v1/login", uInfo)
      .then((res) => {
        if (res.data.success == true) {
          localStorage.setItem("medicareAdmin", JSON.stringify(res.data.token));
          localStorage.setItem(
            "medicareAdminData",
            JSON.stringify(res.data.user)
          );
          Router.push("/dashboard");
        }
      })
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
      <form method="POST" onSubmit={handleaccount}>
        <div style={{ borderRadius: "10px", border: "1px solid blue" }}>
          <input
            style={{ borderRadius: "10px", border: "1px solid blue" }}
            type="text"
            className="border-2 text-xs p-2 rounded-md bg-zinc-50"
            value={uInfo.username}
            placeholder="Username"
            onChange={(e) => chgUserData(e)}
            name="username"
          />
        </div>

        <div
          style={{
            marginTop: "5%",
            borderRadius: "10px",
            border: "1px solid blue",
          }}
        >
          <input
            style={{ borderRadius: "10px", border: "1px solid blue" }}
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
