import { createContext, useContext, useEffect, useState } from "react";

const AmountContext = createContext();

export function AmountProvider({children}) {
  const [reactAmount, setReactAmount] = useState(0);
  const [vueAmount, setVueAmount] = useState(0);
  const [angularAmount, setAngularAmount] = useState(0);

  useEffect(() => {
    getLocalAmount()
  }, []);

  function getLocalAmount() {
    let localAmount = localStorage.getItem("sticker-amount");
    if(localAmount === null) {
      localStorage.setItem("sticker-amount", JSON.stringify({}));
    } else {
      localAmount = JSON.parse(localAmount)
      const { React, Vue, Angular } = localAmount;
      
      setReactAmount(React);
      setVueAmount(Vue);
      setAngularAmount(Angular);
    }
  };

  function handleSumAmount(e, type) {
    e.preventDefault();
    if (type === 'react') {
      setReactAmount(prevState => prevState + 1);
      return;
    }

    if (type === 'angular') {
      setAngularAmount(prevState => prevState + 1)
      return;
    }

    if (type === 'vue') {
      setVueAmount(prevState => prevState + 1)
      return;
    }
  }

  function handleSubAmount(e, type) {
    e.preventDefault();
    if (type === 'react' && reactAmount > 0) {
      setReactAmount(prevState => prevState - 1);
      return;
    }

    if (type === 'angular' && angularAmount > 0) {
      setAngularAmount(prevState => prevState - 1)
      return;
    }

    if (type === 'vue' && vueAmount > 0) {
      setVueAmount(prevState => prevState - 1)
      return;
    }
  }

  useEffect(() => {
    const React = reactAmount;
    const Vue = vueAmount;
    const Angular = angularAmount;

    localStorage.setItem("sticker-amount", JSON.stringify({React, Vue, Angular}));
  }, [reactAmount, vueAmount, angularAmount]);

  function handleFinish() {
    setReactAmount(0)
    setVueAmount(0)
    setAngularAmount(0)
  };

  return(
    <AmountContext.Provider
      value={{
        reactAmount,
        vueAmount,
        angularAmount,
        setReactAmount,
        setVueAmount,
        setAngularAmount,
        handleSubAmount,
        handleSumAmount,
        handleFinish
      }}>
      {children}
    </AmountContext.Provider>
  )
};

export function useAmountContext() {
  const context = useContext(AmountContext)
  const { 
    reactAmount,
    vueAmount,
    angularAmount,
    setReactAmount,
    setVueAmount,
    setAngularAmount,
    handleSubAmount,
    handleSumAmount,
    handleFinish
   } = context;

  return{ 
    reactAmount,
    vueAmount,
    angularAmount,
    setReactAmount,
    setVueAmount,
    setAngularAmount,
    handleSubAmount,
    handleSumAmount,
    handleFinish
   };
}