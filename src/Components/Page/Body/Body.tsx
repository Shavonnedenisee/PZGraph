import { LineGraph } from "../../Graph/LineGraph"

export const Body = (): JSX.Element => {
     return (
          <div>
               <div>
                    Power Zones Graph:
               </div>
               <LineGraph />
          </div>
     )
}