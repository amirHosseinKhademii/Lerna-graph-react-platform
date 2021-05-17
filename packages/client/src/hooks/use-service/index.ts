import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { gqlClient } from "services";

export const useService = () => {
  const { invalidateQueries } = useQueryClient();

  return {
    useGet: (props: IUseService) => {
      const { url, key, params, onError, onSuccess } = props;
      const asyncGet = async () => await axios.get(url, { params });
      return useQuery(key, asyncGet, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    usePost: (props: IUseService) => {
      const { query, onError, onSuccess } = props;
      const asyncPost = async ({ payload }) =>
        await gqlClient.request(query, payload);
      return useMutation(asyncPost, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    usePut: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncPut = async (model) => await axios.put(url, model);
      return useMutation(asyncPut, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    useDelete: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncDelete = async () => await axios.delete(url);
      return useMutation(asyncDelete, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    useUpdate: (props: IUseService) => {
      const { key } = props;
      invalidateQueries(key);
    },
  };
};
