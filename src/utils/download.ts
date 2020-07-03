export function downSvg(svgSelector: string, name?: string, width?: number, height?: number, imgType: string = 'jpg') {
  let svgEl = document.querySelector(svgSelector);
  if (!svgEl) {
    throw new Error('无所选元素!');
  }
  [
    ['version', 1.1],
    ['xmlns', "http://www.w3.org/2000/svg"],
  ].forEach(function (item) {
    svgEl && svgEl.setAttribute(item[0] as string, item[1] as string);
  });
  var str = svgEl.outerHTML;

  //3.创建img
  var img = document.createElement('img');
  img.setAttribute('src', 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(str))));
  img.onload = function () {
    // 1.创建canvas
    var canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;
    // 2.根据base64格式的svg生成canvas
    if (!context) {
      throw new Error('无Canvas元素!');
    }
    context.drawImage(img, 0, 0);
    // 3.将canvas转字符串（按指定好的图片格式）
    var canvasData = canvas.toDataURL("image/" + imgType);
    // 4.创建图片元素
    var img2 = document.createElement('img');
    // 5.生成图片
    img2.setAttribute('src', canvasData);
    // document.querySelector('#baseSvg').setAttribute('src', canvasData);

    // 6.下载该图片
    img2.onload = function () {
      var a = document.createElement("a");
      // 下载
      const fileName = `${name || 'svg'}.${imgType}`;
      a.download = fileName
      a.href = img2.getAttribute('src') as string;
      a.click();
    };
  };
}
export function downSvg2(svgSelector: string, name?: string, width?: number, height?: number,) {
  let svgEl = document.querySelector(svgSelector);
  if (!svgEl) {
    throw new Error('无所选元素!');
  }
  // [
  //   ['version', 1.1],
  //   ['xmlns', "http://www.w3.org/2000/svg"],
  // ].forEach(function (item) {
  //   svgEl&&svgEl.setAttribute(item[0] as string, item[1] as string);
  // });
  let image = document.createElement('img');

  image.setAttribute('src', `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgEl.outerHTML)))}`)
  let canvas = document.createElement('canvas');  //准备空画布
  canvas.width = width || svgEl.clientWidth;
  canvas.height = height || svgEl.clientHeight;

  let context = canvas.getContext('2d');  //取得画布的2d绘图上下文
  if (!context) {
    throw new Error('无Canvas元素!');
  }
  context.drawImage(image, 0, 0);

  let a = document.createElement('a');
  a.href = canvas.toDataURL('image/jpg');  //将画布内的信息导出为png图片数据
  a.download = name || 'svg';  //设定下载名称
  a.click(); //点击触发下载
  return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgEl.outerHTML)))}`
}