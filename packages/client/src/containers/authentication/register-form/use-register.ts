import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useService } from "hooks";
import { REGISTER_QUERY } from "services";

export const useRegister = () => {
  const { usePost } = useService();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = usePost({
    query: REGISTER_QUERY,
    onSuccess: (res) => console.log(res),
  });

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit: useCallback((state) => {
      const payload = { ...state, type: "test" };
      mutate({ payload });
    }, []),
  };
};
