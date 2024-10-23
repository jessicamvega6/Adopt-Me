import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


let Modal = ({ children }) => {
    let elmentRef = useRef(null)
    if(!elmentRef.current) {
        elmentRef.current = document.createElement('div');
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elmentRef.current);
        return () =>
             modalRoot.removeChild(elmentRef.current);// equal to componentWillUnMount
      }, []);
    
      return createPortal(<div>{children}</div>, elmentRef.current);

}

export default Modal;