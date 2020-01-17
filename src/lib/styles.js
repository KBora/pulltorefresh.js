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
  transition: transform .3s;
  animation: 5s linear .35s infinite rotate;
}

/*
When at the top of the page, disable vertical overscroll so passive touch
listeners can take over.
*/
.__PREFIX__top {
  touch-action: pan-x pan-down pinch-zoom;
}

.__PREFIX__release .__PREFIX__icon {
  transform: rotate(180deg);
}

.__PREFIX__refresh .__PREFIX__icon {
  animation: 1s linear infinite rotate;
}


@keyframes rotate {
  0% {
  transform: rotate(0deg);
  }
  
  100% {
  transform: rotate(360deg);
  }
}

  
`;
