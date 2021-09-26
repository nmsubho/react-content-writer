import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import CartItem from '../CartItem/CartItem';


const Cart = (props) => {

    const user = <FontAwesomeIcon icon={faUsers} />
    console.log(props.cart);

    let salary = 0;
    props.cart.map(writer => salary = salary + writer.salary)

    return (
        <div className="mt-5">
            <div className="cart-card l-bg-blue-dark">
                <div className="card-statistic-3 p-5">
                    <div className="card-icon card-icon-large">{user}</div>
                    <div className="mb-4">
                        <h3 className="card-title mb-0">Writers You Choosed</h3>
                        <h5>Total Salary: {salary}</h5>
                        {
                            props.cart.map(writer =>
                                <CartItem name={writer.name} salary={writer.salary} key={writer.id}></CartItem>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;