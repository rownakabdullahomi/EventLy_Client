import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyEvents = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: myEvents = {}, refetch, } = useQuery({
    queryKey: ["myEvents", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/event/${user._id}`);
      return res.data;
    },
  });
    console.log(myEvents.data);
  

  return (
    <div>MyEvents</div>
  )
}

export default MyEvents