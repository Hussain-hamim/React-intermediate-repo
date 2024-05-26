import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useData = (endpoint: string) => {
  const fetchData = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/" + endpoint)
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: [endpoint],
    queryFn: fetchData,
    staleTime: 10 * 1000, //10s
  });
};
export default useData;
