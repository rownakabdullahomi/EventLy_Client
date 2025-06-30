import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddEvent = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    data.postedBy = user._id;

    try {
      const res = await axiosSecure.post("/event", data);
      if (res.data.success) {
        toast.success("Event created successfully!");
        reset();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create event. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-2xl my-10">
      <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
        Add New Event
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
            placeholder="Your name"
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

        {/* Description (Full Width) */}
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
            defaultValue={0}
            min={0}
            {...register("attendeeCount")}
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button (Full Width on 2nd Col) */}
        <div className="flex items-end justify-end md:col-span-1">
          <button type="submit" className="btn btn-primary w-full">
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
