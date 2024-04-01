package com.chercheri.designpatterns.strategy;

public class PayPalPayment implements PayStrategy {

    @Override
    public void pay() {
        System.out.println("Paiment PayPal effectue avec success");
    }
}
