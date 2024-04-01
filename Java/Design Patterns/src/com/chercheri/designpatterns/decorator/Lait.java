package com.chercheri.designpatterns.decorator;

public class Lait extends BoissonDecorateur{
    public Lait(Boisson boisson) {
        super(boisson);
    }

    @Override
    public double cout() {
        return 1.5 + boisson.cout();
    }

    @Override
    public String getDescirption() {
        return boisson.getDescription() + " au lait";
    }
}
