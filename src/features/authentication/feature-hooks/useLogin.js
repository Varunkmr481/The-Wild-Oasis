import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    // success handler receive data returned by mutation fn
    onSuccess: (user) => {
      console.log(user);
      toast.success("You have successfully logged in");
      navigate("/");
    },

    // log error
    onError: (err) => {
      console.log("ERR : ", err);
      toast.error(err.message);
    },
  });

  return { login, isLoggingIn };
}
