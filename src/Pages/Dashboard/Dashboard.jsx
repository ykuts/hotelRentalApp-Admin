import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookings, reset } from "../../features/booking/bookingSlice";
import BookingList from "../../component/BookingList/BookingList";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { bookings, isSuccess } = useSelector((state) => state.booking);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess, dispatch]);
  
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getBookings());
  }, [user,navigate,dispatch]);

  return (
    <div className="container">
    <div>
      <h1 className="heading center">Booking Overview

      </h1>
      {bookings.length > 0 ? <BookingList data={bookings} /> : null}
    </div>
    
    </div>
  );
};

export default Dashboard;