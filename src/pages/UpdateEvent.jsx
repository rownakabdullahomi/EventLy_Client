import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const UpdateEvent = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/event/single/${id}`);
      return res.data.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
  if (data) {
    const formattedData = {
      ...data,
      dateTime: new Date(data.dateTime).toISOString().slice(0, 16),
    };
    reset(formattedData);
  }
}, [data, reset]);

  const onSubmit = async (formData) => {
    try {
      const res = await axiosSecure.patch(`/event/${id}`, formData);
      if (res.data.success) {
        toast.success("Event updated successfully!");
        navigate("/my-events")
        
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to update event.");
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading event...</p>;
  if (isError)
    return <p className="text-center text-red-500">Failed to fetch event.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
        Update Event
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Event Title */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Event Title</label>
          <input
            type="text"
            placeholder="Enter event title"
            {...register("title", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Posted By */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Posted By</label>
          <input
            type="text"
            value={user.name}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Date and Time */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Date & Time</label>
          <input
            type="datetime-local"
            {...register("dateTime", {
              required: "Date & time is required",
              validate: (value) => {
                const selectedDate = new Date(value);
                const now = new Date();
                return (
                  selectedDate > now ||
                  toast.error("Date & time must be in the future")
                );
              },
            })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            {...register("location", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm font-medium mb-1">Description</label>
          <textarea
            placeholder="Event description"
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full"
            rows={4}
          />
        </div>

        {/* Attendee Count */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Attendee Count</label>
          <input
            type="number"
            min={0}
            {...register("attendeeCount")}
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex items-end justify-end md:col-span-1">
          <button type="submit" className="btn btn-primary w-full">
            Update Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEvent;
