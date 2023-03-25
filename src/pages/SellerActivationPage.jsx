import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center text-center">
      {error ? (
        <p>Your account has been created suceessfully!</p>
      ) : (
        <p>Your token is expired!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;
