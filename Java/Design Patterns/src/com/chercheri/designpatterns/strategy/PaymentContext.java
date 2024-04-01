package com.chercheri.designpatterns.strategy;

public class PaymentContext {

    private PayStrategy strategy;

    public PaymentContext(PayStrategy strategy) {
        this.strategy = strategy;
    }

    void executePayment() {
        if (strategy == null){
            System.out.println("Aucun moyen de payment n'a ete definit");
            return;
        }
        strategy.pay();
    }

    public void setStrategy(PayStrategy strategy) {
        this.strategy = strategy;
    }
}
