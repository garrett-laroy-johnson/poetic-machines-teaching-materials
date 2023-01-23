function setup() {
  createCanvas(900, 900);
}
let choose=1;
function draw() {
  background(153, 136, 85);

  if(choose==1)
  {
    luo1();
  }
  if(choose==2)
  {
    luo2();
  }

  strokeWeight(1);
  stroke(255,0,0);
  print("("+mouseX+","+mouseY+")"); 
}

function mouseClicked() {
  if(choose==1)
        choose=2;
      else 
        choose=1;
}

function luo1()
{
  //整體輪廓
  stroke(60,60,48);
  strokeWeight(8);
  fill(0);
  beginShape();
  vertex(466,135);
  bezierVertex(331,-54,-10,77,54,337);
  bezierVertex(68,395,110,439,158,454);
  bezierVertex(91,461,35,473,41,521);
  bezierVertex(62,560,176,542,289,526);
  bezierVertex(392,589,394,665,482,724);
  bezierVertex(491,832,645,812,657,697);
  bezierVertex(703,663,717,620,796,641);
  bezierVertex(841,646,863,615,900,589);
  bezierVertex(900,516,899,467,900,405);
  bezierVertex(872,407,851,419,826,445);
  bezierVertex(797,419,780,401,745,408);
  bezierVertex(701,351,608,309,503,314);
  bezierVertex(515,261,505,185,468,139);
  endShape();

  //嘴巴
  line(312,375,323,367);
  
  //左眼
  fill(255,255,255);
  beginShape();
  vertex(88,154);
  bezierVertex(22,234,32,386,129,396);
  bezierVertex(230,395,249,311,223,236);
  bezierVertex(180,141,123,130,84,158);
  endShape();

  fill(0);
  beginShape();
  vertex(103,196);
  bezierVertex(36,224,76,385,153,346);
  bezierVertex(223,323,161,169,103,196);
  endShape();

  //左耳
  beginShape();
  vertex(54,344);
  bezierVertex(39,363,32,433,53,459);
  bezierVertex(56,417,70,412,80,398);
  bezierVertex(67,384,64,372,55,347);
  endShape();
  fill(113,170,119);
  beginShape();
  vertex(80,399);
  bezierVertex(37,446,48,474,81,467);
  bezierVertex(105,459,122,457,152,454);
  bezierVertex(117,438,102,422,85,402);
  endShape();
  
  //右眼
  fill(255,255,255);
  beginShape();
  vertex(239,65);
  bezierVertex(160,130,245,316,393,266);
  bezierVertex(515,217,405,78,351,61);
  bezierVertex(329,47,270,41,239,65);
  endShape();
  
  fill(0);
  beginShape();
  vertex(256,110);
  bezierVertex(222,162,302,286,376,229);
  bezierVertex(419,197,374,119,335,101);
  bezierVertex(302,85,282,86,258,108);
  endShape();
  
  //右耳
  beginShape();
  vertex(386,67);
  bezierVertex(468,78,562,143,569,184);
  bezierVertex(541,172,523,169,489,174);
  bezierVertex(465,129,443,103,394,71);
  endShape();
  fill(113,170,119);
  beginShape();
  vertex(508,274);
  bezierVertex(539,258,576,208,569,184);
  bezierVertex(541,172,523,169,489,174);
  bezierVertex(501,201,507,234,509,273);
  endShape();

  fill(0);
  
  //胳膊
  beginShape();
  vertex(161,454);
  bezierVertex(197,452,246,440,273,433);
  endShape();
  beginShape();
  vertex(427,336);
  bezierVertex(451,320,480,316,504,313);
  endShape();

  //右手
  beginShape();
  vertex(509,273);
  bezierVertex(527,261,537,253,548,241);
  bezierVertex(571,230,583,271,578,316);
  bezierVertex(553,313,533,311,505,313);
  bezierVertex(508,298,509,285,511,272);
  endShape();
 
  //腳
  beginShape();
  vertex(481,723);
  bezierVertex(476,543,685,555,658,684);
  endShape();

  beginShape();
  vertex(809,471);
  bezierVertex(820,453,815,462,827,443);
  endShape();

  //尾巴
  beginShape();
  vertex(676,681);
  bezierVertex(741,750,787,843,813,898);
  bezierVertex(841,899,868,899,898,900);
  bezierVertex(900,884,898,865,900,839);
  bezierVertex(859,745,802,682,760,635);
  bezierVertex(736,635,705,647,678,680);
  endShape();
}

function luo2()
{
  //整體輪廓
  stroke(60,60,48);
  strokeWeight(8);
  fill(0);
  beginShape();
  vertex(177,128);
  bezierVertex(54,195,12,384,134,472);
  bezierVertex(122,479,61,475,67,529);
  bezierVertex(97,592,283,507,316,544);
  bezierVertex(371,574,411,655,435,672);
  bezierVertex(445,694,468,741,498,745);
  bezierVertex(499,827,622,839,658,713);
  bezierVertex(682,665,706,640,780,643);
  bezierVertex(822,660,856,632,899,611);
  bezierVertex(899,550,899,498,900,445);
  bezierVertex(877,450,855,464,830,485);
  bezierVertex(809,448,778,427,750,432);
  bezierVertex(695,364,594,324,509,334);
  bezierVertex(517,120,344,50,180,126);
  endShape();

  beginShape();
  vertex(442,353);
  bezierVertex(463,341,486,337,507,334);
  endShape();
  
  beginShape();
  vertex(813,499);
  bezierVertex(819,493,825,487,834,482);
  endShape();

  //右手
  beginShape();
  vertex(509,285);
  bezierVertex(523,231,595,228,582,337);
  bezierVertex(565,334,539,330,508,333);
  bezierVertex(513,310,508,294,509,283);
  endShape();
  
  //耳朵 左
  beginShape();
  vertex(59,347);
  bezierVertex(29,377,-5,419,0,489);
  bezierVertex(18,448,53,437,94,434);
  bezierVertex(79,422,65,379,61,345);
  endShape();

  fill(113,170,119);

  beginShape();
  vertex(0,487);
  bezierVertex(12,444,55,437,92,434);
  bezierVertex(106,446,113,458,131,471);
  bezierVertex(114,477,75,486,68,508);
  bezierVertex(45,506,18,508,0,493);
  endShape();
  
  //眼睛
  fill(255);
  beginShape();
  vertex(66,300);
  bezierVertex(141,209,204,190,214,206);
  bezierVertex(231,221,86,362,63,338);
  bezierVertex(60,326,62,316,65,304);
  endShape();
  
  beginShape();
  vertex(377,108);
  bezierVertex(345,112,250,145,255,181);
  bezierVertex(264,212,340,140,416,126);
  bezierVertex(393,112,403,119,378,108);
  endShape();


  //嘴巴
  strokeWeight(4);
  fill(65,148,164);
  beginShape();
  vertex(282,293);
  bezierVertex(280,278,321,256,333,265);
  bezierVertex(335,275,295,300,282,296);
  endShape();

  strokeWeight(8);
  
  //腳
  fill(0);
  beginShape();
  vertex(497,750);
  bezierVertex(492,637,616,598,643,657);
  endShape();

  beginShape();
  vertex(125,474);
  bezierVertex(167,465,227,456,300,450);
  endShape();
  beginShape();
  vertex(675,691);
  bezierVertex(741,762,762,823,796,900);
  bezierVertex(832,900,863,900,897,899);
  bezierVertex(891,808,833,713,748,644);
  bezierVertex(709,651,691,658,675,689);
  endShape();
}

