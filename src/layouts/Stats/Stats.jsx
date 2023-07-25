import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, ScatterChart, Scatter } from 'recharts';
import './stats.css';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 349, pv: 4300, amt: 2100 },
];

const scatterData = [
  { x: 200, y: 200, z: 10 },
  { x: 300, y: 100, z: 20 },
  { x: 400, y: 300, z: 5 },
 
];

const Stats = () => {
  return (
    <div className="stats-container">
      <h1 className="content_header">OUR STATISTICS</h1>
      <div>
      <div className="text-container" >
        <h1 className="creative-font">Stats</h1>
        <p className="creative-font box box-item">Global Presence: UpEase has a strong global presence, operating in more than 30 countries and working with institutions from diverse educational systems and cultures.</p>
      </div>
      <div className="text-container">
        <p className="creative-font box box-item">500,000 students.</p>
       
      </div>
      </div>
      <div>
      <div className="text-container">
       
        <p className="creative-font box box-item">Over 100 leading academic institutions worldwide.</p>
        
      </div>
      <div className="text-container">
        <p className="creative-font box box-item">95% client satisfaction rate.</p>
      </div>
      </div>
      <div className="graphs-container">
        
        <div className="graph" >
          <LineChart width={400} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="graph">
          <BarChart width={400} height={300} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </div></div>
        <div className="graph" style={{ height: '300px' }}>

          <ScatterChart width={400} height={300} data={scatterData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="x" type="number" />
            <YAxis dataKey="y" type="number" />
            <Scatter dataKey="z" fill="#8884d8" />
            <Tooltip />
          </ScatterChart>
        </div>
    </div>
  );
};

export default Stats;
