import React, { useState } from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";

const Shopping = () => {
  // state = {
  //   products: {
  //     product1: 0,
  //     product2: 0,
  //     product3: 0,
  //     product4: 0,
  //   },
  //   totalPrice: 0,
  // };

  const [products, setProducts] = useState({
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
  });

  const [remove,setRemove] = useState(false);
  const [order,setOrder]= useState(false);


  const [totalPrice, setTotalPrice] = useState(0);

  const prices = {
    product1: 59,
    product2: 79,
    product3: 89,
    product4: 99,
  };

  const addProductHandler = (type) => {
    setProducts((prevCount) => {
      const initialCount = products[type];
      const addCount = initialCount + 1;
      return { ...prevCount, [type]: addCount };
    });

    setTotalPrice(() => {
      const allPrices = prices[type];
      const initialPrice = totalPrice;
      const newPrice = initialPrice + allPrices;
      return newPrice;
    });
    console.log(products);
    console.log(prices);
  };

  const removeProductHandler = (type) => {
    
    setProducts((prevCount) => {
      const initialCount = products[type];
      const subCount = initialCount - 1;
      return { ...prevCount, [type]: subCount };
    });

    setTotalPrice(() => {
        const allPrices = prices[type];
        const initialPrice = totalPrice;
        const newPrice = initialPrice - allPrices;
        return newPrice;
    });
    console.log(products);
    console.log(prices);
  };

  const disableRemoveButton =()=>{ 
      setRemove(true)    
  }

  const showModal = ()=>{
    setOrder(true)
  }

  const closeModal = ()=>{
    setOrder(false)
  }

  const continuePurchase = ()=>{
    console.log('continuePurchase')
   
  }

  // const removeProductHandler = (type) => {
  //   const initialCount = this.state.products[type];
  //   if (initialCount > 0) {
  //     const newCount = initialCount - 1;
  //     const updatedProducts = { ...this.state.products };
  //     updatedProducts[type] = newCount;
  //     this.setState({ products: updatedProducts });
  //   }
  //   const priceSub = prices[type];
  //   const totalPriceAdd = this.state.totalPrice;
  //   const newPrice = totalPriceAdd - priceSub;
  //   this.setState({ totalPrice: newPrice });

  //   console.log(this.state.totalPrice);
  // };

  // addPrice = () =>{
  //     const initialPrice = this.state.totalPrice;
  //     const productPrice = price;
  //     const newPrice = initialPrice + productPrice;
  //     this.setState({totalPrice: newPrice})
  // }

  

  return (
    <Wrapper>
      <Modal modal={order} closeModal={closeModal}>
        <Order products={products} cancell={closeModal} continue={continuePurchase} finallPrice={totalPrice}/>
      </Modal>
      <Controls
        addProduct={addProductHandler}
        removeProduct={removeProductHandler}
        productPrice={totalPrice}
        disabledButton={disableRemoveButton}
        modal={showModal} 
      />
    </Wrapper>
  );
};

export default Shopping;
