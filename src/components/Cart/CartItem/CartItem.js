import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyle from "./cartItemStyle";
const CartItem = ({ item, onUpdate, onRemove }) => {
  const styles = useStyle();
  return (
    <Card>
      <CardMedia
        className={styles.media}
        image={item.image.url}
        alt={item.name}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <div className={styles.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdate(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography variant="h6">{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdate(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          type="button"
          color="secondary"
          variant="contained"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
