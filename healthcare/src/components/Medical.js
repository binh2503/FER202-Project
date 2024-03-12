export default function Medical() {
    return (
        <div className="w-full h-auto flex justify-center items-center mt-[10px]">
            <div className="w-full">
                <div className="w-full mt-[20px]">
                    <p className="font-mono text-[30px] text-center font-extrabold mb-[20px]">
                        Medical History
                    </p>
                    <div className="w-full">
                        <button className="bg-[#109AE5] p-[10px] rounded-[20px] text-white font-mono">
                            Add medicine
                        </button>
                    </div>
                    <div className="w-full">
                        <table className="w-full mt-8 table-auto font-mono">
                            <thead>
                                <tr className="bg-[#109AE5] text-white font-bold">
                                    <th className="px-4 py-2 border">Name</th>
                                    <th className="px-4 py-2 border">Start Date</th>
                                    <th className="px-4 py-2 border">End Date </th>
                                    <th className="px-4 py-2 border">Usage</th>
                                    <th className="px-4 py-2 border">Notification</th>
                                    <th className="px-4 py-2 border">Prescriber</th>
                                    <th className="px-4 py-2 border">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p>Panadon Extra</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p>12/4/2024</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p>30/4/2024</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center max-w-[200px]">
                                            <p>2 time/day (after lunch and dinner)</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p>11:30 AM & 7:00 PM </p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p>Dr. Do Gia Binh</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border ">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="flex gap-5">
                                                <button
                                                    className="bg-red-500 text-white w-20 rounded-md py-1"
                                                >
                                                    Edit
                                                </button>
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