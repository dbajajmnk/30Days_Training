
const output = document.getElementById("output");

function log(msg){
  output.textContent += msg + "\n";
}

function zeroShot(){
  output.textContent="";
  log("Zero-shot prompt sent to AI model...");
  setTimeout(()=>{
     log("AI response generated without examples.");
  },800);
}

function fewShot(){
  output.textContent="";
  log("Few-shot prompt with examples...");
  setTimeout(()=>{
     log("AI response improved due to contextual examples.");
  },800);
}

function simulateAPI(){
  output.textContent="";
  log("Frontend -> Backend -> AI API request...");
  setTimeout(()=>{
     log("Processing by model...");
  },500);
  setTimeout(()=>{
     log("AI Response received -> rendering UI.");
  },1200);
}
