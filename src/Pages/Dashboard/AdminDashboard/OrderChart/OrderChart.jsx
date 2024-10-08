import React from 'react';
import PropTypes from 'prop-types'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};



const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const OrderChart = ({ bookingStats }) => {

    return (
        <BarChart
            width={700}
            height={350}
            data={bookingStats}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Bar dataKey="totalBookings" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {bookingStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
                <Legend />
            </Bar>
        </BarChart>
    );
};

OrderChart.propTypes = {
    bookingStats: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OrderChart;