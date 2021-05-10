
let secs = 0;
let min = 0;
let sec = 0;

 const words = [
    "数値を2進数で表すレジスタがある。このレジスタに格納されている正の整数xを10倍する操作はどれか。ここで，桁あふれは，起こらないものとする。",
    "リストは，配列で実現する場合とポインタで実現する場合とがある。リストを配列で実現した場合の特徴として，適切なものはどれか。",
    "プログラム言語における関数呼出し時の引数の性質のうち，適切なものはどれか。",
    "Java VMが稼働している環境だけがあれば，WebブラウザやWebサーバがなくても動作するプログラムはどれか。",
    "PCのCPUのクロック周波数に関する記述のうち，適切なものはどれか。",
  ];

function time() {
        secs++;
        if (secs < 60) {
          exam_use_time.textContent = secs + "秒";
        }
        else
	{
          min = secs / 60;
          sec = secs % 60;
          if (sec < 10)
	  {
            sec = "0" + sec;
          }
          exam_use_time.texttextContent =min + "分" + sec + "秒";
        }
      }

function startfnc(){
 setInterval("time()", 1000);
word = words[Math.floor(Math.random() * words.length)];
target.textContent = word;
}