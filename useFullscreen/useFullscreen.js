const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };
    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        }
        runCb(true);
      }
    };
    const exitFull = () => {
      document.exitFullscreen();
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCb(false);
    };
    return { element, triggerFull, exitFull };
  };
  
const App = () => {
    const onFullS = (isFull) => {
      console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <div ref={element}>
          <img src="https://w.namu.la/s/b8c574c4fbdaf2b32e72dcd7616dbf41bba7a681db8b108a1d0c9eb8d2d69b8f5b11f0cba6cc0ef7b5ddf91a00b37fb450e7a250e7ada832b1f26ad3b623eccb501afe37ed7824afc2797da12ba846871701a20bfcdda176dc7c4d7bd007bf10ac3e177a017312c7292cb6a0fd17e9b9" />
          <button onClick={exitFull}>Exit fullscreen</button>
        </div>
        <button onClick={triggerFull}>Make fullscreen</button>
      </div>
    );
};