import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useService } from "hooks";
import { LOGIN_QUERY } from "services";

export const useLogin = () => {
  const { usePost } = useService();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = usePost({
    query: LOGIN_QUERY,
    onSuccess: (res) => console.log(res),
  });

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit: useCallback((state) => {
      const payload = state;
      mutate({ payload });
    }, []),
  };
};
