function chart1(){
 



  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    
  ];

  const data = {
    labels: labels,
    datasets: [{
        barPercentage: 1,
        barThickness: 
        29,
        maxBarThickness: 30,
        minBarLength: 2,
      
      data: [50, 75, 50, 75, 50],
      backgroundColor: [
        'rgba(50, 90, 228, 0.6)',
        'rgba(50, 90, 228, 0.6)',
        'rgba(50, 90, 228, 0.6)',
        'rgba(50, 90, 228, 0.6)',
        'rgba(50, 90, 228, 0.6)',
        
      ],
      
      
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    plugins:[ChartDataLabels],
    options: {
      layout: {
        padding: {
           
            top: 50,
            
        }
    },
      responsive:false,
      plugins:{legend: {
        
        display: false,
       
        
    },
      datalabels:{
        color:'black',
        anchor:'end',
        align:'end',
        borderColor:'rgba(50, 90, 228, 0.6)',
      
          



        
        borderWidth:1.5,
        borderRadius:10

      }
     
    },
    
      scales: {
        x: {
          ticks:{
            font:{
              size:8,
            }
          },
          grid: {
            display: false
         }},
        y: {
          beginAtZero: true,
          grid: {
            display: false
         }
        }
      }
    },
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}

function chart2(){
 
const data = {
  labels: [
    'Communication',
    'Fibercut',
    'Environment',
    'Equipment',
    'Pop issue',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [5,25,20,10,10],
    backgroundColor: [
      'orangered',
      'purple',           
          'indigo',          
          '#6CCAB8',
          '#ffc922',
    ],
    hoverOffset: 4
  }]
};
const config = {
  type: 'doughnut',
  data: data,
  options: {
    aspectRatio: 1,
    maintainAspectRatio:false,
   
            elements: {
            arc: {
                borderWidth: 0
            }
        },
          
          
        
      plugins:{    legend: {
      position: "right",
      align: "middle",
      labels:{
        boxWidth:12
    
      }
    }}}
};
const myChart = new Chart(
  document.getElementById('myChart1'),
  config
);
}

function chart3(){
  const labels =  ['< 3h', '3h - 1day', '3h - 1day', '1day - 7days', '> 7days'];
 
   const data = {
     labels: labels,
     datasets: [{
         barPercentage: 1,
         barThickness: 46,
         maxBarThickness: 46,
         minBarLength: 2,
       
       data: [60, 70, 90, 80, 95],
       backgroundColor: [
         'rgba(88, 208, 255, 1)',
         'rgba(191, 91, 255, 1)',
         'rgba(255, 97, 97, 1)',
         'rgba(255, 201, 53, 1)',
         'rgba(132, 121, 255, 1)',
         
       ]
     }]
   };
 
   const config = {
     type: 'bar',
     data: data,
     plugins:[ChartDataLabels],
     options: {
      layout: {
        padding: {
           
            top: 50,
            
        }
    },
      responsive:true,
       plugins:{legend:{
         display: false
 
       },
       datalabels:{
        color:'black',
        anchor:'end',
        align:'end',
        borderColor:'black',
        borderWidth:1.5,
        borderRadius:10

      }},
       scales: {
         x: {
           ticks:{
             font:{
               size:12,
             }
           }
           ,
           grid: {
             display: false
          }},
         y: {
           beginAtZero: true,
           grid: {
             display: false
          }
         }
       }
     },
   };
   
   const myChart = new Chart(
     document.getElementsByClassName("myChart3"),
     config
   );
 }
function chart4(){
 const labels =  ['<10%', '10%-20%','20%-30%', '40%-50%', '60%-70%', '80%-90%','80%-90%','> 90%'];

  const data = {
    labels: labels,
    datasets: [{
        barPercentage: 1,
        barThickness: 29,
        maxBarThickness: 29,
        minBarLength: 2,
      
      data: [60,70, 70, 90, 80, 95,95, 10],
      backgroundColor: [
        'rgba(88, 208, 255, 1)',
        'rgba(191, 91, 255, 1)',
        'rgba(255, 97, 97, 1)',
        'rgba(255, 201, 53, 1)',
        'rgba(132, 121, 255, 1)',
        'rgba(16, 193, 114, 1)',
        'rgba(205, 123, 204, 1)',
        'rgba(0, 212, 253, 1)'
        
      ],
      
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    plugins:[ChartDataLabels],
    options: {
      layout: {
        padding: {
           
            top: 50,
            
        }
    },
      plugins:{legend:{
        display: false

      },
      datalabels:{
        color:'black',
        anchor:'end',
        align:'end',
        borderColor:'black',
        borderWidth:1.5,
        borderRadius:10

      },
    },
      scales: {
        x: {
          ticks:{
            font:{
              size:10,
            }
          },
          grid: {
            display: false
         }},
        y: {
          beginAtZero: true,
          grid: {
            display: false
         }
        }
      }
    },
  };
  
  const myChart = new Chart(
    document.getElementsByClassName("myChart4"),
    config
  );
}

function chart5(){
  const labels =  ['Critical', 'Major', 'Minor', 'Warning'];
 
  const data = {
    labels: labels,
    datasets: [{
        
        data: [325,9,8,8],
        backgroundColor: [
          'aqua',
          'green',
          '#ffc922',
          'orangered'
            
        ],
       
        
        borderRadius: Number.MAX_VALUE,
        borderSkipped:false,
        barPercentage:0.4,
        categoryPercentage:1

    }]
};
 
   const config = {
    
     type: 'bar',
     data: data,
     
     options: {
      responsive: false,
      indexAxis: 'y',
       plugins:{legend:{
         display: false
 
       },
       datalabels:{
        anchor: 'end',
        align:'end',
        offset: 10

      },},
      scales: {
        x: {
  
          display:false,
      grid:{
        drawBorder:false,
        display:false
      }
    },
        
          y: {
           
            grid:{
              
        drawBorder:false,
        
      },

           grace:'5%',
              beginAtZero: true
          }
      },
     },
     plugins: [ChartDataLabels],
    
   };
   
   const myChart = new Chart(
     document.getElementById("myChart5"),
     config
   );
 }




 function chart6(){
  ctx = document.getElementById('myChart6');
                  
                  
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(0,0,255,0.2)');
  gradient.addColorStop(1, 'rgba(0,0,255,0)');
  const gradient1 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
  gradient1.addColorStop(0, 'rgba(112, 41, 99,0.2)');
  gradient1.addColorStop(1, 'rgba(112, 41, 99,0)');
                    myChart = new Chart(ctx, {
                       
                        data: {
                         
                            datasets: [{
                               type:'line',
                               label:'Incident',
                                data:[280,320,300,410,590,550,420,380,420,480,600,500,320,300,420,590,550,520] ,
                               backgroundColor:gradient,
                             borderColor:'blue',
                             pointBackgroundColor:'white',
                             pointBorderColor:'blue',
                             pointBorderWidth:4,
                             fill:[+1]
                               
                            
          
                            },
                            {
              type: 'line',
              label: 'Problem',
              data: [100,90,190,210,360,390,300,230,290,299,250,299,210,200,295,293,300,390],
              backgroundColor:gradient1,
              borderColor:'purple',
              pointBackgroundColor:'white',
                             pointBorderColor:'purple',
                             pointBorderWidth:4,
                             fill:true
          }],
          labels: ['', '0', 'Jan 8', 'Jan 15','Jan 22','Feb 1','Feb 8','Feb 15','Feb 22','Mar 1','Mar 8','Mar 15','Mar 22','Apr 1','Apr 8','Apr 15','24']
                        },
                        options: {
                          
                          maintainAspectRatio:false,
                          plugins:{legend:{
                            display: true,
                            position:'top',
                            align:'end',
                            labels:{
                              usePointStyle:true,
                              boxWidth:2,
                              boxHeight:2,
                              font:{
                                size:15
                              }
                            },
                          
                            
  
            
                          },
                        },
                            scales: {
                              x: {
                                ticks:{
  
                                  font:{
                                    size:10,
                                  }
                                },
                          
                       
                      },
                                y: {
                                  suggestedMin: 0,
                          suggestedMax: 500,
                                    beginAtZero: true
                                }
                            }
                        }
                    });
 }

 function chart7(){
  const labels = [
    ' ',
    '500',
    '1000',
    '1500',
    '2000',
    '2500',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
       data:[
        {x:0,y:0,r:0},
        {x:1,y:0,r:0},
        {x:2,y:0,r:0},
        {x:3,y:0,r:0},
        {x:4,y:0,r:0},
        {x:5,y:0,r:0},
        {x:6,y:0,r:0},
        {x:7,y:0,r:0},
        {x:8,y:0,r:0},
        {x:9,y:0,r:0},
        {x:10,y:0,r:0},
        {x:11,y:0,r:0},
        {x:12,y:0,r:0},]
      
    },{
      label: 'Sales', backgroundColor: 'rgba(147, 82, 229, 0.7)', data: [{ x: '7.5', y: '5000', r: '40' }, { x: '1.2', y: '5000', r: '20' }, { x: '10.2', y: '7000', r: '10' }, { x: '9.2', y: '5000', r: '10' }]
    },
    {
      label: 'Users', backgroundColor: 'rgba(249, 224, 1, 0.7)', data: [{ x: '2.5', y: '8000', r: '70' }, { x: '6.2', y: '4000', r: '40' }]
    },
    {
      label: 'Teams', backgroundColor: 'rgba(55, 148, 252, 0.7)', data: [{ x: '8.5', y: '2000', r: '40' }, { x: '1.2', y: '1000', r: '40' }]
    },
    {
      label: 'Product', backgroundColor: 'rgba(255, 80, 93, 0.7)', data: [{ x: '4.5', y: '5000', r: '30' }, { x: '6.2', y: '5000', r: '50' }]
    }
  ]
  };

  const config = {
    type: 'bubble',
    data: data,
    options: {
      
    maintainAspectRatio:false,
      plugins:{legend:{
        display: false

      }},
      scales: {
        x: {
          ticks:{
            stepSize: 1,
            callback: function(value, index, values) {
            if(index>0)  return  labels[index];
            },
            font:{
              size:12,
            }
          }
          ,
          },
        y: {
          beginAtZero: true,
          grid: {
            display: false
         }
        }
      }
    },
  };
  const myChart = new Chart(
    document.getElementById('myChart7'),
    config
  );
    
   }
 



chart2();
chart1(); 
chart3();
chart4();
chart5();
chart6();
chart7();