import { useContext, useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { format } from "date-fns";
import toast from "react-hot-toast";
import NoData from "../components/shared/NoData";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const AllEvents = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  const {
    data: eventResponse = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["events", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/event");
      return res.data;
    },
  });

  // const allEvents = eventResponse.data || [];

  const allEvents = useMemo(() => eventResponse.data || [], [eventResponse]);

  // Sorting by dateTime (descending)
  const sortedEvents = useMemo(() => {
    return [...allEvents].sort(
      (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
    );
  }, [allEvents]);

  // Search and filter
  const filteredEvents = useMemo(() => {
    // const now = new Date();
    let filtered = sortedEvents;

    if (searchQuery) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const isThisWeek = (date) => {
      const now = new Date();
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(endOfWeek.getDate() + 6);
      return date >= startOfWeek && date <= endOfWeek;
    };

    const isLastWeek = (date) => {
      const now = new Date();
      const startOfLastWeek = new Date(
        now.setDate(now.getDate() - now.getDay() - 7)
      );
      const endOfLastWeek = new Date(startOfLastWeek);
      endOfLastWeek.setDate(endOfLastWeek.getDate() + 6);
      return date >= startOfLastWeek && date <= endOfLastWeek;
    };

    const isThisMonth = (date) => {
      const now = new Date();
      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    };

    const isLastMonth = (date) => {
      const now = new Date();
      const lastMonth = new Date(now.setMonth(now.getMonth() - 1));
      return (
        date.getMonth() === lastMonth.getMonth() &&
        date.getFullYear() === lastMonth.getFullYear()
      );
    };

    filtered = filtered.filter((event) => {
      const date = new Date(event.dateTime);
      switch (filterType) {
        case "today":
          return date.toDateString() === new Date().toDateString();
        case "thisWeek":
          return isThisWeek(date);
        case "lastWeek":
          return isLastWeek(date);
        case "thisMonth":
          return isThisMonth(date);
        case "lastMonth":
          return isLastMonth(date);
        default:
          return true;
      }
    });

    return filtered;
  }, [sortedEvents, searchQuery, filterType]);

  const handleJoinEvent = async (id) => {
    const data = {
      userId: user._id,
    };
    try {
      await axiosSecure.post(`/event/${id}`, data);
      toast.success("Successfully joined the event!");

      refetch();
    } catch (err) {
      // console.log(err);
      toast.error(err?.response?.data?.message || "Failed to join event");
    }
  };

  if (loading || isLoading) return <LoadingSpinner />;
  if (!filteredEvents) return <NoData />;

  return (
    <div className="max-w-7xl mx-auto p-4 my-10">
      <h2 className="text-3xl font-bold mb-4 text-center text-primary">
        All Events
      </h2>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by event title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full md:w-1/2"
        />

        <select
          className="select select-bordered"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="lastWeek">Last Week</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
        </select>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event._id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="text-xl font-bold text-primary">{event.title}</h3>
              <p>
                <span className="font-semibold">Posted By:</span>{" "}
                {event.postedBy?.name}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {format(new Date(event.dateTime), "PPPpp")}
              </p>
              <p>
                <span className="font-semibold">Location:</span>{" "}
                {event.location}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {event.description}
              </p>
              <p>
                <span className="font-semibold">Attendees:</span>{" "}
                {event.attendeeCount}
              </p>
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => handleJoinEvent(event._id)}
                  className="btn btn-sm btn-primary"
                >
                  Join Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
