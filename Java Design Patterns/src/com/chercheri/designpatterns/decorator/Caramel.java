package com.chercheri.designpatterns.decorator;

public class Caramel extends BoissonDecorateur{

    public Caramel(Boisson boisson) {
        super(boisson);
    }

    @Override
    public double cout() {
        return 2.0 + boisson.cout();
    }

    @Override
    public String getDescirption() {
        return boisson.getDescription() + " au caramel";
    }
}
