import { useEffect, useRef } from "react";

// listenCapturing : listen in capturing or bubble phase
function useDetectOutsideClick(
  handler,
  listenCapturing = true,
  event = "click"
) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // contains : true if ref.current(StyledModal) it contains the e.target(yr click)
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("clicked outside");
          handler();
        }
      }

      document.addEventListener(event, handleClick, listenCapturing);

      return () =>
        document.removeEventListener(
          event,
          (e) => handleClick(e),
          listenCapturing
        );
    },
    [handler, event, listenCapturing]
  );

  return { ref };
}

export default useDetectOutsideClick;
