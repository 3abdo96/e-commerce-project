import React from "react";
import { Typography, Button, Grid, Container } from "@material-ui/core";
import useStyle from "./cartStyle";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cart, onUpdate, onRemove, onEmpty }) => {
  const styles = useStyle();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart--
      <Link className={styles.link} to="/">
        start adding some !
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdate={onUpdate} onRemove={onRemove} />
          </Grid>
        ))}
      </Grid>
      <div className={styles.cartDetails}>
        <Typography variant="h4">
          Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>

        <div>
          <Button
            className={styles.emptyButton}
            type="button"
            color="secondary"
            variant="contained"
            size="large"
            onClick={onEmpty}
          >
            Empty Cart
          </Button>
          <Button
            className={styles.checkoutButton}
            type="button"
            color="primary"
            variant="contained"
            size="large"
            component={Link}
            to="/checkout"
          >
            Checkout Cart
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) {
    return "Loading .....";
  }
  return (
    <Container>
      <div className={styles.toolbar} />
      <Typography className={styles.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
