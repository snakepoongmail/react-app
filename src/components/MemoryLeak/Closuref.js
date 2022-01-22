var theThing = null;
var intervalId = null;
var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
    if (originalThing)
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log('some message');
    }
  };
};
export const start = () => {
  intervalId = setInterval(replaceThing, 1000);
  console.log(`intervalId is ${intervalId}`);

};
export const stop = () => clearInterval(intervalId);