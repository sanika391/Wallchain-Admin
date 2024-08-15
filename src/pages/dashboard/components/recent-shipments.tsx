// components/recent-shipments.tsx
import React from 'react';

// Define type for shipment
interface Shipment {
  id: string;
  destination: string;
  driver: string;
  status: 'In Transit' | 'Delivered' | 'Pending'; // You can expand this based on possible statuses
}

// Define the component
export const RecentShipments: React.FC = () => {
  // Sample shipment data
  const shipments: Shipment[] = [
    {
      id: 'SH12345',
      destination: 'Mumbai, Maharashtra',
      driver: 'Rajesh Kumar',
      status: 'In Transit',
    },
    {
      id: 'SH12346',
      destination: 'Delhi, Delhi',
      driver: 'Pooja Sharma',
      status: 'Delivered',
    },
    {
      id: 'SH12347',
      destination: 'Bangalore, Karnataka',
      driver: 'Amit Singh',
      status: 'Pending',
    },
    {
      id: 'SH12348',
      destination: 'Chennai, Tamil Nadu',
      driver: 'Lakshmi Nair',
      status: 'In Transit',
    },
    {
      id: 'SH12349',
      destination: 'Kolkata, West Bengal',
      driver: 'Ravi Verma',
      status: 'Delivered',
    },
  ];

  return (
    <div className='space-y-4'>
      {shipments.map((shipment) => (
        <div
          key={shipment.id}
          className='flex flex-col border-b p-4' // Changed to flex-col to stack elements vertically
        >
          <div className='font-medium text-lg'>{shipment.id}</div> {/* ID displayed on top */}
          <div className='text-sm'>{shipment.destination}</div>
          <div className='text-sm'>{shipment.driver}</div>
          <div
            className={`font-semibold mt-2 ${shipment.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}
          >
            {shipment.status}
          </div>
        </div>
      ))}
    </div>
  );
};
