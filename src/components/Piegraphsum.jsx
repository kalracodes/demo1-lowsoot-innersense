import { ResponsiveContainer, PieChart, Pie } from 'recharts';

export function Piegraphsumblock() {
  const datax = [
    { name: 'Maternity Bra', value: 23, fill: '#0088fe' },
    { name: 'Regular Bra', value: 25, fill: '#00c49f' },
    { name: 'Pantry', value: 17, fill: '#00049f' },
    // { name: "Fuel", value: 22, fill: "#ff0000" },
    { name: 'Nighty', value: 17, fill: '#ff8042' },
    { name: 'Loungee dress kind', value: 18, fill: '#8884d8' },
    { name: 'Loungee Long tee kind', value: 18, fill: '#ac2195' },
    { name: 'Long Bottom', value: 18, fill: '#8824d8' },
  ];

  return (
    <>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>Amount of Carbon Saved</h2>
        <div className='dashgraphbar__cont'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart height={250}>
              <Pie
                data={datax}
                cx='50%'
                cy='50%'
                isAnimationActive='1'
                outerRadius={100}
                fill='#8884d8'
                dataKey='value'
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  console.log('handling label?');
                  const RADIAN = Math.PI / 180;
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline='central'
                    >
                      {datax[index].name} ({value})
                    </text>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
