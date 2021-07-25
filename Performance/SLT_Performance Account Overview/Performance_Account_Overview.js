

google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(Total_likes);

      google.charts.setOnLoadCallback(followers_count);

      google.charts.setOnLoadCallback(Total_reach);

      google.charts.setOnLoadCallback(Impressions);


      // Total likes
      function Total_likes() {

        var data = new google.visualization.DataTable();
  
        data.addColumn('number', 'Time line');
  
        data.addColumn('number', 'total likes');
        
  
        data.addRows([
          [0,0],
          [5,250],
          [10, 302],
          [15,300],
          [20,320],
          [25, 539],
          [30,636],
          [35,689],
          [40,789],
          [45,700],
          [50,580],
          [55,543],
          [60,380],
        ]);
  
        var options = {
          chart: {
            title: 'Total likes',
            subtitle: ''
          },
          colors: ['red'],
          width: 1000,
          height: 500,
          axes: {
            x: {
              0: {side: 'bottom'}
            }
            
          }
        };
  
        var chart = new google.charts.Line(document.getElementById('total-likes'));
  
        chart.draw(data, google.charts.Line.convertOptions(options));
      }

  // followers count
      function followers_count() {

        var data = new google.visualization.DataTable();
  
        data.addColumn('number', 'Time line');
  
        data.addColumn('number', 'Followers count');
        
  
        data.addRows([
          [0,0],
          [5,150],
          [10, 132],
          [15,190],
          [20,320],
          [25, 439],
          [30,236],
          [35,589],
          [40,989],
          [45,1200],
          [50,780],
          [55,643],
          [60,580],
        ]);
  
        var options = {
          chart: {
            title: 'Followers Count',
            subtitle: ''
          },
          width: 1000,
          height: 500,
          axes: {
            x: {
              0: {side: 'bottom'}
            }
            
          }
        };
  
        var chart = new google.charts.Line(document.getElementById('followers-count'));
  
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
  

// Total reach
    function Total_reach() {

      var data = new google.visualization.DataTable();

      data.addColumn('number', 'Time line');

      data.addColumn('number', 'total reach');
      

      data.addRows([
        [0,0],
        [5,150],
        [10, 132],
        [15,190],
        [20,320],
        [25, 439],
        [30,236],
        [35,589],
        [40,989],
        [45,1200],
        [50,780],
        [55,643],
        [60,580],
      ]);

      var options = {
        chart: {
          title: 'Total reach',
          subtitle: ''
        },
        colors: ['green'],
        width: 1000,
        height: 500,
        axes: {
          x: {
            0: {side: 'bottom'}
          }
          
        }
      };

      var chart = new google.charts.Line(document.getElementById('total-reach'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }

    // Impressions
    function Impressions() {

      var data = new google.visualization.DataTable();

      data.addColumn('number', 'Time line');

      data.addColumn('number', 'Impressions');
      

      data.addRows([
        [0,0],
        [5,150],
        [10, 132],
        [15,190],
        [20,320],
        [25, 439],
        [30,236],
        [35,589],
        [40,989],
        [45,1200],
        [50,780],
        [55,643],
        [60,580],
      ]);

      var options = {
        chart: {
          title: 'Impressions',
          subtitle: ''
        },
        colors: ['orange'],
        width: 1000,
        height: 500,
        axes: {
          x: {
            0: {side: 'bottom'}
          }
          
        }
      };

      var chart = new google.charts.Line(document.getElementById('impressions'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
