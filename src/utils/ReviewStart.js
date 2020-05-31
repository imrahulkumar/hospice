import React from 'react';

export const ReviewStar = (props) => {

    let fillStar = 'icofont-star';
    let outlineStar = 'icofont-star-shape';

    return (
        <p>
            <i className={1 <= props.star ? fillStar : outlineStar}></i>
            <i className={2 <= props.star ? fillStar : outlineStar}></i>
            <i className={3 <= props.star ? fillStar : outlineStar}></i>
            <i className={4 <= props.star ? fillStar : outlineStar}></i>
            <i className={5 <= props.star ? fillStar : outlineStar}></i>
        </p>
    )
}