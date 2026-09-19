// ==========1.自习室模拟数据==========
const roomData = [
  {name:"101自习室",floor:1,open:true},
  {name:"102自习室",floor:1,open:false},
  {name:"201自习室",floor:2,open:true},
  {name:"202自习室",floor:2,open:true},
  {name:"301自习室",floor:3,open:false}
];

// 渲染自习室列表
function renderRoom(list){
  const dom = document.getElementById("roomList");
  dom.innerHTML = "";
  list.forEach(item=>{
    dom.innerHTML += `<div class="card my-2">
      <div class="card-body">
        <h5>${item.name}</h5>
        <p>楼层：${item.floor}｜状态：${item.open?"开放":"关闭"}</p >
      </div>
    </div>`
  })
}
renderRoom(roomData);

// ==========2.筛选功能（楼层、开放状态）==========
// 这里可以加两个按钮，点击筛选，过滤数组，再调用renderRoom

// ==========3.ECharts图表==========
// 引入ECharts CDN，加到index.html的head里面
// <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>

async function loadChart(){
  const res = await fetch("data/data.json");
  const chartData = await res.json();
  const myChart = echarts.init(document.getElementById("chartBox"));
  const option = {
    title:{text:"自习室使用量统计",subtext:"数据来源：模拟统计"},
    xAxis:{type:"category",data:chartData.map(d=>d.name)},
    yAxis:{type:"value",name:"使用人数"},
    series:[{type:"bar",data:chartData.map(d=>d.value)}]
  }
  myChart.setOption(option);
}
loadChart();