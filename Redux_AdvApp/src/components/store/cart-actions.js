import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reduxadvapp-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error....",
          message: "Fetching cart data failed!!",
        })
      );
    }
  };
};

//Thunk
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "Sending....",
        message: "Sending cart data!!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://reduxadvapp-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data fail ");
        // dispatch(
        //   uiActions.showNotification({
        //     status: "error",
        //     title: "Error....",
        //     message: "Sending cart data failed!!",
        //   })
        //  );
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success....",
          message: "Sending cart data successfully!!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error....",
          message: "Sending cart data failed!!",
        })
      );
    }

    //const responseData = await response.json();
  };
};
