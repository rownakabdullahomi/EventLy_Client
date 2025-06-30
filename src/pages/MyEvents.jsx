import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyEvents = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: myEvents = {}, refetch } = useQuery({
    queryKey: ["myEvents", user?._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/event/${user._id}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This event will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axiosSecure.delete(`/event/${id}`);
        toast.success("Event deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to delete event");
        
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 my-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        My Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myEvents?.data?.map((event) => (
          <div key={event._id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="text-xl font-bold text-primary">
                {event.title}
              </h3>
              <p>
                <span className="font-semibold">Posted By:</span> {user?.name}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {format(new Date(event.dateTime), "PPPpp")}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {event.location}
              </p>
              <p>
                <span className="font-semibold">Description:</span> {event.description}
              </p>
              <p>
                <span className="font-semibold">Attendees:</span> {event.attendeeCount}
              </p>
              <div className="card-actions justify-between mt-4">
                <Link to={`/update-event/${event._id}`} className="btn btn-sm btn-outline btn-primary">
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="btn btn-sm btn-outline btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
