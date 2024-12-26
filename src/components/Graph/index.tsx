import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, YAxis } from 'recharts'
interface GraphProps {
  width?: number
  height?: number
}
const data = [
  {
    name: '6月',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: '7月',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: '8月',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: '9月',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: '10月',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: '11月',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: '12月',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '1月',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '2月',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '3月',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '4月',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '5月',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

const Graph: React.FC<GraphProps> = ({ width, height }) => {
  return (
    <LineChart
      width={width - 30}
      height={height}
      data={data}
      margin={{ top: 15, bottom: 15, right: 15, left: -15 }}
    >
      <Line type="monotone" dataKey="pv" stroke="#FFCC21" strokeWidth={2} />
      <Line type="monotone" dataKey="uv" stroke="#8FE9D0" strokeWidth={2} />
      <XAxis
        tick={{ style: { fill: '#fff', fontSize: '12px' } }}
        axisLine={false}
        tickSize={0}
        dataKey="name"
        dy={10}
      />
      <YAxis tick={false} domain={['auto', 'auto']} />
      <CartesianGrid vertical={true} horizontal={false} stroke="#777" />
    </LineChart>
  )
}

export default Graph
