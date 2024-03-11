import React, { useState, useEffect } from "react";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9999/infor");
        const data = await response.json();
        const doctorsData = data.filter((doctor) => doctor.role === "doctor");

        const doctorsWithRating = await Promise.all(
          doctorsData.map(async (doctor) => {
            const ratingResponse = await fetch(
              `http://localhost:9999/rating?doctorId=${doctor.id}`
            );
            const ratingData = await ratingResponse.json();

            console.log("Doctor:", doctor);
            console.log("Rating Data:", ratingData);

            const doctorRating = ratingData.find(
              (rating) => rating.doctorId === doctor.id
            );

            const rating = doctorRating ? doctorRating.rating : 0;
            const ratingCount = doctorRating ? doctorRating.ratingCount : 0;
            
            return {
              ...doctor,
              rating,
              ratingCount,
            };
          })
        );

        setDoctors(doctorsWithRating);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen h-auto flex justify-center items-center mt-[10px]">
      <div className="w-3/4">
        <div className="w-full h-auto">
          <div className="w-full flex justify-between">
            <h2 className="font-mono text-[20px] font-bold text-[#109AE5]">
              Doctor List
            </h2>
          </div>
          <div className="w-full h-[2px] bg-[#109AE5] rounded-[-2px] mt-[10px]"></div>
          <div className="w-full">
            <table className="w-full mt-8 table-auto font-mono">
              <thead>
                <tr className="bg-[#109AE5] text-white font-bold">
                  <th className="px-4 py-2 border">Doctor Name</th>
                  <th className="px-4 py-2 border">Specify</th>
                  <th className="px-4 py-2 border">Rating</th>
                  <th className="px-4 py-2 border">Detail</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor.id} className="bg-white">
                    <td className="px-4 py-2 border">{doctor.fullName}</td>
                    <td className="px-4 py-2 border">{doctor.specify}</td>
                    <td className="px-4 py-2 border">
                      {doctor.rating !== null ? (
                       `${((doctor.rating / doctor.ratingCount)/2).toFixed(1)}/5 stars (of ${doctor.ratingCount} rating)`
                      ) : (
                        "No rating"
                      )}
                    </td>
                    <td className="px-4 py-2 border">
                      <div className="w-full h-full flex items-center justify-center">
                        <a href="/">
                          <button className="p-[10px] bg-[#109AE5] rounded-[5px] text-white">
                            View doctor's detail
                          </button>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}