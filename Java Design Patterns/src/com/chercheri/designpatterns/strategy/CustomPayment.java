package com.chercheri.designpatterns.strategy;

public class CustomPayment implements PayStrategy {

    @Override
    public void pay() {
        System.out.println("Paiement personalise a ete avec succes");
    }
}
