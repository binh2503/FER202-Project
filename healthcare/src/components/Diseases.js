export default function Diseases() {
    return (
        <div className="w-full h-auto flex justify-center items-center mt-[10px]">
            <div className="w-full">
                <div className="w-full mt-[20px]">
                    <p className="font-mono text-[30px] text-center font-extrabold mb-[20px]">
                        Diseases History
                    </p>
                    <div className="w-full">
                        <button className="bg-[#109AE5] p-[10px] rounded-[20px] text-white font-mono">
                            Add Diseases
                        </button>
                    </div>
                    <div className="w-full">
                        <table className="w-full mt-8 table-auto font-mono">
                            <thead>
                                <tr className="bg-[#109AE5] text-white font-bold">
                                    <th className="px-4 py-2 border">Diseases</th>
                                    <th className="px-4 py-2 border">Start Date</th>
                                    <th className="px-4 py-2 border">Describe</th>
                                    <th className="px-4 py-2 border">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p>Viêm Xoang</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p>12/4/2024</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border max-w-[200px]">
                                        <div className="w-full h-full flex items-center justify-center ">
                                            <p>Viêm mũi dị ứng mãn tính</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p>Khỏi thế đéo nào được</p>
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