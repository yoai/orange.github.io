//封装getelementById
function g (id) {
  return document.getElementById(id) ;
}

/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  /*
  coding here
  */
  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */
  var data = [];
  var items = document.querySelectorAll('#source li');
  for (var i = 0; i < items.length; ++i) {
    data.push(items[i].innerHTML.replace(/(.*)空气质量：<b>(.*)<\/b>/g, '$1 $2').split(' '));
  }
  return data;
}
/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
  data.sort(function(a,b){
    return b[1] - a[1];
  });
  return data;
}
/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
  var resort = g('resort');
  data.forEach(function(item, idx) {
    resort.innerHTML += '<li>第' + (idx + 1) + '名：' + item[0] + '空气质量：' + '<b>' + item[1] + '</b></li>';
  });
}
function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}
function init() {
  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  g('sort-btn').addEventListener('click', btnHandle);
}
init();
