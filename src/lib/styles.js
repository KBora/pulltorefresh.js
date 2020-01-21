export default `
.__PREFIX__ptr {
  box-shadow: inset 0 -1px 5px -1px rgba(0, 0, 0, 0.12);
  pointer-events: none;
  font-size: 0.85em;
  font-weight: bold;
  top: 0;
  height: 0;
  transition: height 0.3s, min-height 0.3s;
  text-align: center;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  align-content: stretch;
  background: #f2f2f2;
}

.__PREFIX__ptr.__PREFIX__refresh {
  align-items: center;
}

.__PREFIX__box {
  padding: 10px;
  flex-basis: 100%;
}

.__PREFIX__pull {
  transition: none;
}

.__PREFIX__text {
  margin-top: .33em;
  color: rgba(0, 0, 0, 0.3);
}

.__PREFIX__icon {
  color: rgba(0, 0, 0, 0.3);
  animation-name: rotate, fadeIn;
  animation-duration: 3s, 3s;
  animation-iteration-count: infinite, 1;
  animation-timing-function: linear, linear;
  animation-play-state: running, running;
  
}

.__PREFIX__icon i {
  background: white;
  padding: 6px;
  border-radius: 100%;
}

/*
When at the top of the page, disable vertical overscroll so passive touch
listeners can take over.
*/
.__PREFIX__top {
  touch-action: pan-x pan-down pinch-zoom;
}

.__PREFIX__release .__PREFIX__icon {
  animation-play-state: running, paused;
}


.__PREFIX__refresh .__PREFIX__icon {
  animation: 0.6s linear infinite rotate;
}


@keyframes fadeIn {
  0% {
    opacity: 0;
  }  
  
  100% {
    opacity: 100;
  }
}

@keyframes rotate {
  0% {
  transform: rotate(0deg);
  }
  
  100% {
  transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(245,122,0, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(245,122,0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(245,122,0, 0.4);
  }
}

@keyframes releaseMe2 {
  0% {
    transform: rotate(-10deg);
  }
  
  50% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(-10deg);
  }
}

 @keyframes releaseMe {
  0% {
    transform: translateY(0);
  }
  
  50% {
    transform:  translateY(10);
  }

  100% {
    transform:  translateY(0);
  }
}
`;
