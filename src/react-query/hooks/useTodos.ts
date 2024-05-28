import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    // queryFn: apiClient.getAll.bind(apiClient), //if we use none arrow function then this line will work
    staleTime: 10 * 1000, //10s
  });
};
export default useTodos;
