import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Components/Context/AuthProvider";
import AuthService from "../services/AuthService";

const Login = () => {
	const data = AuthService("/user", "/login");
};
