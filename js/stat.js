'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barHeigth = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderTitle = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'center';
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + FONT_GAP);
};


var getMaxElement = function (arr) {

  return arr.reduce(function (maxElement, currElement) {
    return currElement > maxElement ? currElement : maxElement;
  });

};

var renderChart = function (ctx, times, players) {
  var maxTime = getMaxElement(times);
  var barX = CLOUD_X + GAP * 2;
  var barY = CLOUD_Y + FONT_GAP * 2 + GAP * 2 + barHeigth;

  players.forEach(function (playersCurr, i) {
    var opacity = Math.random() * (1 - 0.1) + 0.1;
    ctx.fillStyle = playersCurr === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(10, 135, 255, ' + opacity + ')';

    ctx.fillRect(barX + (BAR_WIDTH + BAR_GAP) * i, barY, BAR_WIDTH, (-barHeigth * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(playersCurr, barX + (BAR_WIDTH + BAR_GAP) * i + BAR_WIDTH / 2, barY);
  });

};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderTitle(ctx, CLOUD_X + CLOUD_WIDTH / 2 + GAP, CLOUD_Y + GAP, '#000000');
  renderChart(ctx, times, players);
};
