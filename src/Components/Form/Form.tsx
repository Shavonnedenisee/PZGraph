
import { LineChart, Line, ReferenceArea, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useCurrentPng } from "recharts-to-png";
import FileSaver from "file-saver";
import { useCallback, useState } from 'react';
const xlsx = require('xlsx/xlsx.mjs')


export const Form = () => {
    const [jsonObj, setJsonObj] = useState<any[]>([]);
    const [getPng, {ref, isLoading}] = useCurrentPng();

    const handleLineGraphDownload = useCallback(async () => {
        const png = await getPng();

        if(png) {
            FileSaver.saveAs(png, 'myChart.png')
        }
    }, [getPng])

    const readUploadFile = (e: any) => {
        e.preventDefault();
        if(e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target?.result;
                const workbook = xlsx.read(data, {type: "array"});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                setJsonObj(json)
            }
            reader.readAsArrayBuffer(e.target.files[0])
        }
    }

    return (
        <div>
            <label>Upload File</label>
            <input type="file" name="upload" id="upload" onChange={readUploadFile}/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <LineChart
                        ref={ref}
                        width={600}
                        height={400}
                        data={jsonObj}>
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
                </div>
                <button type="button" onClick={handleLineGraphDownload}>
                    {isLoading ? "Downloading..." : "Download Chart"}
                </button>
        </div>
    )
}