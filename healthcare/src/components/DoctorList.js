import { UilArrowRight } from "@iconscout/react-unicons";
export default function DoctorList() {
    return (
        <div className="w-screen h-auto flex justify-center items-center mt-[10px]">
            <div className="w-3/4">
                <div className="w-full h-auto">
                    <div className="w-full flex justify-between">
                        <h2 className="font-mono text-[20px] font-bold text-[#109AE5]">
                            Doctor List
                        </h2>
                        <div className="flex">
                            <a href="/homepage">
                                <button className="bg-[#109AE5] text-white rounded-md p-1 font-bold font-mono flex items-center justify-center">
                                    Back to home
                                    <UilArrowRight size={20} />
                                </button>
                            </a>
                        </div>
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
                                <tr className="bg-white">
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            Do Gia Binh
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            Heart
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p className="text-center">5/5 stars (of 30 rating)</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border ">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <a href="/">
                                                <button className="p-[10px] bg-[#109AE5] rounded-[5px] text-white">
                                                    View doctor's detail
                                                </button>
                                            </a>

                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}