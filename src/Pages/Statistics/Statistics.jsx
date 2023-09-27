/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const Statistics = () => {

    const allData = useLoaderData();
    const [donations,setDonation]=useState([]);

    useEffect(()=>{
        const donation=JSON.parse(localStorage.getItem('donation'));
        if(donation){
            setDonation(donation)
        }
    },[]);
    console.log(allData)
    
    const data = [
        { name: 'Group A', value: allData.length },
        { name: 'Group b', value: donations.length },
      
      ];
      console.log(data)
      
      const COLORS = ['#FF444A', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
      
      return (
            

        <div className=" lg:flex lg:justify-center">
            <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              
              <div className=" mx-16 lg:-ml-72 "> Your Donation
                <progress className="progress progress-success w-32" value="100" max="100"></progress>
                </div>

               
                    <div className="mt-10 mx-16 lg:-ml-72">Total donation
                    <progress className="progress progress-error w-32" value="100" max="100"></progress>
                    </div>
                    

                
                
                
             
        </div>
        
        
    );
    
     
      };




    


export default Statistics;