console.log('Build starting...');
const milliSecondsToRun = Math.random() * 2000;
const numberOfLogMessages = Math.floor(Math.random() * 10 + 1);
const interval = Math.floor(milliSecondsToRun / numberOfLogMessages);
postLogMessageOrExit();

function postLogMessageOrExit(timePassed=0, messageCounter=1) {
  if (timePassed < milliSecondsToRun) {
    console.log(`Log message #${messageCounter}`);
    setTimeout(() => {
      postLogMessageOrExit(timePassed + interval, messageCounter + 1);
    }, interval);
  } else {
    console.log('Build finished.');
    process.exit(0);
  }
}
