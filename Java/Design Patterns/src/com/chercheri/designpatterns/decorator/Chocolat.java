package com.chercheri.designpatterns.decorator;

public class Chocolat extends BoissonDecorateur {
    public Chocolat(Boisson boisson) {
        super(boisson);
    }

    @Override
    public double cout() {
        return 3.3 + boisson.cout();
    }

    @Override
    public String getDescirption() {
        return boisson.getDescription() + " au chocolat";
    }
}
