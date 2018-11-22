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
  if (arr.length > 0) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  } else {
    maxElement = 0;
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderTitle(ctx, CLOUD_X + CLOUD_WIDTH / 2 + GAP, CLOUD_Y + GAP, '#000000');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var opacity = Math.random() * (1 - 0.1) + 0.1;
      ctx.fillStyle = 'rgba(10, 135, 255, ' + opacity + ')';
    }
    ctx.fillRect(CLOUD_X + GAP + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + FONT_GAP * 2 + GAP * 2 + barHeigth, BAR_WIDTH, (-barHeigth * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP * 2 + BAR_WIDTH / 2 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + FONT_GAP * 2 + GAP * 3 + barHeigth);
  }
};
