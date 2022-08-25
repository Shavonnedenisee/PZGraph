import { useState } from "react";
import { LineChart, Line, ReferenceArea, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Container } from "./LineGraphStyled";
import { data } from "./Data";


export const LineGraph = () => {

     return (
          <Container>
               <LineChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                         <Line type="monotone" dataKey="Power" stroke="#8884d8" strokeWidth={3} dot={false} />
                         {/* NOT SURE IF I WANT TO REMOVE THESE OR NOT - THEY CREATE LABELS FOR THE AXISES */}
                         {/* <XAxis dataKey="name"/>
                         <YAxis /> */}
                         <ReferenceArea y2={84} label="PZ1" fill="blue" />
                         <ReferenceArea y1={84} y2={112} fill="red" label="PZ2"/>
                         <ReferenceArea y1={112} y2={135} fill="yellow" label="PZ3"/>
                         <ReferenceArea y1={135} y2={157} fill="green" label="PZ4"/>
                         <ReferenceArea y1={157} y2={180} fill="pink" label="PZ5"/>
                         <ReferenceArea y1={180} y2={225} fill="purple" label="PZ6"/>
                         <ReferenceArea y1={225} fill="orange" label="PZ7"/>
               </LineChart>
          </Container>
     );
}

