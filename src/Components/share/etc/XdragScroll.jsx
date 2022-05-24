import React from "react";
import styled from "styled-components";


// 가로 스크롤 드래그

const XdragScroll = (props) => {
  const { children } = props;

  const scrollRef = React.useRef(null);
  const [isDrag, setIsDrag] = React.useState(false);
  const [startX, setStartX] = React.useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 50;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <React.Fragment>
      <Wrapper
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onThrottleDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}>
        {children}
      </Wrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 8px 0;

  display: flex;

  width: 100%;
  height: fit-content;

  overflow-x: scroll;
  
  cursor: grab;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

&::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
`

export default XdragScroll;