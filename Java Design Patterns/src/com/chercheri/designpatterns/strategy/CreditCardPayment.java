package com.chercheri.designpatterns.strategy;

public class CreditCardPayment implements PayStrategy{

    @Override
    public void pay(){
        System.out.println("Paiement Crdit-Card effectue avec succes");
    }
}
