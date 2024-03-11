import { UilUser, UilArrowRight } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";

export default function BookingHistory() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [bookingInfo, setBookingInfo] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cancelBookingId, setCancelBookingId] = useState(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [showRatingPopup, setShowRatingPopup] = useState(false);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      fetch(`http://localhost:9999/infor/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setPersonalInfo(data);
          const patientId = data.id;

          fetch(`http://localhost:9999/booking?patientId=${patientId}`)
            .then((response) => response.json())
            .then((bookingData) => {
              setBookingInfo(bookingData);
            })
            .catch((error) => {
              console.error("Error fetching booking data:", error);
            });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
      fetch("http://localhost:9999/rating")
        .then((response) => response.json())
        .then((data) => {
          setRatings(data);
        })
        .catch((error) => {
          console.error("Error fetching ratings data:", error);
        });
    }
  }, []);

  const handleCancelAppointment = (bookingId) => {
    setShowConfirmation(true);
    setCancelBookingId(bookingId);
  };

  const handleConfirmation = (confirmed) => {
    setShowConfirmation(false);
    if (confirmed) {
      fetch(`http://localhost:9999/booking/${cancelBookingId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          const updatedBookingInfo = bookingInfo.filter(
            (booking) => booking.id !== cancelBookingId
          );
          setBookingInfo(updatedBookingInfo);
        })
        .catch((error) => {
          console.error("Error canceling appointment:", error);
        });
    }
  };

  const handleRateAppointment = () => {
    if (!selectedBookingId) return;

    const selectedBooking = bookingInfo.find(
      (booking) => booking.id === selectedBookingId
    );
    if (!selectedBooking) return;

    const updatedBookingInfo = bookingInfo.map((booking) => {
      if (booking.id === selectedBookingId) {
        return {
          ...booking,
          isRated: true,
          status: false, // Set status to false when rated
        };
      }
      return booking;
    });

    setBookingInfo(updatedBookingInfo);

    fetch(`http://localhost:9999/booking/${selectedBookingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedBooking,
        isRated: true,
        status: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Booking updated with rating:", data);
        setShowRatingPopup(false);
      })
      .catch((error) => {
        console.error("Error updating booking with rating:", error);
      });

    const ratingData = {
      patientId: personalInfo.id,
      doctorId: selectedBooking.doctorId,
      rating: ratingValue,
      ratingCount: 1,
      bookingId: selectedBookingId,
    };

    const existingRatingIndex = ratings.findIndex(
      (rating) => rating.doctorId === ratingData.doctorId
    );

    if (existingRatingIndex !== -1) {
      const existingRating = ratings[existingRatingIndex];
      ratingData.ratingCount = existingRating.ratingCount + 1;
      ratingData.rating += existingRating.rating;

      fetch(`http://localhost:9999/rating/${existingRating.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ratingData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Rating updated:", data);
          setShowRatingPopup(false);
        })
        .catch((error) => {
          console.error("Error updating rating:", error);
        });
    } else {
      fetch("http://localhost:9999/rating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ratingData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Rating submitted:", data);
          setShowRatingPopup(false);
        })
        .catch((error) => {
          console.error("Error submitting rating:", error);
        });
    }
  };

  const handleOpenRatingPopup = (bookingId) => {
    setShowRatingPopup(true);
    setSelectedBookingId(bookingId);
  };

  return (
    <div className="w-full h-auto flex justify-center items-center mt-[10px]">
      <div className="w-full">
        <div className="w-full mt-[20px]">
          <p className="font-mono text-[30px] text-center font-extrabold mb-[20px]">
            Booking History
          </p>
          <div className="w-full">
            <table className="w-full mt-8 table-auto font-mono">
              <thead>
                <tr className="bg-[#109AE5] text-white font-bold">
                  <th className="px-4 py-2 border">Created Date</th>
                  <th className="px-4 py-2 border">Doctor Name</th>
                  <th className="px-4 py-2 border">Time</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Describe</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingInfo &&
                  bookingInfo.map((booking) => (
                    <tr key={booking.id} className="bg-white">
                      <td className="px-4 py-2 border">
                        <div className="w-full h-full flex items-center justify-center">
                          <p>{booking.currentDate}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2 border">
                        <div className="w-full h-full flex items-center justify-center">
                          <p>{booking.doctorFullName}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2 border">
                        <div className="w-full h-full flex items-center justify-center">
                          <p>{booking.time}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2 border">
                        <div className="w-full h-full flex items-center justify-center">
                          <p>{booking.date}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2 border">
                        <div className="w-full h-full flex items-center justify-center max-w-[300px]">
                          <p>{booking.symptoms}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2 border ">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="flex gap-5">
                            {!booking.isRated && (
                              <button
                                className="bg-blue-500 text-white w-20 rounded-md py-1"
                                onClick={() =>
                                  handleOpenRatingPopup(booking.id)
                                }
                              >
                                Rate
                              </button>
                            )}
                            {!booking.isRated && (
                              <button
                                className="bg-red-500 text-white w-20 rounded-md py-1"
                                onClick={() =>
                                  handleCancelAppointment(booking.id)
                                }
                                disabled={!booking.status}
                              >
                                Cancel
                              </button>
                            )}
                            {!booking.status && (
                              <button
                                className="bg-green-500 text-white w-20 rounded-md py-1"
                                disabled
                              >
                                Done
                              </button>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="w-full h-[1px] bg-[#109AE5] mt-[20px]"></div>
        </div>
      </div>

      {showConfirmation && (
        <div className="confirm">
          <div className="confirm-content">
            <p>Are you sure you want to cancel this appointment?</p>
            <button onClick={() => handleConfirmation(true)}>Yes</button>
            <button onClick={() => handleConfirmation(false)}>No</button>
          </div>
        </div>
      )}

      {showRatingPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-bold mb-4">Rate this appointment</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Rating:
              </label>
              <input
                type="number"
                min="0"
                max="10"
                step="1"
                value={ratingValue}
                onChange={(e) => {
                  const inputValue = parseFloat(e.target.value);
                  if (
                    !isNaN(inputValue) &&
                    inputValue >= 0 &&
                    inputValue <= 10
                  ) {
                    setRatingValue(inputValue);
                  }
                }}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleRateAppointment}
              >
                Confirm
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => setShowRatingPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}