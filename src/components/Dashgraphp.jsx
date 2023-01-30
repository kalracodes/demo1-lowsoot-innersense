import { ResponsiveContainer, PieChart, Pie } from 'recharts';

export function Dashgraphp() {
  const datax = [
    { name: 'Maternity Bra', value: 23, fill: '#2085ec' },
    { name: 'Regular Bra', value: 25, fill: '#72b4eb' },
    { name: 'Panty', value: 17, fill: '#8464a0' },
    { name: 'Nighty', value: 17, fill: '#0a417a' },
    { name: 'Loungee dress kind', value: 18, fill: '#cea9bc' },
    { name: 'Loungee Long tee kind', value: 18, fill: '#ac2195' },
    { name: 'Long Bottom', value: 18, fill: '#323232' },
  ];

  return (
    <>
      <div className='arrange'>
        <div className='dashgraphbarcont' style={{ marginTop: '2rem' }}>
          <h2 className='dashgraph__header'>Product related Emissions</h2>
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
                    const radius =
                      25 + innerRadius + (outerRadius - innerRadius);
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
      </div>
    </>
  );
}
