import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),

    onSuccess: () => {
      toast.success(`Booking deleted successfully!`);
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: () => {
      toast.error("Booking could not be deleted!");
    },
  });

  return { isDeleting, deleteBooking };
}

export default useDeleteBooking;
