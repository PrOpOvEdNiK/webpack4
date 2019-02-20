import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import PhoneItem from "./PhoneItem";

const PhonesList = (props) => (
    <TransitionGroup>
        {props.phones.map((item, i) =>
            <CSSTransition
                in
                key={'phoneitem-' + i}
                timeout={300}
                classNames="phoneitem"
            >
                <PhoneItem
                    key={i}
                    text={item}
                    doDeletePhone={props.doDeletePhone}
                />
            </CSSTransition>
        )}
    </TransitionGroup>
);

PhonesList.propTypes = {
    phones: PropTypes.array.isRequired,
    doDeletePhone: PropTypes.func.isRequired
};

export default PhonesList;