var motdArr = [
	'﻿you are the flower, I\'m the rain',
	'present day, present time',
	'どんな時でも、あなたは一人じゃないよ',
	'『私がいなくても何も変わらない』と膝を抱えて、ため息ついた',
	'泣いてもいいよ、また笑えればいい',
	'負け犬になるつもりはない',
	'できないことばかりで、早く自由になりたくて',
	'時を越えてく思いがある、僕は今すぐ君に会いたい',
	'あなたのことを守れるような僕になるから、だから少し待ってて',
	'誰もが望みながら、永遠を信じない',
	'空の音響け、高く悲しみを超えて',
	'愛だけ、夢だけ、君だけ、それだけは離さない、どんな時でも',
	'大好きって言うなら、大大好きって返すよ',
	'誰よりも熱く、誰よりも強く、抱き締めるよ',
	'切り刻みます、恨みの刃で',
	'呪われた拳で、私を殺すの？',
	'へいき、へっちゃらッ！',
	'やめて、嘘はあなたらしくないよ',
	'ここにいるよ、ここにいるよ、帰る場所はここだよ',
	'あなたを忘れない、でも昨日には帰れない',
	'歩こう、戻れぬ道、歌おう、仲間と今',
	'一億と二千年後も愛してる',
	'どうぞ私を遠くから見守ってください',
	'いいことばかりある訳じゃないし、嵐もやってくるけど',
	'追いつけない君はいつでもこの場所から何を見てた？',
	'奇跡は起きます、起こして見せます！',
	'いつでも今日が、いちばん楽しい日',
	'悩んで、迷って、不安だった日々も、いつかきっと宝物に変わる',
	'僕は悪くない',
	'ヒーロー見参、ヒーロー見参、ヒーロー見参',
	'黄昏よりも昏きもの、血の流れより紅きもの',
	'こんな時代こそ笑いましょう',
	'このやるせないモヤモヤを誰かに告げようか',
	'きっと今は自由に空も飛べるはず',
	'涙も捨てて、情けも捨てて、あなたが早く私に愛想を尽かすまで',
	'生れ落ちて最初に聞いた声は落胆の溜息だった',
	'笑いながら荒野にいる',
	'軽く軽く傷ついてゆけ',
	'世界は愛で溢れているよ',
	'あなたを想った日々があればそれでいい',
	'誰もが気付かぬうちに何かを失っている',
	'別れだけが運命なの？',
	'時よ、止まれよ、ただ一度、奇跡起こした若者に',
	'明日は明日の風が吹く',
	'逢佛殺佛',
	'獨愴然而涕下',
	'轰轰烈烈把握青春年华',
	'高速を都心へと走っていたはず',
	'いつか、いつの日か見つかるはず',
	'心の荷物たちを捨てにゆこうね',
	'意味のない毎日を積み重ねるだけで、悔しいけど幸せ',
];
document.addEventListener('DOMContentLoaded', function() {
	var index = Math.floor((Math.random() * motdArr.length));
	document.querySelector('#motd').innerHTML = '<span class="noselect">&#12300; </span>' + motdArr[index] + '<span class="noselect"> &#12301;</span>';
});