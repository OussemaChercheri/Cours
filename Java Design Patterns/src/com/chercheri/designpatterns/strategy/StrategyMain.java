package com.chercheri.designpatterns.strategy;

public class StrategyMain {

    public static void main(String[] args) {
        PaymentContext context = new PaymentContext(new PayPalPayment());
        context.executePayment();

        context.setStrategy( new CreditCardPayment());
        context.executePayment();

        context.setStrategy(null);
        context.executePayment();

        context.setStrategy(new CustomPayment());
        context.executePayment();
    }
}
