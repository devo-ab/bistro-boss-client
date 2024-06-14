import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

//TODO: Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Payment To Confirm Order"}></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <PaymentForm></PaymentForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;