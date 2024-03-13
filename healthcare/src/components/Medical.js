import React, { useState, useEffect } from 'react';

export default function Medical() {
    const [medicalRecords, setMedicalRecords] = useState([]);
    const [userRole, setUserRole] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        setUserId(storedUserId);

        fetch(`http://localhost:9999/infor/${storedUserId}`)
            .then(response => response.json())
            .then(data => {
                setUserRole(data.role);

                if (data.role === 'user') {
                    fetch(`http://localhost:9999/medical?patientId=${storedUserId}`)
                        .then(response => response.json())
                        .then(data => {
                            setMedicalRecords(data);
                        })
                        .catch(error => {
                            console.error('Error fetching medical records:', error);
                        });
                } else if (data.role === 'doctor') {
                    fetch(`http://localhost:9999/medical?doctorId=${storedUserId}`)
                        .then(response => response.json())
                        .then(data => {
                            setMedicalRecords(data);
                        })
                        .catch(error => {
                            console.error('Error fetching medical records:', error);
                        });
                }
            })
            .catch(error => {
                console.error('Error fetching user role:', error);
            });
    }, []);

    return (
        <div className="w-full h-auto flex justify-center items-center mt-[10px]">
            <div className="w-full">
                <div className="w-full mt-[20px]">
                    <p className="font-mono text-[30px] text-center font-extrabold mb-[20px]">
                        Medical History
                    </p>
                    <div className="w-full">
                        <table className="w-full mt-8 table-auto font-mono">
                            <thead>
                                <tr className="bg-[#109AE5] text-white font-bold">
                                    <th className="px-4 py-2 border">Name</th>
                                    <th className="px-4 py-2 border">Start Date</th>
                                    <th className="px-4 py-2 border">End Date</th>
                                    <th className="px-4 py-2 border">Usage</th>
                                    <th className="px-4 py-2 border">Notification</th>
                                    {userRole === 'doctor' ? (
                                        <th className="px-4 py-2 border">Patient Name</th>
                                    ) : (
                                        <th className="px-4 py-2 border">Prescriber</th>
                                    )}
                                    {userRole !== 'doctor' && (
                                        <th className="px-4 py-2 border">Status</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {medicalRecords.map(record => (
                                    <tr key={record.id} className="bg-white">
                                        <td className="px-4 py-2 border">
                                            <div className="w-full h-full flex items-center justify-center">
                                                <p>{record.medicineName}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <div className="w-full h-full flex items-center justify-center">
                                                <p>{record.startDate}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <div className="w-full h-full flex items-center justify-center">
                                                <p>{record.endDate}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <div className="w-full h-full flex items-center justify-center max-w-[200px]">
                                                <p>{record.usage}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <div className="w-full h-full flex items-center justify-center">
                                                <p>{record.notification1} & {record.notification2}</p>
                                            </div>
                                        </td>
                                        {userRole === 'doctor' ? (
                                            <td className="px-4 py-2 border">
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <p>{record.patientFullName}</p>
                                                </div>
                                            </td>
                                        ) : (
                                            <td className="px-4 py-2 border">
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <p>{record.prescriber}</p>
                                                </div>
                                            </td>
                                        )}
                                        {userRole !== 'doctor' && (
                                            <td className="px-4 py-2 border">
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <p>Status</p>
                                                </div>
                                            </td>
                                        )}
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