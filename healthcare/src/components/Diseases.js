import React, { useState } from 'react';
export default function Diseases() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const handleCancel = () => {
        setShowPopup(false);
    };
    return (
        <div className="w-full h-auto flex justify-center items-center mt-[10px]">
            <div className="w-full">
                <div className="w-full mt-[20px]">
                    <p className="font-mono text-[30px] text-center font-extrabold mb-[20px]">
                        Diseases History
                    </p>
                    <div className="w-full">
                        <button className="bg-[#109AE5] p-[10px] rounded-[20px] text-white font-mono" onClick={togglePopup}>
                            Add Diseases
                        </button>
                    </div>
                    {showPopup && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white w-2/5 p-8 rounded-lg">
                                <form>
                                    <div className='flex gap-[30px] justify-center'>
                                        <div className="mb-4 w-[250px]">
                                            <label htmlFor="medicineName" className="block text-sm font-bold mb-2">Medicine Name</label>
                                            <input type="text" className="border rounded px-4 py-2 w-full" />
                                        </div>
                                        <div className="mb-4 w-[250px]">
                                            <label htmlFor="medicineName" className="block text-sm font-bold mb-2">Start Date</label>
                                            <input type="date" className="border rounded px-4 py-2 w-full" />
                                        </div>
                                    </div>
                                    <div className='flex gap-[30px] justify-center'>
                                        <div className="mb-4 w-[250px]">
                                            <label htmlFor="medicineName" className="block text-sm font-bold mb-2">Describe</label>
                                            <input type="text" className="border rounded px-4 py-2 w-full" />
                                        </div>
                                        <div className="mb-4 w-[250px]">
                                            <label htmlFor="medicineName" className="block text-sm font-bold mb-2">Status</label>
                                            <input type="text" className="border rounded px-4 py-2 w-full" />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-[20px]">
                                        <button type="button" className="w-[100px] bg-gray-500 text-white px-4 py-2 rounded-md ml-4" onClick={handleCancel}>Cancel</button>
                                        <button type="submit" className="w-[100px] bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>

                                    </div>
                                </form>
                                <button className="absolute top-0 right-0 p-2" onClick={togglePopup}>Close</button>
                            </div>
                        </div>
                    )}
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