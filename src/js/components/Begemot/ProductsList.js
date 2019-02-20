import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import ProductItem from "./ProductItem";

const BASE_URL = 'http://www.bgm42.ru';

// простой свой компонент
// const ProductsList = (props) => (
//     props.products.map((item, index) =>
//         <ProductItem product={item} key={index}/>
//     )
// );

// пример со сторонней библиотекой
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.background.paper,
    }
});

const ProductsList = (props) => {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <GridList cols={6} className={classes.gridList}>
                {props.products.map((product, i) => (
                    <GridListTile key={i}>
                        <img src={BASE_URL + product.IMAGE} alt={product.TITLE}/>
                        <GridListTileBar
                            title={product.TITLE}
                            subtitle={<span>Цена: {product.PRICE} &#8381;</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductsList);
