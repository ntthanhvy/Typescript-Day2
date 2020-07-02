import React from "react";
import styled from "styled-components";

import Button from "./Button";

import { getProducts } from "../../services/getProducts";

const StyledContent = styled.div`
  width: 100%;
  padding: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-left: calc(30 / 1440 * 100vw);
  padding-right: calc(30 / 1440 * 100vw);

  & .product-list {
    /* width: 100%; */
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-around;
    /* margin: 0 -10px; */
  }
`;
const CardStyled = styled.div`
  width: calc(250 / 1440 * 100vw);
  height: calc(400 / 1440 * 100vw);
  box-sizing: border-box;
  border: 0.064vw solid #e2e2e2;
  border-radius: 0.649vw solid #e2e2e2;
  padding: calc(200px / 100 * 10);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;
  margin: 0.649vw;

  & .imgContainer {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
    overflow: hidden;
    margin-bottom: calc(20 / 1440 * 100vw);

    & img {
      width: 100%;
    }
  }

  & span {
    font-size: calc(16 / 1440 * 100vw);
  }

  & .btn-group {
    display: flex;
    flex-direction: column;
    margin-top: calc(15 / 1440 * 100vw);

    & .viewBtn {
      background: #0492c2;
      color: #fff;

      &:hover {
        background: #1f456f;
      }
    }
  }
`;

interface ContentProps {}

interface IProduct {
  id: string;
  name: string;
  image: string;
}

interface CardProps {
  addToCart: () => void;
  data: IProduct;
}

const Card: React.FC<CardProps> = props => {
  const { name, id, image } = props.data;
  return (
    <CardStyled>
      <div className="imgContainer">
        <img src={image} alt={`${id}-img`} />
      </div>
      <span>{name}</span>
      <div className="btn-group">
        <Button className="viewBtn">View</Button>
        <Button className="addBtn" onClick={props.addToCart}>
          Add to Cart
        </Button>
      </div>
    </CardStyled>
  );
};

const Content: React.FC<ContentProps> = props => {
  const [cart, setCart] = React.useState<string[]>([]);
  const [products, setProducts] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.data);
    };

    fetchProducts();
  });

  React.useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <StyledContent>
      <div className="product-list">
        {products.map((prod: IProduct) => {
          return (
            <Card
              key={prod.id}
              data={prod}
              addToCart={() => {
                setCart([...cart, prod.id]);
              }}
            />
          );
        })}
      </div>
    </StyledContent>
  );
};

export default Content;
