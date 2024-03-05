import { UilUser } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";

export default function UserInformation() {
  const [personalInfor, setPersonalInfor] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      fetch(`http://localhost:9999/infor/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setPersonalInfor(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return (
    <div className="w-screen h-auto flex justify-center items-center mt-[10px]">
      <div className="w-3/4">
        <div className="w-full h-auto">
          <h2 className="font-mono text-[20px] font-bold text-[#109AE5]">
            User Information
          </h2>
          <div className="w-full h-[2px] bg-[#109AE5] rounded-[-2px] mt-1"></div>
          <div className="w-full h-auto flex">
            <div className="w-1/4 mt-[20px]">
              <div className="w-[200px] h-[200px] bg-[#109AE5] rounded-[200px] flex justify-center items-center">
                <UilUser size={100} color={"#fff"} />
              </div>
            </div>
            <div className="w-3/4 mt-[20px]">
              {personalInfor && (
                <div className="w-full h-auto">
                  <p className="font-mono text-[30px] font-extrabold mb-[20px]">
                    Personal
                  </p>
                  <div className="flex ">
                    <p className="text-[20px] font-mono font-bold">Full name:</p>
                    <p className="text-[20px] font-mono ml-[10px]">
                      {personalInfor.fullName}
                    </p>
                  </div>
                  <div className="flex ">
                    <p className="text-[20px] font-mono font-bold">
                      Date of birth:
                    </p>
                    <p className="text-[20px] font-mono ml-[10px]">{personalInfor.dateOfBirth}</p>
                  </div>
                  <div className="flex ">
                    <p className="text-[20px] font-mono font-bold">Email:</p>
                    <p className="text-[20px] font-mono ml-[10px]">
                      {personalInfor.email}
                    </p>
                  </div>
                  <div className="flex ">
                    <p className="text-[20px] font-mono font-bold">
                      Phone number:
                    </p>
                    <p className="text-[20px] font-mono ml-[10px]">{personalInfor.phone}</p>
                  </div>
                </div>
              )}

              <div className="w-full h-[1px] bg-[#109AE5] mt-[20px]"></div>

            </div>
          </div>
        </div>
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
                <tr className="bg-white">
                  <td className="px-4 py-2 border">
                    <div className="w-full h-full flex items-center justify-center">
                      <p>2021-10-10</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="w-full h-full flex items-center justify-center">
                      <p>Dr.Smith</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="w-full h-full flex items-center justify-center">
                      <p>16:00</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="w-full h-full flex items-center justify-center">
                      <p>2021-10-10</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="w-full h-full flex items-center justify-center max-w-[300px]">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border ">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="flex gap-5">
                        <button className="bg-blue-500 text-white w-20 rounded-md py-1">Rate</button>
                        <button className="bg-red-500 text-white w-20 rounded-md py-1">Cancel</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full h-[1px] bg-[#109AE5] mt-[20px]"></div>
        </div>
      </div>


    </div>
  );
}
