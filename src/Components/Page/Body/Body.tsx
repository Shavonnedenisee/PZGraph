import { LineGraph } from "../../Graph/LineGraph"

export const Body = (): JSX.Element => {
     return (
          <div>
               <div>
                    Power Zones:
               </div>
               <LineGraph />
          </div>
     )
}