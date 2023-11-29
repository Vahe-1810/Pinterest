import React, { useEffect, useState } from "react";
import SecondContent from "./SecondContent";
import { useTransition } from "@react-spring/web";
import { IMAGES_COLLECTION1, IMAGES_COLLECTION2 } from "../../constants";
import ThirdContent from "./ThirdContent";
import FourthContent from "./FourthContent";
import Authentication from "./Authentication";
import FirstContent from "./FirstContent";
import { DoublyLinkedList } from "../../utils/scrollList";
import "./main.css";

const Main = () => {
  const [step, setStep] = useState(0);
  const [imageState, setImageState] = useState(IMAGES_COLLECTION1);
  const [linkedList, setLinkedList] = useState(null);
  const [node, setNode] = useState(linkedList?.head);

  const transition = useTransition(imageState, {
    from: {
      y: 50,
      opacity: 0,
    },
    enter: (item) => async (next) => {
      return await next({
        y: 0,
        opacity: 1,
        delay: item.id * 200,
      });
    },
  });

  useEffect(() => {
    if (!linkedList) setLinkedList(new DoublyLinkedList("first"));
    else {
      linkedList.append("second");
      linkedList.append("third");
      linkedList.append("fourth");
      linkedList.append("auth");
      setNode(linkedList.head);
    }
  }, [linkedList]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        if (node.next) {
          node.next.value.scrollIntoView({ behavior: "smooth" });
          setNode(node.next);
        }
      } else {
        if (node.previous) {
          node.previous.value.scrollIntoView({ behavior: "smooth" });
          setNode(node.previous);
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [node]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (step >= 3) setStep(0);
      else setStep(step + 1);
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, [step]);

  useEffect(() => {
    if (imageState === IMAGES_COLLECTION1) setImageState(IMAGES_COLLECTION2);
    else setImageState(IMAGES_COLLECTION1);
  }, [step]);

  return (
    <main>
      <div className="main-container">
        <FirstContent
          transition={transition}
          step={step}
          setStep={setStep}
          setNode={setNode}
        />
        <SecondContent />
        <ThirdContent />
        <FourthContent />
        <Authentication setNode={setNode} linkedList={linkedList} />
      </div>
    </main>
  );
};

export default Main;
