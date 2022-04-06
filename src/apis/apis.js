import axios from "axios";
import { baseController } from "./index";

export const signInUser = async (body) => {
  let res;
  const { email } = body;
  try {
    //debugger;
    res = await axios.post(`${baseController}/auth/login`, body);
    if (res.data) {
      sessionStorage.clear();
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("token", res.data.token);
    }
  } catch (e) {
    console.log(e);
  }
  return res.data;
};

export const signUpUser = async (body) => {
  let res;
  try {
    //debugger;
    res = await axios.post(`${baseController}/auth/register`, body);
  } catch (e) {
    console.log(e);
  }
  return res.data;
};

export const signOut = async () => {
  const user_token = sessionStorage.getItem("token");
  let res;
  try {
    //debugger;
    res = await axios.get(`${baseController}/auth/logout`, {
      headers: { Authorization: `Bearer ${user_token}` },
    });
  } catch (e) {
    console.log(e);
  }
  return res.data;
};

export const getUser = async () => {
  const user_token = sessionStorage.getItem("token");
  let res;
  try {
    //debugger;
    res = await axios.get(`${baseController}/auth/me`, {
      headers: { Authorization: `Bearer ${user_token}` },
    });
  } catch (e) {
    console.log(e);
  }
  return res.data;
};

export const getPosts = async () => {
  const user_token = sessionStorage.getItem("token");
  let res;
  try {
    //debugger;
    res = await axios.get(`${baseController}/products`, {
      headers: { Authorization: `Bearer ${user_token}` },
    });
    if (res.data) {
    }
    //window.location.href = "../home";
  } catch (e) {
    console.log(e);
  }
  return res.data;
};
