import React from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

import PropTypes from 'prop-types'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#1E3E62', '#7E60BF', '#E4B1F0'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};




const BookingChart = ( bookingsInfo ) => {

    const bookings = bookingsInfo.bookingsInfo;
    

    const pieChartData = bookings.map(booking=>{
       return {name: booking._id, value: booking.totalRevenue}
    })

    return (
        <PieChart width={700} height={350}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
    );
};

BookingChart.propType = {
    bookingsInfo: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default BookingChart;